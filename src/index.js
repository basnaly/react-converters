import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.css";
import AppConverter from './Converter/AppConverter'
import ReducerConverter from "./Converter/ReducerConverter";
import reportWebVitals from './reportWebVitals';

// const logger = createLogger({
// });

const store = createStore(
  ReducerConverter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
        <AppConverter />
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
);