import React from "react";
import {DefaultLayout} from "../layouts/DefaultLayout";
import './History.css';
import {HistoryList} from "../components/History/HistoryList";

export const History = () => {
  return (
    <DefaultLayout>
      <div className="history">
        <h3 className="history__title">
          Список сыгранных вами игр
        </h3>
        <div className="history__content">
          <HistoryList/>
        </div>
      </div>
    </DefaultLayout>
  )
}