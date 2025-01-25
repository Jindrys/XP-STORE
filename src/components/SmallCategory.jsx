import React from "react";

const SmallCategory = ({ item }) => {
  return (
    <div className="px-3 rounded-full flex justify-center items-center bg-white text-black">
      <h3 className="uppercase">{item}</h3>
    </div>
  );
};

export default SmallCategory;
