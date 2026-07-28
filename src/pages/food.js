import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import FoodTemplate from "../templates/food"

function ingredientsOf(rawMarkdownBody) {
  const match = rawMarkdownBody.match(/##\s*ingredients\s*\n([\s\S]*?)(?=\n##\s|$)/i)
  return match ? match[1].toLowerCase() : ""
}

const  FoodPage = ({
  data: {
    allMarkdownRemark: { edges }
  }, }) => {
  const [query, setQuery] = useState("")
  const normalizedQuery = query.trim().toLowerCase()

  const Posts = edges
    .filter(edge => edge.node.frontmatter.slug)
    .filter(edge => !normalizedQuery || ingredientsOf(edge.node.rawMarkdownBody).includes(normalizedQuery))
    .map(edge => <FoodTemplate key={edge.node.id} preview data={{ markdownRemark: edge.node }} />)
    return (
      <Layout
        menuItems={[
          { label: "about", to: "/about", class: "parent" },
          { label: "tech", to: "/tech", class: "parent" },
          { label: "pantry", to: "/food/pantry", class: "child" }
        ]}
      >
        <div className="food-page">
          <h1>Recipes</h1>
          <input
            type="search"
            className="food-search"
            placeholder="Search by ingredient…"
            aria-label="Search recipes by ingredient"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {Posts.length > 0 ? (
            <div className="food-tiles">
              {Posts}
            </div>
          ) : (
            <p className="food-search-empty">No recipes found with "{query}".</p>
          )}
        </div>
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
          rawMarkdownBody
          excerpt(pruneLength: 140)
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
            image
          }
        }
      }
    }
  }
`

export default FoodPage;
