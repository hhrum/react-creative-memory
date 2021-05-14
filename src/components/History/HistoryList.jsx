import React from "react";
import {useSelector} from "react-redux";
import {HistoryListEmpty} from "./HistoryListEmpty";
import {convertTimeToMinutesAndSeconds} from "../../utils/timerHelper";

const HistoryListItem = ({index, game}) => {
  return (
    <div>
      <p><span><b>{(index + 1)}.</b></span> {convertTimeToMinutesAndSeconds(game.time)}</p>
    </div>
  )
}

export const HistoryList = () => {

  const {games} = useSelector(state => state.history);

  if (games.length === 0) {
    return <HistoryListEmpty/>;
  }

  return (
    <div className="history-list">
      {games.map((game, index) => <HistoryListItem index={index} game={game} />)}
    </div>
  )
}