import React, { useState, useEffect, useReducer } from "react";
import Child from "./components/child"; // 子组件
import Child2 from "./components/child2"; // 子组件
import myContext from "./utils/createContext"; // 全局共享数据中间件
import "./App.css";
import { optionsState, optionsReducer } from "./store/test";
// https://sanonz.github.io/2020/state-management-and-performance-optimization-for-react-context-api-with-hooks/
function App() {
  const [options, optionsDispatch] = useReducer(optionsReducer, optionsState);
  // 名字
  const [name, setName] = useState("Aaln");
  // 年龄
  const [age, setAge] = useState(34);
  // 修改名字
  const changeName = (val) => {
    setName(val);
  };
  // 修改年龄
  const changeAge = (val) => {
    setAge(val);
  };
  // 监听变化
  useEffect(() => {
    console.log("监听变化-父组件", name, age);
  });
  return (
    <div className="App">
      <div className="father">
        <h2>父组件</h2>
        <myContext.Provider
          value={{
            age,
            changeAge,
            options,
            optionsDispatch,
          }}
        >
          Count: {options.count}
          <button onClick={() => optionsDispatch({ type: "decrement" })}>减少</button>
          <button onClick={() => optionsDispatch({ type: "increment" })}>增加</button>
          <Child name={name} changeName={changeName} />
          <Child2></Child2>
        </myContext.Provider>
      </div>
    </div>
  );
}
export default App;
