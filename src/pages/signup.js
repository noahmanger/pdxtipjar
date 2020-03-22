import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SignupForm from "../components/SignupForm";

const AboutPage = () => (
  <Layout>
    <SEO title="Sign up to receive tips" />
    <h1>Sign up to receive tips</h1>
    <SignupForm />
  </Layout>
);

export default AboutPage;
