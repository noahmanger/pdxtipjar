import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/logo.png";

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <img className="logo" src={logo} width="200" alt={siteTitle} />
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
