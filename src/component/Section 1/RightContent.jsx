import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="Right" className="h-full flex overflow-x-auto gap-10 p-6 w-2/3 rounded-4xl">
      {props.user.map(function (ele, idx) {
        return <RightCard id={idx} img={ele.img} tag={ele.tag} color={ele.color} />;
      })}
    </div>
  );
};

export default RightContent;
