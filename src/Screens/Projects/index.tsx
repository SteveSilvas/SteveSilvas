import React, { ReactElement, useState } from 'react';
import Box from '../../Components/Box';
import Modal from '../../Components/Modal';
import design_grafico from '../../assets/design_grafico.png';
import html_basico from '../../assets/html_basico.png';
import html_css from '../../assets/html_css.png';
import './styles.css';

type Project = {
    src: string,
    alt: string,
};

const Projects: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const ProjectObjects: Project[] = [
        {
            src: design_grafico,
            alt: "DIALOGAME"
        },
        {
            src: html_basico,
            alt: "Jogo da Velha"
        },
        {
            src: html_css,
            alt: "Portifólio Individual"
        },
    ];

    const [ProjectSelected, setProjectSelected] = useState<Project>({
        alt: "",
        src: ""
    });

    const ProjectsElements = (): ReactElement[] => {
        const Projects: ReactElement[] = [];

        ProjectObjects.map((Project) => {
            Projects.push(
                <Box
                    key={Project.src}
                    className='BoxProject'
                    onClick={() => handleSelectBox(Project)}>
                    <span>{Project.alt}</span>
                    <img
                        src={Project.src}
                        alt={Project.alt}
                        className='ProjectImage' />
                </Box>
            );
        });

        return Projects;
    }

    const handleSelectBox = (Project: Project) => {
        console.warn(Project)
        setProjectSelected(Project);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Modal
                isOpen={showModal}
                closeClick={handleCloseModal}>
                <img
                    src={ProjectSelected.src}
                    className='ProjectImage' />
            </Modal>

            {
                showModal ? "" :
                    <div className='PageProject'>
                        <ProjectsElements />
                    </div>
            }
        </>
    )
}

export default Projects;