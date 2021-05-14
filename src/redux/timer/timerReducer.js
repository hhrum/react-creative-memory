import {timerInitialState} from "./timerInitialState";
import {DEFAULT} from "../types";
import {CLOSE_TIMER, DROP_TIME, INCREMENT_TIME, INIT_TIMER} from "./timerTypes";

const reducers = {
    [DEFAULT]: state => {
        return state;
    },

    [INIT_TIMER]: (state, payload) => ({...state, interval: payload}),
    [CLOSE_TIMER]: (state) => ({...state, interval: null}),
    [INCREMENT_TIME]: (state) => ({...state, time: state.time + 1}),
    [DROP_TIME]: (state) => ({...state, time: 0}),
};

export const timerReducer = (state = timerInitialState, action) => {
    const reducer = reducers[action.type] || reducers[DEFAULT];

    return reducer(state, action.payload);
}