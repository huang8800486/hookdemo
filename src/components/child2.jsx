import React, { useState, useEffect, useContext } from "react";
const child = (props) => {
  return (
    <div className="child">
      <h4>子组件二: </h4>
      <p>子组件一传过来的值:</p>
    </div>
  );
};
export default child;
