import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar/nav.js";
import "../styles/Projects.css";
import ProjectInfo from "../components/projectInfo/projectInfo.js";
import DDR from "../files/DDR.jpeg";
import Inner from "../files/inner.jpeg";
import Maps from "../files/maps.jpeg";
import Hater from "../files/Hater.jpeg";

export default function Projects(props) {
  const allProjects = [
    {
      name: "Hater",
      git: "https://github.com/Newbz521/hater",
      url: "https://haterip.netlify.app/",
      img: Hater,
      tag: "Hater",
      project: "project1",
    },
    {
      name: "Inner Bod",
      git: "https://github.com/Newbz521/TheInnerBod",
      url: "https://theinnerbod.netlify.app/",
      img: Inner,
      tag: "Inner",
      project: "project2",
    },
    {
      name: "Places",
      git: "https://github.com/Newbz521/Places-API-Reac-Front-End",
      url: "https://vermillion-toffee-d0faa8.netlify.app/",
      img: Maps,
      tag: "Places",
      project: "project3",
    },
    {
      name: "DDR",
      git: "https://github.com/Newbz521/DDR",
      url: "https://newbz521.github.io/DDR/",
      img: DDR,
      tag: "DDR",
      project: "project4",
    },
  ];
  const [current, setCurrent] = useState("none");
  function changeProject(e) {
    setCurrent(e.target.dataset.key);
    console.log(e.target.dataset.key);
  }

  const changeNav = () => {
    props.bg("#f6f3e0");
    props.color("grey");
  };
  useEffect(() => {
    changeNav();
  }, []);

  return (
    <div className="projectsContainer">
      {/* <Nav color={"grey"} background={"#f6f3e0"}></Nav> */}
      <div className="background"></div>
      <div className="projectContent">
        {allProjects.map((data) => (
          <div
            className={data.project}
            data-key={data.tag}
            onClick={changeProject}
          >
            <div className="projectText" data-key={data.tag}>
              {data.name}
            </div>
          </div>
        ))}

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
