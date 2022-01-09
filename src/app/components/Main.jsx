import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export const Main = ({ groups }) => {
  return (
    <Provider store={store}>
      <div>
        <h2>This is Main component</h2>
        <h3>Dashboard goes here</h3>
      </div>
    </Provider>
  );
};
