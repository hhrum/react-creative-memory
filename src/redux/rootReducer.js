import {combineReducers} from "redux";
import {gameReducer} from "./game/gameReducer";
import {timerReducer} from "./timer/timerReducer";
import {boardReducer} from "./board/boardReducer";
import {alertReducer} from "./alert/alertReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  timer: timerReducer,
  board: boardReducer,

  alert: alertReducer
});