import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FoodTemplate from "../templates/food"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const RecipeTiles = edges
    .filter(edge => edge.node.frontmatter.slug)
    .map(edge => <FoodTemplate key={edge.node.id} preview data={{ markdownRemark: edge.node }} />)

  return (
    <Layout
      menuItems={[
        { label: "about", to: "/about", class: "parent" },
        { label: "food", to: "/food", class: "parent" },
        { label: "tech", to: "/tech", class: "parent" }
      ]}
    >
      <SEO title="Home" />

      <section className="hero">
        <h1 className="display">
          <span className="line">Software engineer.</span>{" "}
          <span className="line">Now: home cook.</span>
        </h1>
        <p className="sub">
          I spent two decades writing software before I started spending just as much time in the
          kitchen, documenting the South Indian recipes I grew up on. This is where I keep both — the
          code, the projects, and the write-ups.
        </p>
        <div className="row">
          <Link to="/tech" className="btn btn-primary">See my work</Link>
          <Link to="/food" className="btn btn-ghost">Read the blog</Link>
        </div>
      </section>

      <section className="sheet" aria-label="Anand Poolla — background">
        <div className="frame plate">
          <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
          <header className="title-block">
            <span className="tb-title">Anand Poolla — background</span>
            <span className="tb-cell">AP-01</span>
            <span className="tb-cell">Rev A</span>
          </header>
          <table className="spec">
            <colgroup>
              <col className="c-num" />
              <col className="c-prop" />
              <col className="c-val" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Property</th>
                <th scope="col">Value</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="s-num">01</td>
                <td>First program written</td>
                <td className="s-val">Age 10</td>
                <td className="s-rem">On a Sinclair ZX Spectrum +3</td>
              </tr>
              <tr>
                <td className="s-num">02</td>
                <td>Moved to the United States</td>
                <td className="s-val">2000</td>
                <td className="s-rem">For a Master's degree</td>
              </tr>
              <tr>
                <td className="s-num">03</td>
                <td>U.S. citizenship</td>
                <td className="s-val">2019</td>
                <td className="s-rem">Naturalized</td>
              </tr>
              <tr>
                <td className="s-num">04</td>
                <td>Currently documenting</td>
                <td className="s-val">South Indian recipes</td>
                <td className="s-rem">Traditional, home-style dishes</td>
              </tr>
            </tbody>
          </table>
          <p className="sheet-note">Full history on the <Link to="/about">About page</Link>.</p>
        </div>
      </section>

      <section className="features">
        <span className="kicker">02 · Two tracks, one site</span>
        <hr className="caption-rule" />
        <div className="cells">
          <Link to="/tech" className="frame cell-frame">
            <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
            <h2>The engineer</h2>
            <p>Two decades of software work, plus the odd side project — like this site. Guides and projects live here.</p>
          </Link>
          <Link to="/food" className="frame cell-frame">
            <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
            <h2>The cook</h2>
            <p>Home-style South Indian recipes, written the way I actually cook them.</p>
          </Link>
          <Link to="/about" className="frame cell-frame">
            <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
            <h2>The story</h2>
            <p>Where I grew up, how I got here, and how to reach me.</p>
          </Link>
        </div>
      </section>

      <section className="split">
        <div className="split-copy">
          <span className="kicker">03 · Featured</span>
          <hr className="caption-rule" />
          <h2 className="split-title">Stocking the pantry</h2>
          <p className="note">
            Before the recipes, the ingredients. A running list of what to keep stocked for South
            Indian home cooking, and where to find it.
          </p>
          <p className="note"><Link to="/food/pantry">Visit the pantry →</Link></p>
        </div>
        <figure className="frame split-figure">
          <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
          <div className="figure-placeholder" role="img" aria-label="Pantry photo coming soon">
            <span>🧂 Pantry photo</span>
          </div>
        </figure>
      </section>

      <section className="features">
        <span className="kicker">04 · From the blog</span>
        <hr className="caption-rule" />
        <p className="intro">South Indian recipes, written the way I actually cook them.</p>
        <div className="food-tiles">
          {RecipeTiles}
        </div>
      </section>

      <section className="quote">
        <figure>
          <blockquote>“I am nevertheless curious and adventurous, especially so if I'm hosting guests.”</blockquote>
          <figcaption>— Anand, on cooking for people</figcaption>
        </figure>
      </section>

      <section className="close" id="contact">
        <span className="kicker">05 · Get in touch</span>
        <hr className="caption-rule" />
        <h3>Say hello</h3>
        <p className="sub">Reach out about engineering, recipes, or just to say hi.</p>
        <form
          className="signup"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ position: "absolute", left: "-9999px" }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="you@example.com"
            aria-label="Email address"
            required
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/^\\/food\\//" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
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

export default IndexPage
