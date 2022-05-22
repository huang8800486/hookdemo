import React, { useState, useEffect, useContext, useCallback } from "react";
import eventBus from "../utils/eventsBus";
const child = (props) => {
  const [msg, setMsg] = useState("消息");
  
  const acceptParameters = useCallback((message) => {
    console.log("接收兄弟组一传过来的", message);
    setMsg(message);
  }, []);
  useEffect(() => {
    eventBus.addListener("sayHello", acceptParameters);
    return () => {
      eventBus.removeListener("sayHello", acceptParameters);
    };
  }, [acceptParameters]);
  return (
    <div className="child">
      <h4>子组件二: </h4>
      <p>子组件一传过来的值: {msg}</p>
    </div>
  );
};
export default child;
