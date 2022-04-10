import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import AppConverter from "./Converter/AppConverter";
import ReducerConverter from "./Converter/ReducerConverter";

// const logger = createLogger({
// });

const store = createStore(
  ReducerConverter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppConverter />
    </Provider>
  </React.StrictMode>
);
