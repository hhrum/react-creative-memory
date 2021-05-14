import React, {StrictMode} from "react";
import {render} from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";

import {App} from "./App";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootReducer, compose(
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
));

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <StrictMode>
        <App/>
      </StrictMode>
    </Provider>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
render(
  app,
  rootElement
);
