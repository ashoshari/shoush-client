import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/componentContainer/layout/Layout";
import HomeComponent from "./components/home/HomeComponent";
import SignupForm from "./components/componentContainer/formContainer/SignupForm";
import LoginForm from "./components/componentContainer/formContainer/LoginForm";
import ComponentContainer from "./components/componentContainer/ComponentContainer";
import NotFound404 from "./components/NotFound/NotFound404";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/:component",
        element: <ComponentContainer />,
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
