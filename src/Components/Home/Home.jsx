import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="container">
        <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;