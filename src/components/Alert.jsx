import React from "react";
import "./Alert.css";
import {useSelector} from "react-redux";

export const Alert = () => {
  const alert = useSelector(state => state.alert);

  if (!alert.show) {
    return null;
  }

  return (
    <div className="alert-wrapper">
      <div className="alert">
        <h3 className="alert__title">
          {alert.title}
        </h3>
        <div className="alert__content">
          {alert.content}
        </div>
      </div>
    </div>
  );
};