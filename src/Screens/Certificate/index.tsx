import React, { ReactElement, useState } from 'react';
import Box from '../../Components/Box';
import Modal from '../../Components/Modal';
import banco_de_dados from '../../assets/banco_de_dados.png';
import csharp_basico from '../../assets/csharp_basico.png';
import css_basico from '../../assets/css.png';
import design_grafico from '../../assets/design_grafico.png';
import html_avancado from '../../assets/html_avancado.png';
import html_basico from '../../assets/html_basico.png';
import html_css from '../../assets/html_css.png';
import ingles from '../../assets/ingles.png';
import javascript_intro from '../../assets/intro_javascript.png';
import java_basico from '../../assets/java_basico.png';
import lgpd from '../../assets/lgpd.png';
import modelagem from '../../assets/modelagem.png';
import php_poo from '../../assets/php_poo.png';
import react_typescript from '../../assets/react_typescript.png';
import node from '../../assets/rest_node.png';
import seguranca_api from '../../assets/seguranca_api.png';
import seguranca_dotnet from '../../assets/seguranca_dotnet.png';
import sistemas from '../../assets/sistemas.png';
import typescript from '../../assets/typescript.png';
import typescript_poo from '../../assets/typescript_poo.png';
import './styles.css';

type Certificate = {
    src: string,
    alt: string,
};

const Certificate: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const certificateObjects: Certificate[] = [
        {
            src: design_grafico,
            alt: "Design Grafico"
        },
        {
            src: html_basico,
            alt: "html basico"
        },
        {
            src: html_css,
            alt: "html com css"
        },
        {
            src: html_avancado,
            alt: "html avançado"
        },
        {
            src: css_basico,
            alt: "inovando com css"
        },
        {
            src: javascript_intro,
            alt: "introdução ao javascript"
        },
        {
            src: typescript,
            alt: "introdução ao typescript"
        },
        {
            src: typescript_poo,
            alt: "typescript poo"
        },
        {
            src: react_typescript,
            alt: "react typescript"
        },
        {
            src: node,
            alt: "node"
        },
        {
            src: java_basico,
            alt: "java básico"
        },
        {
            src: csharp_basico,
            alt: "csharp básico"
        },
        {
            src: php_poo,
            alt: "php basico"
        },
        {
            src: modelagem,
            alt: "modelagem de dados"
        },
        {
            src: banco_de_dados,
            alt: "banco de dados"
        },
        {
            src: seguranca_api,
            alt: "segurança em API"
        },
        {
            src: seguranca_dotnet,
            alt: "segurança .net"
        },
        {
            src: sistemas,
            alt: "sistemas"
        },
        {
            src: ingles,
            alt: "ingles"
        },
        {
            src: lgpd,
            alt: "lgpd"
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
                    className='CertificateImage' />
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