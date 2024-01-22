import React from 'react';
import Box from '../../Components/Box';
import './styles.css';

const Projects: React.FC = () => {
    return (
        <div className='PageProjects'>
            <Box className='Box'>
                <strong>Projetos</strong>
                <span style={{ color: 'var(--gray)' }}>Desenvolvedor Full Stack</span>
            </Box>
        </div>
    )
}

export default Projects;