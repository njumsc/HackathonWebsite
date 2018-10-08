# Eastern China Hackathon by MSC

[Check it now!](https://viccrubs.tk)

## Development

**[Yarn](https://yarnpkg.com/zh-Hans/)** instead of NPM is required.

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8000
yarn start

# run production build
yarn run build
```

Notice that a dependency **sharp** needs to pull [prebuilt binaries from GitHub releases](https://github.com/lovell/sharp-libvips/releases) during installation. However, GitHub hosts release files on AWS, which is blocked in China. Failure to download these files will cause failure in installation and following steps.

To successfully download these files, follow these steps:
1. Download the file yourself
2. Upload the file into a cloud service (I use qiniu storage) and get the URL, which needs to be accessible from Internet
3. Set the environment variable `SHARP_DIST_BASE_URL` to the URL without the filename itself
4. Disable your proxy! (**important** if you are using shadowsocks)
5. `yarn install` and you are ready to go!

You may use `http://olaviw8n8.bkt.clouddn.com/` as the BASE_URL to test but be sure to change it as long as you upload it yourself.

See [the official docs](http://sharp.pixelplumbing.com/en/stable/install/#pre-compiled-libvips-binaries) about changing the base url for the binary.

## Deployment

Before deploying, `npm run build` first!

`npm run deploy` will

2. rename to `./docs`
3. write in CNAME

Then push to master. GitHub will publish the website.

## Credits

Built with [Gatsby](https://www.gatsbyjs.org/) - the blazing-fast static site generator for [React](https://facebook.github.io/react/).
