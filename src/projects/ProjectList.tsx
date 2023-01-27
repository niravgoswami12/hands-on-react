import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProp {
  projects: Project[];
  onSave: (project: Project) => void;
}
function ProjectList({ projects, onSave }: ProjectListProp) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    console.log(project);
    setProjectBeingEdited(project);
  };
  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
              onCancel={cancelEditing}
              onSave={onSave}
              project={project}
            ></ProjectForm>
          ) : (
            <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
