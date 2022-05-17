import "./projectInfo.css";

export default function ProjectInfo(props) {
  return (
    <div className="projectInfoContainer">
      <div className="projectInfoImage">
        <div className="pin"></div>
        <div className="projectImageWrap">
          <img className="screenShot" src={props.image}></img>
        </div>
        <div>Project:{props.name}</div>
        <div>
          <a className="links" href={props.url} target="_blank">
            Deployment
          </a>
        </div>
        <div>
          <a className="links" href={props.git} target="_blank">
            Git
          </a>
        </div>
      </div>
    </div>
  );
}
