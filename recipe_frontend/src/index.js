import React from "react";
import {createRoot} from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/error-page";

import App from "./components/App";
import Recipes from "./routes/Recipes";
import Recipe from "./routes/Recipe";
import Categories from "./routes/Categories";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Categories />
            },
            {
                path:"recipes",
                element: <Recipes />
            },
            {
                path:"recipes/:recipeId",
                element: <Recipe />
            },
        ]
    },
]);

const root = createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={router} />
)
