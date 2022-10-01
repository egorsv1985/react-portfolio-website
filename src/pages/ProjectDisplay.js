import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/projectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.alt} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GithubIcon />
    </div>
  );
}

export default ProjectDisplay;
