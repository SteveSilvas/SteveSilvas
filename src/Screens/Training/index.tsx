import React from 'react';
import './styles.css';

const Training: React.FC = () => {
    return (
        <section className='PageTraining'>
            <h3 className='TrainingTitle'>Formação acadêmica</h3>
            <ul className='TrainingList'>
                <li className='TrainingItem'>
                    <h4 className='TrainingCompany'>Faculdade Anhanguera</h4>
                    <h5 className='TrainingName'>Tecnologia em Desenvolvimento Web</h5>
                    <h6 className='TrainingDate'>Conclusão em 2024</h6>
                </li>
                <li className='TrainingItem'>
                    <h4 className='TrainingCompany'>Etect Albert Einstein</h4>
                    <h5 className='TrainingName'>Técnico em Desenvolvimento de Sistemas</h5>
                    <h6 className='TrainingDate'>Conclusão em 2021</h6>
                </li>
                <li className='TrainingItem'>
                    <h4 className='TrainingCompany'>Batista Cepelos</h4>
                    <h5 className='TrainingName'>Ensino Médio</h5>
                    <h6 className='TrainingDate'>Conclusão em 2012</h6>
                </li>
            </ul>
        </section>
    )
}

export default Training;