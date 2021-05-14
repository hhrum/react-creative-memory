import {combineReducers} from "redux";
import {gameReducer} from "./game/gameReducer";
import {timerReducer} from "./timer/timerReducer";
import {boardReducer} from "./board/boardReducer";
import {alertReducer} from "./alert/alertReducer";
import {historyReducer} from "./history/historyReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  timer: timerReducer,
  board: boardReducer,

  history: historyReducer,

  alert: alertReducer
});