import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar/nav.js";
import "../styles/Projects.css";
import ProjectInfo from "../components/projectInfo/projectInfo.js";
import DDR from "../files/DDR.jpeg";
import Inner from "../files/inner.jpeg";
import Maps from "../files/maps.jpeg";
import Hater from "../files/Hater.jpeg";

export default function Projects() {
  const allProjects = [
    {
      name: "Hater",
      git: "https://github.com/Newbz521/hater",
      url: "https://main--hater.netlify.app/",
      img: Hater,
      tag: "Hater",
    },
    {
      name: "Inner Bod",
      git: "https://github.com/Newbz521/TheInnerBod",
      url: "https://theinnerbod.netlify.app/",
      img: Inner,
      tag: "Inner",
    },
    {
      name: "Places",
      git: "https://github.com/Newbz521/Places-API-Reac-Front-End",
      url: "https://vermillion-toffee-d0faa8.netlify.app/",
      img: Maps,
      tag: "Places",
    },
    {
      name: "DDR",
      git: "https://github.com/Newbz521/DDR",
      url: "https://newbz521.github.io/DDR/",
      img: DDR,
      tag: "DDR",
    },
  ];
  const [current, setCurrent] = useState("none");

  function changeProject(e) {
    setCurrent(e.target.dataset.key);
  }

  return (
    <div className="projectsContainer">
      <Nav color={"grey"}></Nav>
      <div className="background"></div>
      <div className="projectContent">
        <div className="project1" data-key={"Hater"} onClick={changeProject}>
          <div className="projectText" data-key={"Hater"}>
            Hater
          </div>
        </div>
        <div className="project2" data-key={"Inner"} onClick={changeProject}>
          <div className="projectText" data-key={"Inner"}>
            Inner Bod
          </div>
        </div>
        <div className="project3" data-key={"Places"} onClick={changeProject}>
          <div className="projectText" data-key={"Places"}>
            Places
          </div>
        </div>
        <div className="project4" data-key={"DDR"} onClick={changeProject}>
          <div className="projectText" data-key={"DDR"}>
            DDR
          </div>
        </div>

        {allProjects.map(
          (data) =>
            data.tag.includes(current) && (
              <ProjectInfo
                git={data.git}
                url={data.url}
                name={data.name}
                image={data.img}
                closer={setCurrent}
              ></ProjectInfo>
            )
        )}
      </div>
    </div>
  );
}
