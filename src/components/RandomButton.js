import React from "react";
import getSheets from "../effects/getSheets";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const RandomButton = ({ text, handleClick }) => {
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
      {text}
    </button>
  );
};

export default RandomButton;
