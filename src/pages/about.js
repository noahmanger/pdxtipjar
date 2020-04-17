import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Wisconsin, along with the rest of the world, is under stay at home orders.
      Bars and restaurants have had to make drastic changes in order to stay in
      business. Takeout and delivery are still allowed, but in most cases establishments
      have laid off or furloughed much of their staff. This will be 
      the case until at least May 26th, but it'll take even longer for people
      to get back to normal.
    </p>
    <p>
      This site was inspired by Jacqi and Noah's <a href="pdxtipjar.com">pdxtipjar.com</a>
      , a virtual "tip jar" for Portland's service industry workers. Simply put, if you've 
      lost hours or your job, we hope you'll sign up to receive tips. If you've been fortunate 
      enough to stay fully employed, we encourage you to tip as often as you can.
    </p>
    <p>Grateful for your support,</p>
    <p>Vicky @thingsimadetoday</p>
    <p>
      <a href="mailto:vicky@thingsimadetoday.com">vicky@thingsimadetoday.com</a>
    </p>

);

export default AboutPage;
