import {CLOSE_ITEM, GENERATE_BOARD, OPEN_ITEM} from "./boardTypes";

export function generateBoard() {
  return {
    type: GENERATE_BOARD
  };
}

export function openItem(item) {
  return {
    type: OPEN_ITEM,
    payload: item
  }
}

export function closeItems(items) {
  return (dispatch) => {
    setTimeout(() => {
      items.forEach(item => {
        dispatch(closeItem(item));
      });
    }, 500);
  }
}

export function closeItem(item) {
  return {
    type: CLOSE_ITEM,
    payload: item
  }
}