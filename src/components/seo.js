import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

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
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="PDX Tip Jar" />
      <meta
        name="twitter:description"
        content="Share a small act of kindness with our
      service industry community during these uncertain times"
      />
      <meta
        name="twitter:image"
        content={`${withPrefix("/")}images/logo.png`}
      />
    </Helmet>
  );
}

export default SEO;
