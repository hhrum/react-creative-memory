import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {MemoryBoard} from "../components/Memory/MemoryBoard";
import {MemoryTimer} from "../components/Memory/MemoryTimer";
import './Memory.css';

export const Memory = () => {

  const {gameSessionIsExist} = useSelector(state => state.game);
  const history = useHistory();

  useEffect(() => {
    if (!gameSessionIsExist) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSessionIsExist]);

  return (
    <DefaultLayout>
      <div className="memory">
        <MemoryTimer/>
        <MemoryBoard/>
      </div>
    </DefaultLayout>
  );
};
