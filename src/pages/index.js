import React, { useState } from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RandomButton from "../components/RandomButton";
import RandomPerson from "../components/RandomPerson";

const Intro = () => (
  <div className="intro">
    <p>Find someone to tip.</p>
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
          random={true}
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
