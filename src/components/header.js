import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuItems }) => (
    <nav className="nav">
        <Link className="nav-brand" to="/">Anand Poolla</Link>
        {menuItems.map((menu, key) =>
            <Link className={menu.class} key={key} to={menu.to}>{menu.label}</Link>
        )}
        <Link className="btn btn-primary" to="/#contact">Say hello</Link>
    </nav>
)

Header.propTypes = {
  menuItems: PropTypes.array
}

Header.defaultProps = {
  menuItems: [
    { label: "about", to: "/about", class: "parent" },
    { label: "food", to: "/food", class: "parent" },
    { label: "tech", to: "/tech", class: "parent" }
  ]
}

export default Header
