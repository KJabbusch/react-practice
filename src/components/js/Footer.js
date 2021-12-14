import React from "react";
import "../css/Footer.css";
import StatList from "./Generate-Stats";

const gitData = [
  {
    name: "Users",
    value: "1,322",
  },
  {
    name: "Posts",
    value: "92",
  },
  {
    name: "Comments",
    value: "3,543",
  },
  {
    name: "Random",
    value: "1,543",
  },
  {
    name: "Cats",
    value: "3,787",
  },
  {
    name: false,
    value: "1,543",
  },
];

const Footer = () => {
  return (
    <div className="Footer-container">
      <footer className="Stats-bar">
        <StatList statData={gitData} />
      </footer>
    </div>
  );
};

export default Footer;
