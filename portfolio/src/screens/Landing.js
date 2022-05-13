import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import Nav from "../components/navbar/nav.js";

export default function Landing() {
  const [show, setShow] = useState("none");
  const [slideIn, setSlideIn] = useState({ display: "none" });
  const [toggle, setToggle] = useState(true);
  const skills = [
    {
      name: "JS",
      class: "landingJS",
    },
    {
      name: "HTML",
      class: "landingHTML",
    },
    {
      name: "React",
      class: "landingReact",
    },
    {
      name: "CSS",
      class: "landingCSS",
    },
    {
      name: "Mongo.DB",
      class: "landingMongo",
    },
    {
      name: "Express",
      class: "landingExpress",
    },
    {
      name: "Node.Js",
      class: "landingNode",
    },
    {
      name: "Heroku",
      class: "landingHeroku",
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

  return (
    <div className="landingContainer">
      <Nav color={"#FEEFC8"}></Nav>
      <div className="landingBackground"></div>
      <div className="landingContent">
        {skills.map((data) => (
          <div className={data.class} style={slideIn}>
            {data.name}
          </div>
        ))}
        <div className="landingProPic" onClick={setDisplay}>
          LY
        </div>
      </div>
    </div>
  );
}
