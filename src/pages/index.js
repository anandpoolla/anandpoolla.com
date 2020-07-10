import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout menuItems={[]}>
    <SEO title="Home" />
    <h2>Welcome to my sandbox</h2>
    <p>
      I am a software engineer with a keen interest in spicy food and technology. You will find both of these here!

      <br/><br/>
      Soon, you will find a guide below. It will list the steps needed to build this website using the latest in web
      technologies, for free (except the domain name of course.)<br/><br/>

      I will be adding several, several recipes to this site. I have two goals in doing this:
      <ul>
        <li>Showcase my favorite foods and my cooking experiments</li>
        <li>Capture traditional, home-style recipes of South India that are criminally underrepresented outside</li>
      </ul>
    </p>

    <h2>Guide</h2>
    <p>
      Coming soon...<br/><br/>

      This guide will be an evolving document as this site evolves; I will try and capture the timeline as I go along.
      This site is built primarily on three major technologies and hosted on an advanced platform, they are:
      <ul>
        <li>Gatsby - scaffolding around React with several useful plugins</li>
        <li>React - single page web application library with component based architecture</li>
        <li>Node - an asynchronous event-driven JavaScript runtime with a massive library of packages</li>
        <li>Netlify - free hosting service of single page applications that works directly with your repository</li>
      </ul>
    </p>
  </Layout>
)

export default IndexPage
