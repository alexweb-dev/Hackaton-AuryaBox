import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Offrir from "./Pages/Offrir.jsx";
import Receveur from "./Pages/Receveur.jsx";
import PopupDonneur from "./Pages/PopupDonneur.jsx";
import PopupReceveur from "./Pages/PopupReceveur.jsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "Offrir", element: <Offrir /> },
      { path: "Receveur", element: <Receveur /> },
      { path: "PopupDonneur", element: <PopupDonneur /> },
      { path: "PopupReceveur", element: <PopupReceveur /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
