const CNAME = "ajshackathon.ml"


const path = require('path');
const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const lstat = util.promisify(fs.lstat);
const unlink = util.promisify(fs.unlink);
const rmdir = util.promisify(fs.rmdir);
const rename = util.promisify(fs.rename);
const writeFile = util.promisify(fs.writeFile);

const removeDir = async (dir) => {
    try {
        const files = await readdir(dir);
        await Promise.all(files.map(async (file) => {
            try {
                const p = path.join(dir, file);
                const stat = await lstat(p);
                if (stat.isDirectory()) {
                    await removeDir(p);
                } else {
                    await unlink(p);
                    console.log(`Removed file ${p}`);
                }
            } catch (err) {
                console.error(err);
            }
        }))
        await rmdir(dir);
        console.log(`Removed dir ${dir}`);
    } catch (err) {
      console.error(err);
    }
}

async function main() {
  // Remove the previous build
  if (fs.existsSync("./docs")) {
    await removeDir("./docs");
  }
  await rename("./public", "./docs")
  await writeFile("./docs/CNAME", CNAME);
}

main().then(() => console.log("Done"));
