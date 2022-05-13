import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar/nav.js";
import "../styles/Projects.css";
import ProjectInfo from "../components/projectInfo/projectInfo.js";

export default function Projects() {
  const allProjects = [
    {
      name: "Hater",
      git: "https://github.com/Newbz521/hater",
      url: "https://main--hater.netlify.app/",
      img: "img",
      tag: "Hater",
    },
    {
      name: "Inner Bod",
      git: "https://github.com/Newbz521/TheInnerBod",
      url: "https://theinnerbod.netlify.app/",
      img: "img",
      tag: "Inner",
    },
    {
      name: "Places",
      git: "https://github.com/Newbz521/Places-API-Reac-Front-End",
      url: "https://vermillion-toffee-d0faa8.netlify.app/",
      img: "img",
      tag: "Places",
    },
    {
      name: "DDR",
      git: "https://github.com/Newbz521/DDR",
      url: "https://newbz521.github.io/DDR/",
      img: "img",
      tag: "DDR",
    },
  ];
  const [current, setCurrent] = useState("none");

  function changeProject(e) {
    // e.prevent.default();
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
              ></ProjectInfo>
            )
        )}
      </div>
    </div>
  );
}
