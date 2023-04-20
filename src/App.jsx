import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./components/SignIn";
import DashBoard from "./components/DashBoard";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn></SignIn>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashBoard></DashBoard>
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <Navigate to="/"></Navigate>,
  },
]);

function App({ Component, pageProps }) {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen">
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
