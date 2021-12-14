import React from "react";
import "../css/Body.css";
import Hero from "./Hero";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="Body-container">
      <Hero />
      <Sidebar />
    </div>
  );
};

export default Body;
