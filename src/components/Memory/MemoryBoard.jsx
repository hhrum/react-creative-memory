import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {MemoryItem} from "./MemoryItem";

import "./MemoryBoard.css";

const BoardRow = ({open, row}) => {
  return (
    <div className="board__row">
      {row.map((item, index) => <MemoryItem open={open} item={item} key={index}/>)}
    </div>
  )
}

export const MemoryBoard = () => {
  const board = useSelector(state => state.board.board);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setOpen(false), 3000)
  });

  return (
    <div className="board">
      {board.map((row, index) => <BoardRow open={open} row={row} key={index}/>)}
    </div>
  );
}