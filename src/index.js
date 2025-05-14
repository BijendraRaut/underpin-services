// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <DragDropContext onDragEnd={() => {}}>
        {" "}
        {/* We'll implement this later */}
        <App />
      </DragDropContext>
    </Provider>
  </StrictMode>
);
