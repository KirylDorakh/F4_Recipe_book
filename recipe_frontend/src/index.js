import React from "react";
import {createRoot} from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import App from "./components/App";
import Recipes from "./routes/Recipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"recipes/",
                element: <Recipes />
            },
        ]
    },
]);

const root = createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={router} />
)
