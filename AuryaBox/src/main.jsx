import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Donneur from "./Pages/Donneur.jsx";
import Receveur from "./Pages/Receveur.jsx";
import PopupDonneur from "./Pages/PopupDonneur.jsx";
import PopupReceveur from "./Pages/PopupReceveur.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",  
        element: <Home />,
      },
      {
        path: "/Donneur",
        element: <Donneur />,
      },
      {
        path: "/Receveur",
        element: <Receveur />,
      },
      {
        path: "/PopupDonneur",
        element: <PopupDonneur />,
      },
      {
        path: "/PopupReceveur",
        element: <PopupReceveur />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
