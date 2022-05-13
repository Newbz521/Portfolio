import "./projectInfo.css";

export default function ProjectInfo(props) {
  return (
    <div className="projectInfoContainer">
      <div className="projectInfoImage">
        <img src={props.image}></img>
      </div>
      <div>
        <div>Project:{props.name}</div>
        <div>
          <a href={props.url} target="_blank">
            Deployment
          </a>
        </div>
        <div>
          <a href={props.git} target="_blank">
            Git
          </a>
        </div>
      </div>
    </div>
  );
}
