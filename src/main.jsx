import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CarSearch from "./components/Search/CarSearch";
import Login from "./components/Auth/Login";
import CarList from "./components/Admin/CarList";
import CarAdd from "./components/Admin/CarAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/cars",
    element: <CarSearch />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <CarList />,
  },
  {
    path: "/admin/car/add",
    element: <CarAdd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
