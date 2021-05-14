import React from "react";
import {useSelector} from "react-redux";
import {convertTimeToMinutesAndSeconds} from "../../utils/timerHelper";

export const MemoryTimer = () => {
  const time = useSelector(state => state.timer.time);

  return (
    <div>
      <h3 style={{marginBottom: 32}}>Времени уже прошло: {convertTimeToMinutesAndSeconds(time)} </h3>
    </div>
  )
}