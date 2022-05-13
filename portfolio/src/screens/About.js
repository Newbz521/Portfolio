import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar/nav.js";
import "../styles/About.css";
import ProjectInfo from "../components/projectInfo/projectInfo.js";

export default function About() {
  const allProjects = [
    {
      name: "Hater",
      git: "https://github.com/Newbz521/hater",
      url: "https://main--hater.netlify.app/",
      img: "img",
      tag: "Hater",
    },
  ];
  const [current, setCurrent] = useState("none");

  function changeProject(e) {
    // e.prevent.default();
    setCurrent(e.target.dataset.key);
  }

  return (
    <div className="aboutContainer">
      <Nav color={"white"}></Nav>
      <div className="aboutBackground"></div>
      <div className="aboutContent"></div>
    </div>
  );
}
