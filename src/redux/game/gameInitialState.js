import {generateCardsToFind} from "../../utils/gameHelpers";

export const gameInitialState = {
  gameSessionIsExist: false,
  cardsToFind: generateCardsToFind(),
  active: null, // Активный элемент
  activeTimeout: null,
};