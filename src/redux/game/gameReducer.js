import {DEFAULT} from "../types";
import {END_SESSION, FOUND_CARD, RELOAD_CARD_TO_FIND, SET_ACTIVE_ITEM, START_SESSION} from "./gameTypes";
import {gameInitialState} from "./gameInitialState";
import {generateCardsToFind} from "../../utils/gameHelpers";

const reducers = {
  [DEFAULT]: (state) => {
    return state;
  },

  [START_SESSION]: (state) => ({...state, gameSessionIsExist: true}),
  [END_SESSION]: (state) => ({...state, gameSessionIsExist: false}),
  [RELOAD_CARD_TO_FIND]: (state) => ({...state, cardsToFind: generateCardsToFind()}),
  [FOUND_CARD]: (state, payload) => ({...state, cardsToFind: state.cardsToFind.filter(card => card.value !== payload.value)}),
  [SET_ACTIVE_ITEM]: (state, {item, timeout}) => ({...state, active: item, activeTimeout: timeout}),
};

export const gameReducer = (state = gameInitialState, action) => {
  const reducer = reducers[action.type] || reducers[DEFAULT];

  return reducer(state, action.payload);
};