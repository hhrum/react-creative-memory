import {historyInitialState} from "./historyInitialState";
import {DEFAULT} from "../types";
import {ADD_GAME_TO_HISTORY} from "./historyTypes";

const reducers = {
  [DEFAULT]: (state) => {
    return state;
  },

  [ADD_GAME_TO_HISTORY]: (state, payload) => ({...state, games: [...state.games, payload]}),
};

export const historyReducer = (state = historyInitialState, action) => {
  const reducer = reducers[action.type] || reducers[DEFAULT];

  return reducer(state, action.payload);
};