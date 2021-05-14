import {CLOSE_TIMER, DROP_TIME, INCREMENT_TIME, INIT_TIMER} from "./timerTypes";

export function initTimer(interval) {
  return {
    type: INIT_TIMER,
    payload: interval
  }
}

export function closeTimer() {
  return {
    type: CLOSE_TIMER
  }
}

export function incrementTime() {
  return {
    type: INCREMENT_TIME
  }
}

export function dropTime() {
  return {
    type: DROP_TIME
  }
}