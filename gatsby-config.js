'use strict'
module.exports = {
  siteMetadata: {
    title: 'Eastern China Hackathon',
    description: 'Website for Eastern China Hackathon by MSCs',
    siteUrl: 'https://ajshackathon.ml',
    author: {
      name: 'Chen Junda',
      url: 'https://viccrubs.tk',
      email: 'smallda@outlook.com'
    }
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-toc',
            options: {
              header: 'Table of Contents', // the custom header text,
              include: [
                'contents/**/*.md'
              ]
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://ajshackathon.ml'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
  ]
}
