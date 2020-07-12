import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function TechTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <div className="tech-post-container">
      <div className="tech-post">
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <div
          className="tech-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`