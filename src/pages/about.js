import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      With a government mandate in effect as of Tuesday, March 17th, all bars
      &amp; restaurants in the state of Oregon are required to close for the
      next four weeks, with the exception of take-out and delivery operations.
      We don't truly know how long this will last &amp; what the lasting
      economic impact will be for service industry workers. I'm following the
      examples of DC, Pittsburgh, &amp; Indianapolis by starting a Virtual Tip
      Jar.
    </p>
    <p>
      If you'd like to support our Portland service industry workers during
      these uncertain--and very stressful--times, I'm compiling a list of cooks,
      bartenders, servers, baristas, dishwashers, &amp; other essential folks
      who keep our city's food &amp; beverage culture thriving. A small
      contribution can help these folks stay afloat financially while we wait to
      see what develops in the coming weeks.
    </p>
    <p>Grateful for your support,</p>
    <p>Jacqi Ko of Hey Love</p>
    <p>
      <a href="mailto:jacqi@heylovepdx.com">jacqi@heylovepdx.com</a>
    </p>
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
        Medical assistance: <a href="https://oregon.gov">oregon.gov</a>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;
