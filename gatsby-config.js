module.exports = {
  siteMetadata: {
    title: `Anand Poolla`,
    description: `Welcome to my personal website build on Gatsby, React and Netlify`,
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
        icon: `src/images/hot-pepper.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
