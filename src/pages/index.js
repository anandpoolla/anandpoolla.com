import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout
    menuItems={[
      { label: "about", to: "/about", class: "parent" },
      { label: "food", to: "/food", class: "parent" },
      { label: "tech", to: "/tech", class: "parent" }
    ]}
  >
    <SEO title="Home" />
    <div className="hero">
      <p className="hero-eyebrow">Welcome to my sandbox</p>
      <h1 className="hero-title">Hi, I'm Anand.</h1>
      <p className="hero-subtitle">
        I am a software engineer with a love for spicy food and technology. You will find both of them here!
      </p>
    </div>

    <div className="section-cards">
      <Link className="section-card" to="/food">
        <h2>Food</h2>
        <p>Home-style South Indian recipes and cooking experiments.</p>
      </Link>
      <Link className="section-card" to="/tech">
        <h2>Tech</h2>
        <p>Guides and projects from building this site and others.</p>
      </Link>
      <Link className="section-card" to="/about">
        <h2>About</h2>
        <p>Who I am, where I've been, and how to reach me.</p>
      </Link>
    </div>

    <div>
      Regarding food, I will be adding tons of recipes to this site. I have two goals in doing this:
      <ul>
        <li>Showcase my favorite foods and my cooking experiments</li>
        <li>Capture traditional, home-style recipes of South India that are woefully underrepresented outside</li>
      </ul>
    </div>

    <h2>Guide</h2>
    <div>
      On the technology side, you will find a guide below. It lists the steps needed to build this website
      using the latest in web technologies, for free (except the domain name of course.)<br/><br/>

      <Link to="/build-this-gatsby-website">Build this Gatsby website</Link><br/><br/>

      This guide will be an evolving document as this site evolves; I will try and capture the timeline as I go along.
      This site is built primarily on these libraries and platforms:
      <ul>
        <li>Gatsby - scaffolding around React with several useful features and plugins</li>
        <li>React - single page web application library with component based architecture</li>
        <li>Node - an asynchronous event-driven JavaScript runtime with a massive library of packages</li>
        <li>Netlify - hosting service for single page applications that works directly with your repository</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
