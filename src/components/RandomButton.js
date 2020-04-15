import React from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import getWorkers from "../effects/getWorkers";

const RandomButton = ({ text, handleClick }) => {
  const handleButtonClick = async () => {
    try {
      trackCustomEvent({
        category: "Random Button",
        action: "Click",
        label: text,
      });

      const { workers } = await getWorkers({ random: true })
      const worker = workers.length ? workers[0] : {};

      return handleClick(worker);
    } catch (error) {
      // no-op
    }
  };

  return (
    <button
      className="random-button"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default RandomButton;
