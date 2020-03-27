import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";

function SEO({ description, title }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}images/favicon-96x96.png`}
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}images/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}images/favicon-16x16.png`}
        sizes="16x16"
      />
    </Helmet>
  );
}

export default SEO;
