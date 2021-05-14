import {DEFAULT} from "../types";
import {END_SESSION, FOUND_CARD, SET_ACTIVE_ITEM, START_SESSION} from "./gameTypes";
import {gameInitialState} from "./gameInitialState";

const reducers = {
  [DEFAULT]: (state) => {
    return state;
  },

  [START_SESSION]: (state) => ({...state, gameSessionIsExist: true}),
  [END_SESSION]: (state) => ({...state, gameSessionIsExist: false}),
  [FOUND_CARD]: (state, payload) => ({...state, cardsToFind: state.cardsToFind.filter(card => card.value !== payload.value)}),
  [SET_ACTIVE_ITEM]: (state, payload) => ({...state, active: payload}),
};

export const gameReducer = (state = gameInitialState, action) => {
  const reducer = reducers[action.type] || reducers[DEFAULT];

  return reducer(state, action.payload);
};