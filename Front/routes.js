import React from "react";
import { Redirect } from "react-router-dom";
import Index from "views/Index";
import Books from "views/pages/Books";
import Clothes from "views/pages/Clothes";
import House from "views/pages/House";
import Kitchen from "views/pages/Kitchen";

export default [
  
  {
    path: "/inicio",
    exact: true,
    component: Index
  },
  {
    path: "/roupa",
    exact: true,
    component: Clothes
  },
  {
    path: "/cozinha",
    exact: true,
    component: Kitchen
  },
  {
    path: "/casa",
    exact: true,
    component: House
  },
  {
    path: "/livro",
    exact: true,
    component: Books
  },
 
];
