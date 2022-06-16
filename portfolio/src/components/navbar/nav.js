import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./nav.css";
import Resume from "../../files/Resume.pdf";
import { SiHomeadvisor, SiCodesandbox } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";

function Nav(props) {
  const [color, setColor] = useState("");
  const [bg, setBg] = useState("");
  function setTheme() {
    setColor(props.color);
    setBg(props.bg);
  }

  function refreshPage() {
    // setColor("grey");
    window.location.href = "/Projects";
  }
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <nav
      className="navContainer"
      style={{ color: props.color, background: props.bg }}
    >
      <Link
        className="navLink"
        to="/"
        style={{ color: props.color }}
        // onClick={function Change() {
        //   setColor("white");
        //   setBg("#5db8b9");
        // }}
      >
        <div className="icon">
          <SiHomeadvisor />
        </div>
        <div className="expand">Home</div>
      </Link>
      <Link className="navLink" to="/Projects" style={{ color: props.color }}>
        <div className="icon">
          <SiCodesandbox />
        </div>
        <div className="expand">Projects</div>
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
