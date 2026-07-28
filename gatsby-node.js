const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Frontmatter {
      slug: String
      date: Date @dateformat
      title: String
      image: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
  `)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const foodPostTemplate = path.resolve(`./src/templates/food.js`)
  const techPostTemplate = path.resolve(`./src/templates/tech.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(edge => {
    console.log("====================")
    console.log(edge.node.frontmatter.slug)
    console.log("====================")
    const isFoodPost = edge.node.frontmatter.slug.startsWith("/food/")
    createPage({
      path: `${edge.node.frontmatter.slug}`,
      component: isFoodPost ? foodPostTemplate : techPostTemplate,
      context: {
        // additional data can be passed via context
        id: edge.node.id,
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}