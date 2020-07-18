import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuItems }) => (
    <header>
        <div>
            <h1 style={{ margin: 0 }}>
                <Link id="brand" to="/">
                    &#127798; Anand Poolla
                </Link>
            </h1>
        </div>
        <div>
            {menuItems.map((menu, key) =>
                <Link className={menu.class} key={key} to={menu.to}>{menu.label}</Link>
            )}
        </div>
    </header>
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
