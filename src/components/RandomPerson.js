import React, { useState } from "react";
import { Link } from "gatsby";
import Modal from "./Modal";
import PaymentButton from "./PaymentButton";
import RandomButton from "./RandomButton";

const RandomPersonContent = props => {
  const [person, setPerson] = useState(props.person);

  return (
    <div className="random-person">
      <h2>Here's a random person who could use your money!</h2>
      <h3>{person.name}</h3>
      <h4>{person.work}</h4>
      {person.role && (
        <p>
          <strong>Role:</strong> {person.role}
        </p>
      )}
      <p>
        <strong>Do you have health care:</strong> {person.healthcare}
      </p>
      <p>
        <strong>Do you support others?</strong> {person.support_others}
      </p>
      <p>
        <strong>{person.app}:</strong> {person.handle}
      </p>
      <PaymentButton app={person.app} handle={person.handle} />
      <RandomButton handleClick={setPerson} text="Find another!" />

      <div className="fine-print">
        <h4>How this works</h4>
        <p>
          The people on this list are all facing significant lost earnings.
          They've provided a payment app that you can send them a virtual tip
          on. Pretend you just spent a night out at the bar and they provided
          you great service over several rounds.
        </p>
        <p>
          If you want to support people from a particular restaurant or with
          particular needs, head on over to{" "}
          <Link to="donate">the full list</Link>.
        </p>
      </div>
    </div>
  );
};

const RandomPerson = ({ person, clearPerson }) => (
  <Modal
    content={<RandomPersonContent person={person} />}
    closeModal={clearPerson}
    dark
  />
);

export default RandomPerson;
