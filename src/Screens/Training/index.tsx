import React from 'react';
import Box from '../../Components/Box';
import './styles.css';

const Training: React.FC = () => {
    return (
        <section className='PageTraining'>
            <Box className='TrainingBox'>
                <h3>Formação acadêmica</h3>
                <ul>
                    <li>
                        <h4>Faculdade Anhanguera - Tecnologia em Desenvolvimento Web</h4>
                        <h5>Conclusão em 2024</h5>
                    </li>
                    <li>
                        <h4>Etect Albert Einstein - Técnico em Desenvolvimento de Sistemas</h4>
                        <h5>Conclusão em 2021</h5>
                    </li>
                    <li>
                        <h4>Batista Cepelos - Ensino Médio</h4>
                        <h5>Conclusão em 2012</h5>
                    </li>
                </ul>
            </Box>
        </section>
    )
}

export default Training;