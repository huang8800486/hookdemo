import React, { useState, useEffect, useContext } from "react";
import Context from "../utils/createContext"; // 全局共享数据中间件
import { useStore } from "./../store";
const child = (props) => {
  const { state, dispatch } = useStore();
  return (
    <div className="child">
      <h4>子组件一: </h4>
      <h2>数字{state.count}</h2>
      <h2>字名{state.name}</h2>
      <button
        onClick={() =>
          dispatch({ type: "CHNAGENAME", data: { name: "Alan2", id: 2 } })
        }
      >
        更改名字
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>减少</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>增加</button>
    </div>
  );
};
export default child;
