import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./components/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn></SignIn>,
  },
  {
    path: "/dashboard",
    element: <h1>dashboard</h1>,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
