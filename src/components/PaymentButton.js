import React from "react";

const stripHandle = handle => {
  if (handle.startsWith("@")) {
    return handle.split("@")[1];
  }
  if (handle.startsWith("$")) {
    return handle.split("$")[1];
  }
  if (handle.startsWith("Paypal.me/")) {
    return handle.split("Paypal.me/")[1];
  }
  return handle;
};

const buildURL = (app, handle) => {
  if (app === "Venmo") {
    return `https://venmo.com/${stripHandle(handle)}`;
  }

  if (app === "Cashapp") {
    return `https://cash.app/$${stripHandle(handle)}`;
  }

  if (app === "Paypal") {
    return `https://paypal.me/${stripHandle(handle)}`;
  }
};

const PaymentButton = ({ app, handle }) => {
  return (
    <a
      className={`payment-button button ${app.toLowerCase()}`}
      href={buildURL(app, handle)}
    >
      Tip on {app}
    </a>
  );
};

export default PaymentButton;
