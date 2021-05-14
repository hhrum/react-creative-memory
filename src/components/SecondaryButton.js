import React from "react";

export const SecondaryButton = ({ title, onClick }) => (
  <button onClick={onClick} className="button button--secondary">{title}</button>
);