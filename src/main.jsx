import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Layouts/Root/Root";
import ErrorPages from "./Components/ErrorPages";
import Home from "./Pages/Home/Home";
import AllPaintings from "./Pages/All Paintaings/AllPaintings";
import MyArts from "./Pages/MyArts/MyArts";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FirebaseProvider from "./Firebase/FirbeaseProvider/FirebaseProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivsteRoute from "./Components/PrivateRoute/PrivsteRoute";
import AddPaintings from "./Pages/AddPaintings/AddPaintings";
import AllPaintDetails from "./Components/AllPaintings/AllPainDetails/AllPaintDetails";
import UpdateCart from "./Components/UpdateCart/UpdateCart";
import { ThemeProvider } from "./context/ThemeContext";
import RootWithTheme from "./RootWithTheme";

// Create the router for navigation
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://arts-painting-website-server.vercel.app/addpaintings"),
      },
      {
        path: "/allPaintings",
        element: <AllPaintings> </AllPaintings>,
        loader: () =>
          fetch("https://arts-painting-website-server.vercel.app/addpaintings"),
      },
      {
        path: "/allPaintings/:id",
        element: (
          <PrivsteRoute>
            <AllPaintDetails></AllPaintDetails>
          </PrivsteRoute>
        ),
      },
      {
        path: "/addPaintings",
        element: (
          <PrivsteRoute>
            <AddPaintings></AddPaintings>
          </PrivsteRoute>
        ),
      },
      {
        path: "/myArts",
        element: (
          <PrivsteRoute>
            <MyArts></MyArts>
          </PrivsteRoute>
        ),
      },
      {
        path: "/myArts/:id",
        element: (
          <PrivsteRoute>
            <UpdateCart></UpdateCart>
          </PrivsteRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://arts-painting-website-server.vercel.app/myArts/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

// Root component to handle theme persistence

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <ThemeProvider>
        <RootWithTheme />
      </ThemeProvider>
    </FirebaseProvider>
    <ToastContainer />
  </React.StrictMode>
);
