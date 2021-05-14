import React from "react";
import {useDispatch} from "react-redux";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import {Home} from "./pages/Home";
import {Memory} from "./pages/Memory";
import {Alert} from "./components/Alert";
import {pauseGame, startGame} from "./redux/game/gameActions";
import "./styles.css";
import {History} from "./pages/History";

export const App = () => {

  const dispatch = useDispatch();
  const isMemory = useRouteMatch("/memory");

  dispatch(isMemory ? startGame() : pauseGame());

  return (
    <div className="App">
      <Alert/>
      <Switch>
        <Route path="/history">
          <History/>
        </Route>
        <Route path="/memory">
          <Memory/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
