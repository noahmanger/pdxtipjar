import React, { useState } from "react";
import Modal from "./Modal";
import PaymentButton from "./PaymentButton";
import RandomButton from "./RandomButton";

const RandomPersonContent = props => {
  const [person, setPerson] = useState(props.person);

  return (
    <div className="random-person">
      <h2>Here's someone who could use a tip!</h2>
      <h3>{person.name}</h3>
      <h4>{person.work}</h4>
      {person.role && (
        <p>
          <strong>Role:</strong> {person.role}
        </p>
      )}
      <p>
        <strong>{person.app}:</strong> {person.handle}
      </p>
      <PaymentButton app={person.app} handle={person.handle} />
      {props.random && (
        <RandomButton handleClick={setPerson} text="Find another!" />
      )}
    </div>
  );
};

const RandomPerson = ({ person, clearPerson, random }) => (
  <Modal
    content={<RandomPersonContent person={person} random={random} />}
    closeModal={clearPerson}
  />
);

export default RandomPerson;
