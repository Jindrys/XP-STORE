import React from "react";
import NavSec from "../components/NavSec";
import Footer from "../components/Footer";
import Card from "../components/Card";
import like from "../data/like";

function LikePage() {
  return (
    <div className="flex flex-col bg-[#400000] gap-2">
      <NavSec />
      <div className="flex flex-col p-10 gap-4 ">
        <h1 className="font-main text-white text-[40px] uppercase">
          Liked items:
        </h1>
        <div className="min-h-[70vh] bg-[#800000] flex gap-4 p-5 rounded-[20px]">
          {like.map((item) => (
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

      <Footer />
    </div>
  );
}

export default LikePage;
