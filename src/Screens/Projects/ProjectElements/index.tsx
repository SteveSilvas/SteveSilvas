import React from "react";
import ProjectBox from "../ProjectBox";
import { ProjectProps, projectsObject } from "../ProjectsData";

interface IProjectsElements {
    onClick: (proj: ProjectProps) => void;
}

const ProjectsElements: React.FC<IProjectsElements> = ({ onClick }) => {
    function handleOnClick(project: ProjectProps): void {
        onClick(project);
    }

    return projectsObject?.map((project, index) => {
        return <ProjectBox
            key={index}
            title={project.title}
            description={project.description}
            src={project.src[0]}
            onClick={() => handleOnClick(project)}
        />
    })
};

export default ProjectsElements;