import React from "react";

export const Button = ({ title, onClick }) => (
  <button onClick={onClick} className="button">{title}</button>
);
