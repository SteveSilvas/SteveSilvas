import React from 'react';
import Box from '../../Components/Box';
import image from '/steve_perfil.jpeg';

const About: React.FC = () => {
    return (
        <div className='Page'>
            <Box style={{ width: '100%', height: '100%' }}>
                <img src={image} style={{ width: 'auto', height: '100%', alignItems: 'center' }} />
            </Box>

            <Box style={{ width: '100%', height: '100%' }}>
                <strong>Quem sou</strong>
                <p style={{ width: '70%', fontSize: '1.2rem', lineHeight:'2rem', color:'var(--gray)' }}>
                    Percorri diversos caminhos nessa trilha da vida e com isso construí gostos e habilidades. Nascendo na filosofia, a minha curiosidade já teve muitos alvos que colaboraram para construir quem estou sendo.
                    Dediquei-me à música com o violino, à educação com estudos de pedagogia, à produção musical e cultural como voluntário no Sarau na Praça e estudos, ao artesanato principalmente pelo prazer e lazer, à programação de software com diversos cursos. Vivenciei experiências muito distintas e trago comigo um pouco de cada lugar onde passei.
                    Desenvolvo soluções de softwares como carreira profissional e continuo minha busca de aprimoramento e descoberta.
                </p>
            </Box>
        </div>
    )
}

export default About;