
const generateItem = (x, y, card) => ({isOpen: false, x, y, card});

export const generateCleanBoard = () => {
  return new Array(6)
    .fill(null)
    .map((el) => new Array(6).fill(null));
}

export const setItemOnBoard = (board, positions, card) => {
  let rand = Math.floor(Math.random() * positions.length);
  let [x, y] = positions.splice(rand, 1)[0];
  board[x][y] = generateItem(x, y, card);
};

export const changeItemOnBoard = (board, item) => {
  const newRow = [...board[item.x]]
  newRow[item.y] = item;
  const newBoard = [...board];
  newBoard[item.x] = newRow;
  return newBoard;
};