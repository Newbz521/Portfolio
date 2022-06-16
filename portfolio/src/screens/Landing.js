import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import Nav from "../components/navbar/nav.js";
import JS from "../styles/icons8-javascript.gif";
import {} from "react-icons/si";

export default function Landing(props) {
  const [show, setShow] = useState("none");
  const [slideIn, setSlideIn] = useState({ display: "none" });
  const [toggle, setToggle] = useState(true);
  const skills = [
    {
      name: "JS",
      class: "landingJS",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      ),
    },
    {
      name: "HTML",
      class: "landingHTML",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
      ),
    },
    {
      name: "React",
      class: "landingReact",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      ),
    },
    {
      name: "CSS",
      class: "landingCSS",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
      ),
    },
    {
      name: "Mongo.DB",
      class: "landingMongo",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      ),
    },
    {
      name: "Express",
      class: "landingExpress",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      ),
    },
    {
      name: "Node.Js",
      class: "landingNode",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
      ),
    },
    {
      name: "Heroku",
      class: "landingHeroku",
      logo: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
      ),
    },
  ];

  function setDisplay() {
    setToggle((prevCheck) => !prevCheck);
    if (toggle == true) {
      // setShow("");
      setSlideIn({ display: "flex" });
    } else {
      setSlideIn({ transform: "translate(0, 0)" });
    }
  }
  const changeNav = () => {
    props.bg("#5db8b9");
    props.color("white");
  };
  useEffect(() => {
    changeNav();
  }, []);

  return (
    <div className="landingContainer">
      {/* <Nav color={"#FEEFC8"} background={"#5db8b9"}></Nav> */}
      <div className="landingBackground"></div>
      <div className="landingContent">
        {skills.map((data) => (
          <div className={data.class} style={slideIn}>
            {/* {data.name} */}
            <div className="logoImage">{data.logo}</div>
          </div>
        ))}
        <div className="landingProPic" onClick={setDisplay}>
          LY
        </div>
      </div>
    </div>
  );
}
