import {boardInitialState} from "./boardInitialState";
import {DEFAULT} from "../types";
import {CLOSE_ITEM, GENERATE_BOARD, OPEN_ITEM, REMOVE_ITEM} from "./boardTypes";
import {changeItemOnBoard, generateCleanBoard, setItemOnBoard} from "../../utils/boardHelpers";

import cards from "../../data/cards";

const reducers = {
  [DEFAULT]: (state) => {
    return state;
  },

  [GENERATE_BOARD]: (state) => {
    const board = generateCleanBoard();

    const positions = [];

    board.forEach((row, x) => {
      row.forEach((col, y) => {
        positions.push([x, y])
      })
    })

    cards.forEach(card => {
      setItemOnBoard(board, positions, card);
      setItemOnBoard(board, positions, card);
    });

    return {...state, board: board};
  },

  [OPEN_ITEM]: (state, payload) => {
    const board = changeItemOnBoard(state.board, {...payload, isOpen: true});
    return {...state, board};
  },
  [CLOSE_ITEM]: (state, payload) => {
    const board = changeItemOnBoard(state.board, {...payload, isOpen: false});
    return {...state, board};
  },
  [REMOVE_ITEM]: (state, payload) => {
    const board = changeItemOnBoard(state.board, {...payload, card: null});
    return {...state, board};
  },
};

export const boardReducer = (state = boardInitialState, action) => {
  const reducer = reducers[action.type] || reducers[DEFAULT];

  return reducer(state, action.payload);
}