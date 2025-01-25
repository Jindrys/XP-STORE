import React, { useState } from "react";
import SmallCategory from "./SmallCategory";
import IconToggle from "./IconToggle";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, categories, consoles, price, show }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showDetail, setShowDetail] = useState(show);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000); // Alert zmizí po 3 sekundách
  };

  return (
    <div className="relative w-[260px] h-[340px] p-[10px] gap-2 border-[2px] border-[#FF0000] bg-[#400000] rounded-[40px] flex flex-col items-center justify-start">
      <div className="relative h-full">
        <div className="relative w-full h-[150px] rounded-t-[35px] overflow-hidden flex justify-center bg-white">
          <img src={image} alt={`${title} image`} />
          {showDetail && (
            <Link to={`/game/${id}`} className="size-full absolute z-10"></Link>
          )}
        </div>

        <div className="flex flex-col w-[240px] h-full text-white gap-2">
          <h2 className="text-[20px] uppercase font-bold">{title}</h2>
          {/* game category */}
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
            {categories.map((category, index) => (
              <SmallCategory key={index} item={category} />
            ))}
          </div>
          {/* platforms */}
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
            {consoles.map((console, index) => (
              <SmallCategory key={index} item={console} />
            ))}
          </div>
          {/*Like Cart Price*/}
          <div className="absolute bottom-2 size-7 w-full pr-2">
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <IconToggle size={6} />

                <button
                  onClick={handleAddToCart}
                  className="flex z-10 justify-center items-center size-8 rounded-full bg-white cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="font-main">{price}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Alert for "Added to cart" */}
      {showAlert && (
        <div className="absolute bottom-[-20px] left-[-20px] z-20 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Added to cart
        </div>
      )}
    </div>
  );
};

export default Card;
