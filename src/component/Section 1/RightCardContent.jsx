import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCardContent = () => {
  return (
    <div className="absolute h-full w-full flex flex-col justify-between top-0 left-0  p-8">
      <h2 className="bg-white text-xl font-semibold h-12 w-12 rounded-full flex justify-center items-center">
        1
      </h2>
      <div>
        <p className="text-lg leading-relaxe text-white mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          molestias accusantium exercitationem maiores rerum provident!
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
            Satisfied
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
