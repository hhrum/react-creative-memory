import React from "react";
import "./Header.css";

export const Header = ({ left, center, right }) => {
  return (
    <div className="header">
      <div className="header__left">{left}</div>
      <div className="header__center">{center}</div>
      <div className="header__right">{right}</div>
    </div>
  );
};
