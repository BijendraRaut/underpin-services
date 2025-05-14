// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { TaskProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Provider>
  </StrictMode>
);
