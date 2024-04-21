import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductList />,
  },
  {
    path: "/products/detail",
    element: <ProductDetails />,
  },
]);

// create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
