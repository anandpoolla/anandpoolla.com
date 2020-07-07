import { Link } from "gatsby"
import PropTypes, {string} from "prop-types"
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
                <Link key={key} to={"/" + menu}>{menu}</Link>
            )}
        </div>
    </header>
)

Header.propTypes = {
  menuItems: PropTypes.array
}

Header.defaultProps = {
  menuItems: ["about", "food", "tech"]
}

export default Header
