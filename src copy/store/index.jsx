import React, { createContext, useContext, useReducer } from "react";
import Context from "../utils/createContext"; // 全局共享数据中间件
import options from "./options";
import contract from "./contract";
const initState = {
  ...options.state,
  ...contract.state,
};
function reducer(state, action) {
  return {
    ...options.reducer(state, action),
    ...contract.reducer(state, action),
  }[action.type];
}
function StoreProvider() {
  return useReducer(reducer, initState);
}

function useStore() {
  const { state, dispatch } = useContext(Context);
  return { state, dispatch };
}
export { StoreProvider, useStore };
