import React from "react";
import CategoryBtn from "./CategoryBtn";

const Aside = ({ subCategories, onSubCategorySelect, selectedSubCategory }) => {
  return (
    <aside className="w-full p-4 bg-[#400000] text-white">
      <div className="flex flex-col gap-2">
        {subCategories &&
          subCategories.map((subCategory, index) => (
            <CategoryBtn
              key={index}
              name={subCategory}
              onClick={() => onSubCategorySelect(subCategory)}
              isActive={selectedSubCategory === subCategory}
            />
          ))}
      </div>
    </aside>
  );
};

export default Aside;
