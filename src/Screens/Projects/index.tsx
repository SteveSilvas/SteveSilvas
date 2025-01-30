import React, { ReactElement, useState } from 'react';
import Box from '../../Components/Box';
import Modal from '../../Components/Modal';
import dialogame from '../../assets/projects/dialogame.png';
import jogo_velha from '../../assets/projects/jogo_velha.png';
import jogo_velha_web from '../../assets/projects/jogo_velha_web.png';
import localidados from '../../assets/projects/LocaliDados.png';
import portifolio from '../../assets/projects/meu_portifolio.png';
import universodanmatema from '../../assets/projects/universodanmatema.png';
import aulas_universodanmatema from '../../assets/projects/aulas_universodanmatema.png';
import './styles.css';

type IProject = {
    src: string,
    alt: string,
    description?: string,
    complement?: string
    redirect?: string
};

const Projects: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const ProjectObjects: IProject[] = [
        {
            src: aulas_universodanmatema,
            alt: "Aulas de matemática do Universo Dan Matema - Web",
            description: "Página das aulas particulares de matemática do professor Danilo (Dan Matema).",
            complement: "O software  web foi Desenvolvido com NextJS e Typescript aliados ao Tailwind CSS com a biblioteca de componentes Flowbite. Para lidar com contexto Utilizei a biblioteca Jotai. Para o envio de e-mail utilizei a biblioteca Nodemailer. ",
            redirect: "https://aulas.mat.universodanmatema.com.br"
        },
        {
            src: universodanmatema,
            alt: "Universo Dan Matema - Web",
            description: "Página de apresentação do professor Danilo com suas propostas educacionais.",
            complement: "O software  web foi Desenvolvido com NextJS e Typescript aliados ao Tailwind CSS com a biblioteca de componentes Flowbite. Para lidar com contexto Utilizei a biblioteca Jotai. Para o envio de e-mail utilizei a biblioteca Nodemailer. ",
            redirect: "https://universodanmatema.com.br"
        },
        {
            src: dialogame,
            alt: "DIALOGAME - Web",
            description: "Jogo infantil para desenvolvimento de habilidades de reconhecimento de letras, leitura, escrita.",
            complement: "O software  web foi Desenvolvido com React JS e Typescript aliados a HTML e CSS. Para lidar com contexto Utilizei a biblioteca Jotai por sua simplicidade",
            redirect: "https://app.infotecdevs.com.br"
        },
        {
            src: jogo_velha,
            alt: "Jogo da Velha - Mobile",
            description: "Jogo da velha Mobile para desenvolvimento de habilidades de programação.",
            complement: "O software mobile foi Desenvolvido com React Native e Typescript. Está disponível para colaboração no GitHub com arquivo .apk para instalação.",
            redirect: "https://github.com/SteveSilvas/JogoDaVelha_Mobile"
        },
        {
            src: jogo_velha_web,
            alt: "Jogo da Velha - Web",
            description: "Jogo da velha Web para desenvolvimento de habilidades de programação.",
            complement: "O software web foi Desenvolvido com React e Typescript aliados a HTML e CSS. Está disponível para colaboração no GitHub com hospedagem no GitHub Pages.",
            redirect: "https://github.com/SteveSilvas/JogoDaVelha"
        },
        {
            src: localidados,
            alt: "LocaliDados - Mobile",
            description: "Aplicativo para busca de endereço por CEP e busca de CEP por endereço.",
            complement: "O software web foi Desenvolvido com React Native e Typescript. Está disponível para colaboração no GitHub com arquivo .apk para instalação.",
            redirect: "https://github.com/SteveSilvas/LocaliDados"
        },
        {
            src: portifolio,
            alt: "Portifólio - Web",
            description: "Constrção do presente site.",
            complement: "O software web foi Desenvolvido com React e Typescript aliados a HTML e CSS. A hospedagem foi feita com Docker em uma VPS utilizando o Coolify e GitHub.",
            redirect: "https://github.com/SteveSilvas/SteveSilvas"
        },
    ];

    const [ProjectSelected, setProjectSelected] = useState<IProject>({
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
                    <span className='ProjectTitle'>{Project.alt}</span>
                    <img
                        src={Project.src}
                        alt={Project.alt}
                        className='ProjectImage' />
                    <p className='ProjectDescription'>{Project.description}</p>
                </Box>
            );
        });

        return Projects;
    }

    const handleSelectBox = (Project: IProject) => {
        console.warn(Project)
        setProjectSelected(Project);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const rightButton = (
        <a
            className='ProjectLink'
            href={ProjectSelected.redirect}
            target="_blank"
            rel="noopener noreferrer">
            Ver Projeto
        </a>
    );

    return (
        <>
            <Modal
                isOpen={showModal}
                closeClick={handleCloseModal}
                rightButton={rightButton}>
                <img
                    src={ProjectSelected.src}
                    className='ProjectImage' />
                <span className='ProjectTitle'>{ProjectSelected.alt}</span>
                <p className='ProjectDescription'>
                    {ProjectSelected.description}
                </p>
                <p className='ProjectDescription'>
                    {ProjectSelected.complement}
                </p>
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