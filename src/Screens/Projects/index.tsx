import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectsElements from './ProjectElements';
import { ProjectProps } from './ProjectsData';
import './styles.css';

const Projects: React.FC = () => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [projectSelected, setProjectSelected] = useState<ProjectProps>({ description: "", title: "", src: [""] });

    function handleSelectProject(project: ProjectProps): void {
        setProjectSelected(project);
        setShowDetail(true);
    }

    return (
        <>
            <div className='PageProjects'>
                {!showDetail && < ProjectsElements onClick={handleSelectProject} />}
            </div>
            <ProjectDetail
                projectSelected={projectSelected}
                isOpen={showDetail}
                onClose={() => setShowDetail(false)}
            />
        </>
    )
}

export default Projects;