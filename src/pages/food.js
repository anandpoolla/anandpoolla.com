import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import FoodTemplate from "../templates/food"

const  FoodPage = ({
  data: {
    allMarkdownRemark: { edges }
  }, }) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.slug)
    .map(edge => <FoodTemplate key={edge.node.id} data={{ markdownRemark: edge.node }} />)
    return (
      <Layout
        menuItems={[
          { label: "about", to: "/about", class: "parent" },
          { label: "tech", to: "/tech", class: "parent" },
          { label: "pantry", to: "/food/pantry", class: "child" }
        ]}
      >
        <h1>Recipes</h1>
        {Posts}

      </Layout>
    );
}

export const query = graphql`
  query FoodPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/^\\/food\\//" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default FoodPage;