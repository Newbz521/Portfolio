import "./projectInfo.css";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

export default function ProjectInfo(props) {
  function closeModal() {
    props.closer("none");
  }

  return (
    <div className="projectInfoContainer">
      <div className="projectInfoImage">
        <div className="pin" onClick={closeModal}></div>
        <div className="projectImageWrap">
          <img className="screenShot" src={props.image}></img>
        </div>
        <div>Project:{props.name}</div>
        <div>
          <a className="links" href={props.url} target="_blank">
            <SiNetlify />
          </a>
        </div>
        <div>
          <a className="links" href={props.git} target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
