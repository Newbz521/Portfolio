import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import Resume from "../../files/Resume.pdf";

function Nav(props) {
  // const [color, setColor] = useState("white");
  function refreshPage() {
    // setColor("grey");
    window.location.href = "/Projects";
  }

  return (
    <nav className="navContainer">
      <Link className="navLink" to="/" style={{ color: props.color }}>
        Home
      </Link>
      <Link
        className="navLink"
        onClick={refreshPage}
        style={{ color: props.color }}
        to="/Projects"
      >
        Projects
      </Link>
      <Link className="navLink" to="/About" style={{ color: props.color }}>
        About
      </Link>
      <a
        className="navLink"
        href={Resume}
        target="_blank"
        style={{ color: props.color }}
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
