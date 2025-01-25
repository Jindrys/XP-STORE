import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import { Link, useNavigate } from "react-router-dom";
import users from "../data/users.json";

const Navbar = ({ categories, selectedCategory, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.UserName === username && user.Password === password
    );

    if (user) {
      navigate(`/profile/${user.id}`);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <nav className="h-16 gap-10 p-5 pl-8 flex justify-between items-center bg-[#400000]">
      <div className="font-main text-[35px] min-w-[170px] flex size-fit text-white">
        XP STORE
      </div>
      <div className="justify-between gap-5 flex items-center">
        {categories.map((category) => (
          <CategoryBtn
            key={category}
            name={category}
            onClick={() => onCategorySelect(category)}
            isActive={selectedCategory === category}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-center items-center">
        <Link
          to="/like"
          className="flex justify-center items-center size-10 rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </Link>
        <Link
          to="/cart"
          className="flex justify-center items-center size-10 rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </Link>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="font-main uppercase text-white text-center"
        >
          Login here
        </button>
        <Link
          to="/profile/1"
          className="flex justify-center items-center w-10 h-10 rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
        {isOpen && (
          <>
            <div className="size-[500px] z-20 bg-[#800000] text-white border-2 border-[#FF0000] rounded-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="size-full p-10 gap-4 flex flex-col justify-center items-center relative">
                <div
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="absolute right-5 top-5 font-bold cursor-pointer text-[20px]"
                >
                  X
                </div>
                <h1 className="w-fit absolute top-2 font-main uppercase text-[40px] cursor-default">
                  Back for some XP?
                </h1>
                <form
                  onSubmit={handleLogin}
                  className="w-full flex flex-col gap-5 justify-center items-center"
                >
                  {error && <div className="text-red-500 mb-4">{error}</div>}
                  <div className="relative w-full overflow-hidden rounded-full text-black placeholder-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 absolute top-1/2 left-2 -translate-y-1/2 text-gray-700"
                    >
                      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <input
                      className="size-full px-10 py-3"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative w-full overflow-hidden rounded-full text-black placeholder-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 absolute top-1/2 left-2 -translate-y-1/2 text-gray-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <input
                      className="size-full px-10 py-3"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`font-main text-[20px] px-6 py-2 uppercase rounded-full text-white border-2 border-[#FF0000] bg-[#400000] hover:bg-[#FF0000]`}
                  >
                    LOGIN
                  </button>
                </form>
                <div className="flex gap-2">
                  <div className="">Already have an account?</div>
                  <button
                    className="underline uppercase font-main"
                    onClick={() => {
                      setIsLogin(true);
                      setIsOpen(false);
                    }}
                  >
                    Login here
                  </button>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="bg-black/50 absolute inset-0 size-full z-[2]"
            />
          </>
        )}
        {isLogin && (
          <>
            <div className="size-[500px] z-20 bg-[#800000] text-white border-2 border-[#FF0000] rounded-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="size-full p-10 gap-4 flex flex-col justify-center items-center relative">
                <div
                  onClick={() => {
                    setIsLogin(false);
                  }}
                  className="absolute right-5 top-5 font-bold cursor-pointer text-[20px]"
                >
                  X
                </div>
                <h1 className="w-fit absolute top-2 font-main uppercase text-[40px] cursor-default">
                  Want to gain XP?
                </h1>
                <div className="relative w-full overflow-hidden rounded-full text-black placeholder-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 absolute top-1/2 left-2 -translate-y-1/2 text-gray-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="size-full px-10 py-3"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="relative w-full overflow-hidden rounded-full text-black placeholder-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 absolute top-1/2 left-2 -translate-y-1/2 text-gray-700"
                  >
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                  </svg>
                  <input
                    className="size-full px-10 py-3"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="relative w-full overflow-hidden rounded-full text-black placeholder-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 absolute top-1/2 left-2 -translate-y-1/2 text-gray-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="size-full px-10 py-3"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <Link
                  to="/profile/1"
                  className={`font-main text-[20px] px-6 py-2 uppercase rounded-full text-white border-2 border-[#FF0000] bg-[#400000] hover:bg-[#FF0000]`}
                >
                  REGISTER
                </Link>

                <div className="flex gap-2">
                  <div className="">Already have an account?</div>
                  <button
                    className="underline uppercase font-main"
                    onClick={() => {
                      setIsLogin(false);
                      setIsOpen(true);
                    }}
                  >
                    Login here
                  </button>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setIsLogin(false);
              }}
              className="bg-black/50 absolute inset-0 size-full z-[2] cursor-pointer"
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
