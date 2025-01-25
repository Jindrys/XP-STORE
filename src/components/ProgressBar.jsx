import React from "react";
const ProgressBar = ({ width }) => {
  return (
    <div className="w-4/5 bg-black rounded-full text-[15px]">
      <div
        className="min-w-[5%]  bg-[#FF0000] text-white text-center p-1 leading-none rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${width}%` }}
      >
        {width}%
      </div>
    </div>
  );
};
export default ProgressBar;
