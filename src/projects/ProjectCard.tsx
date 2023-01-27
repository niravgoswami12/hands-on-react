import React from "react";
import { Link } from "react-router-dom";
import { Project } from "./Project";

interface ProjectProp {
  project: Project;
  onEdit: (project: Project) => void;
}
export default function ProjectCard({ project, onEdit }: ProjectProp) {
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="dark section">
        <Link to={"/projects/" + project.id}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{project.description}</p>
          <p>Budget: {project.budget.toLocaleString()}</p>
        </Link>
        <button
          className="borderd"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
}
