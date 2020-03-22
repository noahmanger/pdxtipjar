import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://ofwemergencyfund.org/">One Fair Wage Emergency Fund</a>
      </li>
      <li>
        <a href=" https://www.restaurantworkerscf.org/news/2020/3/15/restaurant-workers-community-foundation-announces-the-formation-of-restaurant-workers-covid19-crisis-relief-fund">
          Restaurant Workers’ Community Foundation COVID19 Crisis Relief Fund
        </a>
      </li>
      <li>
        <a href="https://www.usbgfoundation.org/beap-application">
          USBG National Charity Foundation
        </a>
      </li>
      <li>
        Food assistance: <a href="https://oregon.gov">oregon.gov</a> |{" "}
        <a href="https://oregonfoodbank.org">Oregon Food Bank</a>
      </li>
      <li>
        Rent assistance: <a href="https://homeforward.org">Home Forward</a> |{" "}
        <a href="https://caowash.org">Community Action</a>
      </li>
      <li>
        Utility assistance: <a href="https://impactnw.org">Impact NW</a> |{" "}
        <a href="https://humansolutions.org">Human Solutions</a>
      </li>
      <li>
        Medicatl assistance: <a href="https://oregon.gov">oregon.gov</a>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;
