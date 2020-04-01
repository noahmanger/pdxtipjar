/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/donate">Donate</Link> | <Link to="/signup">Sign up</Link> |{" "}
        <OutboundLink href="https://github.com/noahmanger/pdxtipjar">
          GitHub
        </OutboundLink>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
