import React from 'react';
import Box from '../../Components/Box';
import './styles.css';
import image from '/steve_perfil.jpeg';

const Home: React.FC = () => {
    return (
        <div className='Page'>
            <Box  className='Image'> 
                <img src={image} style={{ width: 'auto', height:'100%', alignItems:'center' }} />
            </Box>

            <Box style={{ width: '100%', height: '100%' }}>
                <strong> Steve Silva</strong>
                <span style={{color:'var(--gray)'}}>Desenvolvedor Full Stack</span>
            </Box>
        </div>
    )
}

export default Home;