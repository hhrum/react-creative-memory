import {ADD_GAME_TO_HISTORY} from "./historyTypes";

export function addGameToHistory(time) {
  return {
    type: ADD_GAME_TO_HISTORY,
    payload: {time}
  }
}