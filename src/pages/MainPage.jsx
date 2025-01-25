import React, { useState } from "react";
import Aside from "../components/Aside";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import categories from "../data/Categories";
import gamesData from "../data/games.json";
import merchData from "../data/merch.json";
import accessoriesData from "../data/accessories.json";
import Footer from "../components/Footer";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("games");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [data, setData] = useState(gamesData);

  const handleCategoryChange = (newCategory) => {
    let selectedData;
    switch (newCategory) {
      case "accessories":
        selectedData = accessoriesData;
        break;
      case "merch":
        selectedData = merchData;
        break;
      default:
        selectedData = gamesData;
    }
    setSelectedCategory(newCategory);
    setSelectedSubCategory(null);
    setData(selectedData);
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const filteredData = selectedSubCategory
    ? data.filter(
        (item) =>
          item.categories && item.categories.includes(selectedSubCategory)
      )
    : data;

  return (
    <div className="flex flex-col bg-[#400000] gap-2">
      <Navbar
        categories={Object.keys(categories)}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryChange}
      />
      <div className="min-h-[80vh] pb-20 bg-[#400000]">
        <div className="flex flex-row">
          <div className="h-full w-fit">
            <Aside
              categoryName={selectedCategory}
              subCategories={categories[selectedCategory]}
              onSubCategorySelect={handleSubCategoryChange}
              selectedSubCategory={selectedSubCategory}
            />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap gap-5 h-fit w-full bg-[#800000] p-8 rounded-l-[50px]">
              {filteredData.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  categories={item.categories}
                  consoles={item.consoles}
                  caption={item.caption}
                  price={item.price}
                  show={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
