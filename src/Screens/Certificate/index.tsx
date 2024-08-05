import React, { ReactElement, useState } from 'react';
import Box from '../../Components/Box';
import Modal from '../../Components/Modal';
import tecnico from '../../assets/certificates/tecnico_desenvolvimento_sistemas.jpeg'
import banco_de_dados from '../../assets/certificates/banco_de_dados.png';
import csharp_basico from '../../assets/certificates/csharp_basico.png';
import csharp_poo from '../../assets/certificates/csharp_poo.jpg'
import css_basico from '../../assets/certificates/css.png';
import design_grafico from '../../assets/certificates/design_grafico.png';
import html_avancado from '../../assets/certificates/html_avancado.png';
import html_basico from '../../assets/certificates/html_basico.png';
import html_css from '../../assets/certificates/html_css.png';
import ingles from '../../assets/certificates/ingles.png';
import javascript_intro from '../../assets/certificates/intro_javascript.png';
import java_basico from '../../assets/certificates/java_basico.png';
import lgpd from '../../assets/certificates/lgpd.png';
import modelagem from '../../assets/certificates/modelagem.png';
import php_poo from '../../assets/certificates/php_poo.png';
import react_typescript from '../../assets/certificates/react_typescript.png';
import node from '../../assets/certificates/rest_node.png';
import seguranca_api from '../../assets/certificates/seguranca_api.png';
import sistemas from '../../assets/certificates/sistemas.png';
import typescript from '../../assets/certificates/typescript.png';
import typescript_poo from '../../assets/certificates/typescript_poo.png';
import './styles.css';

type Certificate = {
    src: string,
    alt: string,
};

const Certificate: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const certificateObjects: Certificate[] = [
        {
            src: tecnico,
            alt: "Desenvolvimento de Sistemas"
        },
        {
            src: csharp_basico,
            alt: "C# Básico"
        },
        {
            src: csharp_poo,
            alt: "C# POO"
        },
        {
            src: design_grafico,
            alt: "Design Gráfico"
        },
        {
            src: html_basico,
            alt: "HTML Básico"
        },
        {
            src: html_css,
            alt: "HTML com CSS"
        },
        {
            src: html_avancado,
            alt: "HTML Avançado"
        },
        {
            src: css_basico,
            alt: "Inovando com CSS"
        },
        {
            src: javascript_intro,
            alt: "Introdução ao Javascript"
        },
        {
            src: typescript,
            alt: "Introdução ao Typescript"
        },
        {
            src: typescript_poo,
            alt: "Programação Orientada a Objetos com Typescript"
        },
        {
            src: react_typescript,
            alt: "Introdução ao React com Typescript"
        },
        {
            src: node,
            alt: "Arquitetura REST com NodeJS"
        },
        {
            src: java_basico,
            alt: "Java Básico"
        },
        {
            src: php_poo,
            alt: "PHP Basico"
        },
        {
            src: modelagem,
            alt: "Modelagem de Dados"
        },
        {
            src: banco_de_dados,
            alt: "Banco de Dados"
        },
        {
            src: seguranca_api,
            alt: "Segurança em API"
        },
        {
            src: sistemas,
            alt: "Sistemas Operacionais"
        },
        {
            src: ingles,
            alt: "Inglês - Basic Review"
        },
        {
            src: lgpd,
            alt: "Lei Geral de Proteção de Dados - LGPD"
        },
    ];

    const [certificateSelected, setCertificateSelected] = useState<Certificate>({
        alt: "",
        src: ""
    });

    const CertificatesElements = (): ReactElement[] => {
        const certificates: ReactElement[] = [];

        certificateObjects.map((certificate) => {
            certificates.push(
                <Box
                    key={certificate.src}
                    className='BoxCertificate'
                    onClick={() => handleSelectBox(certificate)}>
                    <span>{certificate.alt}</span>
                    <img
                        src={certificate.src}
                        alt={certificate.alt}
                        className='CertificateImage' />
                </Box>
            );
        });

        return certificates;
    }

    const handleSelectBox = (certificate: Certificate) => {
        console.warn(certificate)
        setCertificateSelected(certificate);
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
                    src={certificateSelected.src}
                    className='CertificateImageModal' />
            </Modal>

            {
                showModal ? "" :
                    <div className='PageCertificate'>
                        <CertificatesElements />
                    </div>
            }
        </>
    )
}

export default Certificate;