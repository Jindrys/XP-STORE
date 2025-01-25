import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import CartPage from "./pages/CartPage";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/ErrorPage";
import LikePage from "./pages/LikePage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/game/:idGame",
    element: <GamePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/like",
    element: <LikePage />,
  },
  {
    path: "/profile/:idProfile",
    element: <ProfilePage />,
  },
  {
    path: "/edit",
    element: <AdminPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
