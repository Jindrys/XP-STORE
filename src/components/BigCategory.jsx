import React from "react";

function BigCategory({ item }) {
  return (
    <div className="px-5 py-1 rounded-full flex justify-center items-center bg-white text-black">
      <h3 className="uppercase">{item}</h3>
    </div>
  );
}

export default BigCategory;
