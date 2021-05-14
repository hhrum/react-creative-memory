import React from "react";

import './MemoryItem.css';
import {useDispatch} from "react-redux";
import {clickItem} from "../../redux/game/gameActions";

export const MemoryItem = ({open, item}) => {
  const dispatch = useDispatch();

  if (!item)
    return null;

  const onClickHandler = (e) => {
    e.preventDefault();

    if (!open && !item.isOpen) {
      dispatch(clickItem(item));
    }
  }

  return (
    <div className="memory-item" onClick={onClickHandler}>
      {open || item.isOpen ? item.card.value : null}
    </div>
  )
}