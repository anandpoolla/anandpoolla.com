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
        short_name: `nandu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#33dd88`,
        display: `minimal-ui`,
        icon: `src/images/hot-pepper.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/tech`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-79914818-1`,
        head: true,
        anonymize: true
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Karla`,
            variants: [`400`, `700`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ]
}
