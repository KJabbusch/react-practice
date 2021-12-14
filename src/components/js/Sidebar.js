import React from "react";
import "../css/Sidebar.css";
import Login from "./Login";
import Newsletter from "./Newsletter";

const Sidebar = () => {
  return (
    <div className="Sidebar-container">
      <Login />
      <Newsletter />
    </div>
  );
};

export default Sidebar;
