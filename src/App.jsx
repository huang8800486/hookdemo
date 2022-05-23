import React, { useState, useEffect, useReducer } from "react";
import Child from "./components/child"; // 子组件
import Child2 from "./components/child2"; // 子组件
import "./App.css";
import Context from "./utils/createContext"; // 全局共享数据中间件
import { StoreProvider } from "./store";
function App() {
  const [state, dispatch] = StoreProvider();
  useEffect(() => {
    console.log("useEffect", state.count);
  }, [state.count]);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="father">
          <h2>数字{state.count}</h2>
          <h2>字名{state.name}</h2>
          <button
            onClick={() =>
              dispatch({ type: "CHNAGENAME", data: { name: "Alan1", id: 1 } })
            }
          >
            更改名字
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>减少</button>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>增加</button>
          <Child />
          <Child2 />
        </div>
      </div>
    </Context.Provider>
  );
}
export default App;
