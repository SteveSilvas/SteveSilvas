import React from 'react';
import Box from '../../Components/Box';
import './styles.css';
import image from '/steve_perfil.jpeg';

const About: React.FC = () => {
    return (
        <div className='PageAbout'>
            <Box className='AboutImageBox'>
                <img src={image} className='Image' />
            </Box>
            <Box className='AboutContainer'>
                <strong className='AboutTitle'>Quem sou</strong>
                <p className='AboutText'>
                    Percorri diversos caminhos nessa trilha da vida e com isso construí gostos e habilidades. Nascendo na filosofia, a minha curiosidade já teve muitos alvos que colaboraram para construir quem estou sendo.
                    Dediquei-me à música com o violino, à educação com estudos de pedagogia, à produção musical e cultural como voluntário no Sarau na Praça e estudos, ao artesanato principalmente pelo prazer e lazer, à programação de software com diversos cursos. Vivenciei experiências muito distintas e trago comigo um pouco de cada lugar onde passei.
                    Desenvolvo soluções de softwares como carreira profissional e continuo minha busca de aprimoramento e descoberta.
                </p>
            </Box>
        </div>
    )
}

export default About;