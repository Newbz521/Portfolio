import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import Resume from "../../files/Resume.pdf";
import { SiHomeadvisor, SiCodesandbox } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

function Nav(props) {
  // const [color, setColor] = useState("white");
  function refreshPage() {
    // setColor("grey");
    window.location.href = "/Projects";
  }

  return (
    <nav
      className="navContainer"
      style={{ "background-color": props.background }}
    >
      <Link className="navLink" to="/" style={{ color: props.color }}>
        <div className="icon">
          <SiHomeadvisor />
        </div>
        <div className="expand">Home</div>
      </Link>
      <Link
        className="navLink"
        // onClick={refreshPage}
        style={{ color: props.color }}
        to="/Projects"
      >
        <div className="icon">
          <SiCodesandbox />
        </div>
        <div className="expand">Project</div>
      </Link>
      <Link className="navLink" to="/About" style={{ color: props.color }}>
        <div className="icon">
          <BiUser />
        </div>
        <div className="expand">About</div>
      </Link>
      <a
        className="navLink"
        href={Resume}
        target="_blank"
        style={{ color: props.color }}
      >
        <div className="icon">
          <MdOutlineFileDownload />
        </div>
        <div className="expand">Resume</div>
      </a>
    </nav>
  );
}

export default Nav;
