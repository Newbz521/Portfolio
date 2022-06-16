import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar/nav.js";
import "../styles/About.css";
import ProjectInfo from "../components/projectInfo/projectInfo.js";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function About(props) {
  const text = [
    "NYC.",
    "Software.Dev",
    "Full.Stack",
    "Designer",
    "Lawrence.Yee",
  ];

  const [word, setWord] = useState("Lawrence.Yee");
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setWord(text[index++ % text.length]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const changeNav = () => {
    props.bg("rgb(248, 145, 108)");
    props.color("white");
  };
  useEffect(() => {
    changeNav();
  }, []);

  return (
    <div className="aboutContainer">
      {/* <Nav color={"white"} background={"rgb(248, 145, 108)"}></Nav> */}
      <div className="aboutBackground"></div>
      <div className="aboutContent">
        <div className="titleWrap">
          <div className="aboutTitle">{word}</div>
        </div>
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
        <div>
          <div className="contacts">
            law.yee2133@gmail.com |{" "}
            <a
              href="https://www.linkedin.com/in/lawrenceyee91/"
              target="_blank"
            >
              <BsLinkedin />
            </a>{" "}
            |
            <a href="https://github.com/Newbz521" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
