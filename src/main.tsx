import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Light from "./components/Light.tsx";
import Sandbox from "./components/Sandbox.tsx";
import { DonationsList } from "./components/DonationList.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/light", element: <Light /> },
            { path: "/sandbox", element: <Sandbox /> },
            { path: "/donations", element: <DonationsList /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
