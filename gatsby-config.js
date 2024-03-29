module.exports = {
  siteMetadata: {
    title: `Anand Poolla`,
    description: `Welcome to my personal website built with Gatsby, React and Node`,
    author: `@anandpoolla`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anand Poolla`,
        short_name: `Anand Poolla`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `food`,
        path: `${__dirname}/content/food`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tech`,
        path: `${__dirname}/content/tech`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false
              },
              escapeEntities: {},
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          },

        ]
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-79914818-1`,
        head: true,
        anonymize: true
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Mono\:400,700`,
          `Karla\:400,700`,
          `Montserrat|:400,700`
        ],
      },
    }
  ]
}
