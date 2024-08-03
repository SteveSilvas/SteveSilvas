import React from 'react';
import Box from '../../Components/Box';
import './styles.css';

const Skills: React.FC = () => {
  return (
    <div className='SkillsPage'>
      <h2>Habilidades</h2>
      <div className='SkillsContainer'>
        <Box className='SkillBox'>
          <h3>Soft Skills</h3>
          <ul>
            <li>Comunicação</li>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
            <li>Adaptabilidade</li>
            <li>Gestão de tempo</li>
            <li>Liderança</li>
            <li>Empatia</li>
          </ul>
        </Box>
        <Box className='SkillBox'>
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Lit</li>
          </ul>
        </Box>
        <Box className='SkillBox'>
          <h3>Back-End</h3>
          <ul>
            <li>.NET</li>
            <li>API</li>
          </ul>
        </Box>
        <Box className='SkillBox'>
          <h3>Bancos de Dados</h3>
          <ul>
            <li>SQL Server</li>
            <li>Postgres</li>
            <li>My SQL</li>
            <li>Mongo DB</li>
            <li>Solr</li>
          </ul>
        </Box>
        <Box className='SkillBox'>
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Entity Framework</li>
          </ul>
        </Box>
        <Box className='SkillBox'>
          <h3>Outras Habilidades</h3>
          <ul>
            <li>Design (Figma, Canva)</li>
            <li>Arquitetura de Sistemas</li>
            <li>Documentação</li>
            <li>Manutenção e Investigação de Bugs</li>
            <li>Interpretação de Lógica de Negócio</li>
            <li>Linha de Comando</li>
            <li>UML</li>
            <li>Scrum</li>
          </ul>
        </Box>

        <Box className='SkillBox'>
          <h3>Linguagens</h3>
          <ul>
            <li>C#</li>
            <li>.NET</li>
            <li>Java</li>
            <li>Python</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </Box>
      </div>
    </div>
  )
}

export default Skills;
