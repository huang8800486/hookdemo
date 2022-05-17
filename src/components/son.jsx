import React, { useState, useEffect, useContext } from "react";
import myContext from "../utils/createContext"; // 全局共享数据中间件
const son = (props) => {
  const { name } = props;
  const { age, changeAge } = useContext(myContext);
  // 修改年龄, 调用useContext传入的方法修改最顶层的数据
  const modifyAge = () => {
    changeAge(35);
  };
  // 监听变化
  useEffect(() => {
    console.log("props==>son", props);
    console.log("监听变化-子组件", name, age);
  });
  return (
    <div className="son">
      <h4>后代组件: </h4>
      <p>一层一层-父传给后代组件的name: {name}</p>
      <p>useContext-父传给后代组件的age: {age}</p>
      <button onClick={modifyAge}>修改祖父组件的age</button>
    </div>
  );
};
export default son;
