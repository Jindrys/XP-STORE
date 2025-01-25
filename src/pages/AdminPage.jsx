import React, { useState } from "react";
import Card from "../components/Card";
import NavSec from "../components/NavSec";
import gamesData from "../data/games.json";
import accessories from "../data/accessories.json";
import merch from "../data/merch.json";

function AdminPage() {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);
  const [games, setGames] = useState(gamesData);

  const handleCardClick = (game) => {
    setCurrentGame(game);
    setOpenUpdate(true);
  };

  const handleInputChange = (field, value) => {
    const updatedGame = { ...currentGame, [field]: value };

    const updatedGames = games.map((game) =>
      game.id === currentGame.id ? updatedGame : game
    );

    setCurrentGame(updatedGame);
    setGames(updatedGames);
  };

  return (
    <div className="flex flex-col bg-[#400000] gap-2">
      <NavSec />
      <div className="min-h-[80vh] p-10 bg-[#400000] text-white">
        <h1 className="font-main uppercase text-[50px]">Admin page</h1>
        <div className="p-10 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-main text-[40px]">Games:</h2>
            <div className="flex flex-wrap gap-4">
              {games.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="cursor-pointer"
                >
                  <Card {...item} show={false} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-main text-[40px]">Accessories:</h2>
            <div className="flex flex-wrap gap-4">
              {accessories.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="cursor-pointer"
                >
                  <Card {...item} show={false} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-main text-[40px]">Merch:</h2>
            <div className="flex flex-wrap gap-4">
              {merch.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="cursor-pointer"
                >
                  <Card {...item} show={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openUpdate && currentGame && (
        <>
          <div className="w-1/2 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-[50px] py-[30px] bg-[#800000] text-white p-4 rounded-[40px]">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-main text-[20px] uppercase">Title:</h2>
                <input
                  className="w-full text-black bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                  type="text"
                  value={currentGame.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div>
                <h2 className="font-main text-[20px] uppercase">Categories:</h2>
                <input
                  className="w-full text-black bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                  type="text"
                  value={currentGame.categories.join(", ")}
                  onChange={(e) =>
                    handleInputChange("categories", e.target.value.split(", "))
                  }
                />
              </div>
              <div>
                <h2 className="font-main text-[20px] uppercase">Consoles:</h2>
                <input
                  className="w-full text-black bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                  type="text"
                  value={currentGame.consoles.join(", ")}
                  onChange={(e) =>
                    handleInputChange("consoles", e.target.value.split(", "))
                  }
                />
              </div>
              <div>
                <h2 className="font-main text-[20px] uppercase">Price:</h2>
                <input
                  className="w-full text-black bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                  type="text"
                  value={currentGame.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                />
              </div>

              <button
                onClick={() => {
                  setOpenUpdate(false);
                }}
                className="bg-[#FF0000] px-4 py-2 rounded-full uppercase font-main text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
          <div
            onClick={() => setOpenUpdate(false)}
            className="size-full bg-black/50 absolute z-10 cursor-pointer"
          ></div>
        </>
      )}
    </div>
  );
}

export default AdminPage;
