import React from "react";
import NavSec from "../components/NavSec";
import Footer from "../components/Footer";
import games from "../data/games.json";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";
import BigCategory from "../components/BigCategory";
import IconToggle from "../components/IconToggle";
import { Link } from "react-router-dom";

const GamePage = () => {
  const { idGame } = useParams();
  const game = games.find((game) => game.id === Number(idGame));

  if (!game) {
    return <ErrorPage />;
  }

  const { title, image, categories, consoles, caption, price } = game;
  return (
    <div className="flex flex-col bg-[#400000] gap-2">
      <NavSec />
      <div className="relative h-[80vh] p-5 flex flex-col gap-5 items-center">
        <Link
          to="/"
          className="flex gap-2 text-white uppercase font-main justify-center items-center absolute top-0 left-0 translate-x-1/2 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          <h2>Back</h2>
        </Link>
        <div className="flex gap-10">
          <img
            src={image}
            alt={title}
            className="flex h-[500px] aspect-video bg-white rounded-2xl"
          ></img>
          <div className="text-white text-[20px] flex flex-col gap-10">
            <h1 className="font-main text-white text-[45px]">{title}</h1>
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2 items-center">
                <h2>Category:</h2>
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
                  {categories.map((category, index) => (
                    <BigCategory key={index} item={category} />
                  ))}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h2>Platform:</h2>
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
                  {consoles.map((category, index) => (
                    <BigCategory key={index} item={category} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-main text-[30px]">{price}</div>

              <div className="flex items-center bg-white size-fit px-4 py-2 text-black uppercase gap-2 rounded-full cursor-pointer hover:bg-[#AA0000] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                add to cart
              </div>
              <IconToggle size={8} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-white text-[20px] text-center text-wrap w-[70%]">
            {caption}
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GamePage;
