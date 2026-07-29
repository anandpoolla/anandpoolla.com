import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

function FoodImage({ src, alt }) {
  if (src) {
    return <img className="food-image" src={src} alt={alt} />
  }
  return (
    <div className="food-image food-image-placeholder" role="img" aria-label={`${alt} (image coming soon)`}>
      <span>🍽️</span>
    </div>
  )
}

export default function FoodTemplate({
  data, // this prop will be injected by the GraphQL query below.
  preview, // when true, render a tile that links to the full post
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  if (preview) {
    return (
      <Link className="frame food-tile" to={frontmatter.slug}>
        <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
        <FoodImage src={frontmatter.image} alt={frontmatter.title} />
        <div className="food-tile-body">
          <h2 className="food-tile-title">{frontmatter.title}</h2>
          <div className="food-tile-date">{frontmatter.date}</div>
          <p className="food-tile-excerpt">{excerpt}</p>
        </div>
      </Link>
    )
  }

  // Every recipe body opens with a "# Title" heading duplicating frontmatter.title, which we render separately above.
  const contentHtml = html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/, "")

  return (
    <Layout
      menuItems={[
        { label: "about", to: "/about", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" },
        { label: "food", to: "/food", class: "child" },
      ]}
    >
      <div className="food-page food-post-container">
        <div className="food-post">
          <div className="frame food-post-image-frame">
            <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
            <FoodImage src={frontmatter.image} alt={frontmatter.title} />
          </div>
          <h1 className="food-post-title">{frontmatter.title}</h1>
          <div className="food-post-date">{frontmatter.date}</div>
          <div
            className="food-post-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 140)
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        image
      }
    }
  }
`