/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, menuItems }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header menuItems={menuItems} />
        <main>{children}</main>
        <footer>
          <div>
            © {new Date().getFullYear()}, Anand Poolla
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    menuItems: PropTypes.array
}

export default Layout
