import {DEFAULT} from "../types";
import {HIDE_ALERT, SHOW_ALERT} from "./alertTypes";
import {alertInitialState} from "./alertInitialState";


const reducers = {
  [DEFAULT]: (state) => {
    return state;
  },

  [SHOW_ALERT]: (state, payload) => ({...state, ...payload, show: true}),
  [HIDE_ALERT]: (state) => ({...state, show: false})
}

export const alertReducer = (state = alertInitialState, action) => {
  const reducer = reducers[action.type] || reducers[DEFAULT];

  return reducer(state, action.payload);
}