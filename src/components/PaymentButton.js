import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const stripHandle = handle => {
  if (handle.startsWith("@")) {
    return handle.split("@")[1];
  }
  if (handle.startsWith("$")) {
    return handle.split("$")[1];
  }
  if (handle.toLowerCase().startsWith("paypal.me/")) {
    return handle.toLowerCase().split("paypal.me/")[1];
  }
  if (handle.toLowerCase().startsWith("https://www.paypal.me/")) {
    return handle.toLowerCase().split("https://www.paypal.me/")[1];
  }
  if (handle.toLowerCase().startsWith("https://paypal.me/")) {
    return handle.toLowerCase().split("https://paypal.me/")[1];
  }
  return handle;
};

const buildURL = (app, handle) => {
  if (app.toLowerCase() === "venmo") {
    return `https://venmo.com/${stripHandle(handle)}`;
  }

  if (app.toLowerCase() === "cashapp") {
    return `https://cash.app/$${stripHandle(handle)}`;
  }

  if (app.toLowerCase() === "paypal") {
    return `https://paypal.me/${stripHandle(handle)}`;
  }
};

const PaymentButton = ({ app, handle }) => {
  return (
    <OutboundLink
      className={`payment-button button ${app.toLowerCase()}`}
      href={buildURL(app, handle)}
      target="_blank"
    >
      Tip on {app}
    </OutboundLink>
  );
};

export default PaymentButton;
