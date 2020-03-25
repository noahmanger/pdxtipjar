import React, { useState } from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RandomButton from "../components/RandomButton";
import RandomPerson from "../components/RandomPerson";

const Intro = () => (
  <div className="intro">
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
    <p>Grateful for your support, Jacqi Ko of Hey Love</p>
  </div>
);

const IndexPage = () => {
  const [randomPerson, setRandomPerson] = useState({});

  return (
    <Layout>
      <SEO title="Home" />
      {Object.keys(randomPerson).length > 0 && (
        <RandomPerson
          person={randomPerson}
          clearPerson={() => setRandomPerson({})}
        />
      )}
      <RandomButton
        handleClick={setRandomPerson}
        text="Find a random person to tip"
      />
      <nav>
        <Link to="signup">Sign up to receive tips</Link>
        <Link to="donate">Browse the full list</Link>
      </nav>
    </Layout>
  );
};

export default IndexPage;
