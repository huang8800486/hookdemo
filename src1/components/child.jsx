import React, { useState, useEffect, useContext } from "react";
import myContext from "../utils/createContext"; // 全局共享数据中间件
const child = (props) => {
  const { name, changeName } = props;
  const { options, age, changeAge, optionsDispatch } = useContext(myContext);
  // 修改名字, 调用useContext传入的方法修改最顶层的数据
  const modifyName = () => {
    changeName("AlanTao");
  };
  // 修改年龄, 调用useContext传入的方法修改最顶层的数据
  const modifyAge = () => {
    changeAge(36);
  };
  // 监听变化
  useEffect(() => {
    console.log("props==>child", props, options);
    console.log("监听变化-孙组件", name, age);
  });
  const emmitEvent = () => {
    eventBus.emit("sayHello", "-----兄弟, 点击时我传值过来了");
    optionsDispatch({ type: "decrement" });
  };
  return (
    <div className="child">
      <h4>子组件一: </h4>
      <p>父传给子组件的name: {name}</p>
      <p>父传给子代组件的age: {age}</p>
      <button onClick={modifyName}>修改父组件的name</button>
      <button onClick={modifyAge}>修改父组件的age</button>
      <button onClick={emmitEvent}>传值给兄弟组件二</button>
      <Son name={name} />
    </div>
  );
};
export default child;
