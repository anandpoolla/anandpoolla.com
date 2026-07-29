import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function TechPage() {
    return (
        <Layout
          menuItems={[
            { label: "about", to: "/about", class: "parent" },
            { label: "food", to: "/food", class: "parent" },
            { label: "projects", to: "/tech/projects", class: "child" }
          ]}
        >
            <h1>Nerd stuff</h1>
            <div>Projects — coming soon.</div>

            <h2>Guide</h2>
            <div>
              On the technology side, you will find a guide below. It lists the steps needed to build this website
              using the latest in web technologies, for free (except the domain name of course.)<br/><br/>

              <Link to="/tech/build-this-gatsby-website">Build this Gatsby website</Link><br/><br/>

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
    );
}