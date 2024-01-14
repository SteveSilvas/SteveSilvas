import React from 'react';
import image from '../../../public/steve_perfil.jpeg';
import Box from '../../Components/Box';
import './styles.css';

const Home: React.FC = () => {
    return (
        <div className='Page'>
            <Box>
                <img src={image} style={{ width: '100%' }} />
            </Box>

            <Box>
                <strong> Steve Silva</strong>
                <span>Desenvolvedor Full Stack</span>
            </Box>
        </div>
    )
}

export default Home;