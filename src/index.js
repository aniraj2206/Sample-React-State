import React from "react";
import ReactDOM from "react-dom";
import Sample from "./sampleCount/Sample";

import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

import "./styles.css";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Sample />
    </div>
  );
}

/* const rootElement = document.getElementById("root"); */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
