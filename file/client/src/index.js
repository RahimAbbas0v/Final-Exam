import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home';
import Add from './components/AddPage/Add';
import Details from './components/Details/Details';
import Fav from './components/Favpage/Fav';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "/",
    element:<Home/>,
      },
      {
        path: "/fav",
    element:<Fav/>,
      },
      {
        path: "/add",
    element:<Add/>,
      },
      {
        path: "/view",
    element:<Details/>,
      },
      {
        path: "/view/:Id",
    element:<Details/>,
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
