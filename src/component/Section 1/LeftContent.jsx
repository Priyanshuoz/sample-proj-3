import React from "react";
import Herotxt from "./Herotxt";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3  flex flex-col justify-between">
      <Herotxt/>
      <Arrow/>
    </div>
  );
};

export default LeftContent;
