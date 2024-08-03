import React from 'react';
import './styles.css';

const Experience: React.FC = () => {
    return (
        <section className='PageExperience'>
                <h3>Experiências profissionais</h3>
                <ul className='ExperienceList'>
                    <li className='ExperienceItem'>
                        <h4 className='ExperienceCompany'>Grupo GPS</h4>
                        <h4 className='ExperienceTitle'>Analista de Sistemas - Pleno</h4>
                        <h5 className='ExperienceDescription'>
                            Tecnologias utilizadas: C#, .NET Core, Postgress,
                            Visual Studio, Visual Studio Code, Git, GitHub
                            Javascript, Typescript, React, Postman, Azure
                        </h5>
                        <h6 className='ExperienceDate'>2024 - Atual</h6>
                    </li>
                    <li className='ExperienceItem'>
                        <h4 className='ExperienceCompany'>Copart Leilões Brasil</h4>
                        <h5 className='ExperienceTitle'>Desenvolvedor de Sistemas - Junior</h5>
                        <h5 className='ExperienceDescription'>
                            Tecnologias utilizadas: C#, .NET Core, SQL Server,
                            Visual Studio, Visual Studio Code, Git, GitHub
                            Javascript, Typescript, Lit, React Native, Postman, Jira,
                            Jenkins, Spinnalker, IIS
                        </h5>
                        <h6>2022 - 2024</h6>
                    </li>
                </ul>
        </section>
    )
}

export default Experience;