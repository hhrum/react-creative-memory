import {END_SESSION, FOUND_CARD, RELOAD_CARD_TO_FIND, SET_ACTIVE_ITEM, START_SESSION} from "./gameTypes";
import {closeTimer, dropTime, incrementTime, initTimer} from "../timer/timerActions";
import {generateBoard, openItem, closeItems} from "../board/boardActions";
import {showAlert} from "../alert/alertActions";
import {convertTimeToMinutesAndSeconds} from "../../utils/timerHelper";
import {addGameToHistory} from "../history/historyActions";

// TODO: Переписать
export function startGame() {
  return (dispatch, getState) => {
    const {game, timer} = getState();

    if (!game.gameSessionIsExist) {
      dispatch(startSession());
      dispatch(reloadCardsToFind());
      dispatch(generateBoard());
    }

    if (!timer.interval) {
      const interval = setInterval(() => dispatch(incrementTime()), 1000);
      dispatch(initTimer(interval));
    }
  }
}

export function pauseGame() {
  return (dispatch, getState) => {
    const {timer} = getState();
    clearInterval(timer.interval);
    dispatch(closeTimer());
  }
}

export function endGame() {
  return (dispatch, getState) => {
    const {timer} = getState();

    dispatch(pauseGame());
    dispatch(showAlert({title: "Победа!", content: `Вы нашли все карточка за ${convertTimeToMinutesAndSeconds(timer.time)}`}))
    dispatch(addGameToHistory(timer.time));
    dispatch(dropTime());
    dispatch(endSession());
  }
}

export function startSession() {
  return {
    type: START_SESSION
  }
}

export function endSession() {
  return {
    type: END_SESSION
  }
}

export function clickItem(item) {
  return (dispatch, getState) => {
    const {game} = getState();

    dispatch(openItem(item));

    if (!game.active) {
      dispatch(setActiveItem((item)));
      return null;
    }

    if (game.active.card.value === item.card.value) {
      dispatch(foundCard(item.card));
      dispatch(checkFinishGame());
    } else {
      dispatch(closeItems([game.active, item]));
    }

    dispatch(setActiveItem(null));
  }
}

export function reloadCardsToFind() {
  return {
    type: RELOAD_CARD_TO_FIND
  }
}

export function foundCard(card) {
  return {
    type: FOUND_CARD,
    payload: card
  }
}

export function checkFinishGame() {
  return (dispatch, getState) => {
    const {game} = getState();
    if (game.cardsToFind.length === 0) {
      dispatch(endGame());
    }
  }
}

export function setActiveItem(item) {
  return {
    type: SET_ACTIVE_ITEM,
    payload: item
  }
}