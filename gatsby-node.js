const path = require('path');
// const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions;
  const newsPageTemplate = path.resolve(`src/templates/NewsDetailPage.tsx`);

  // return graphql(`{
  //   allMarkdownRemark(
  //     sort: { order: DESC, fields: [frontmatter___date] }
  //     limit: 1000
  //     filter: {frontmatter: { draft: { ne: true }, ignored: { ne: true} }}
  //   ) {
  //     edges {
  //       node {
  //         excerpt(pruneLength: 250)
  //         html
  //         id
  //         frontmatter {
  //           date
  //           id_name
  //           absolute_path
  //           title
  //           ignored
  //           draft
  //           tags
  //         }
  //       }
  //     }
  //   }
  // }`)
  //   .then(result => {
  //     if (result.errors) {
  //       return Promise.reject(result.errors);
  //     }
  //     result.data.allMarkdownRemark.edges
  //       .forEach(({ node }) => {
  //         const path = node.frontmatter.absolute_path
  //           || `/news/${node.frontmatter.id_name}`;
  //         createPage({
  //           path,
  //           component: newsPageTemplate,
  //           context: {
  //             id_name: node.frontmatter.id_name
  //           } // additional data can be passed via context
  //         });
  //       });
  //   });
}
