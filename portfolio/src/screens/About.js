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
      <div className="aboutContent">
        <div className="aboutTitle">About Me</div>
        <div className="aboutDescription">
          {" "}
          From architecture designer to software engineer, I bring experience in
          turning a simple idea into reality. Included in this process are the
          unsure beginnings of pre-planning, to the nitty gritty works of
          production up to the beauty of project completion. In order to execute
          all these steps, I am well versed in working as a team in order to
          provide the best quality of work throughout every phase. I am aiming
          to utilize my experiences in order to support the ongoing development
          of software engineering. For a field still so young, I will work
          towards growing alongside the seemingly infinite potential of
          software, further improving the lives of everyone around us.{" "}
        </div>
      </div>
    </div>
  );
}
