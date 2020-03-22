import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Donate from "../components/Donate";

const AboutPage = () => (
  <Layout>
    <SEO title="Donate" />
    <h1>Donate</h1>
    <Donate />
  </Layout>
);

export default AboutPage;
