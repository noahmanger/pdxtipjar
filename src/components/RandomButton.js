import React from "react";
import getSheets from "../effects/getSheets";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const RandomButton = ({ handleClick }) => {
  return (
    <button
      className="random-button"
      onClick={() => {
        getSheets()
          .then(response => {
            const rows = response.slice(1); // Skip header row
            const randomInt = getRandomInt(rows.length);
            return handleClick(rows[randomInt]);
          })
          .catch(err => console.log(err));
      }}
    >
      Find a random person to tip
    </button>
  );
};

export default RandomButton;
