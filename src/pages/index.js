import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout menuItems={["about"]}>
    <SEO title="Home" />
    <h2>Welcome to my sandbox...</h2>
    <p>
      I am a software engineer with a love for spicy food and technology. You will find both of them here!

      <br/><br/>
      On the technology side, you will soon find a guide below. It will list the steps needed to build this website
      using the latest in web technologies, for free (except the domain name of course.)<br/><br/>

      Regarding food, I will be adding tons of recipes to this site. I have two goals in doing this:
      <ul>
        <li>Showcase my favorite foods and my cooking experiments</li>
        <li>Capture traditional, home-style recipes of South India that are woefully underrepresented outside</li>
      </ul>
    </p>

    <h2>Guide</h2>
    <p>
      Coming soon...<br/><br/>

      This guide will be an evolving document as this site evolves; I will try and capture the timeline as I go along.
      This site is built primarily on these libraries and platforms:
      <ul>
        <li>Gatsby - scaffolding around React with several useful features and plugins</li>
        <li>React - single page web application library with component based architecture</li>
        <li>Node - an asynchronous event-driven JavaScript runtime with a massive library of packages</li>
        <li>Netlify - hosting service for single page applications that works directly with your repository</li>
      </ul>
    </p>
  </Layout>
)

export default IndexPage
