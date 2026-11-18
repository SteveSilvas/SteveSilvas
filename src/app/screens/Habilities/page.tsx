import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

const skillGroups = [
        {
                title: "Soft Skills",
                skills: [
                        "Comunicação",
                        "Trabalho em equipe",
                        "Resolução de problemas",
                        "Adaptabilidade",
                        "Gestão de tempo",
                        "Liderança",
                        "Empatia",
                ],
        },
        {
                title: "Front-End",
                skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Lit"],
        },
        {
                title: "Back-End",
                skills: [".NET", "Node", "Express", "Sequelize", "Entity Framework", "APIs REST"],
        },
        {
                title: "Bancos de Dados",
                skills: ["SQL Server", "Postgres", "MySQL", "MongoDB", "Solr"],
        },
        {
                title: "Linguagens",
                skills: ["C#", "Java", "Python", "PHP", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Git"],
        },
        {
                title: "Outras Habilidades",
                skills: [
                        "Design (Figma, Canva)",
                        "Arquitetura de Sistemas",
                        "Documentação",
                        "Investigação de Bugs",
                        "Lógica de Negócio",
                        "Linha de Comando",
                        "UML",
                        "Scrum",
                ],
        },
];

const Habilities: React.FC = () => {
        return (
                <MainContainer bgColor="#FAF8F5">
                        <div className="w-full max-w-5xl min-h-[calc(100vh-5rem)] px-6 py-12">
                                <PageTitle>Habilidades</PageTitle>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                        {skillGroups.map((group) => (
                                                <div
                                                        key={group.title}
                                                        className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#8B1E1E] hover:shadow-lg transition-shadow duration-300"
                                                >
                                                        <h3 className="text-lg font-bold text-[#8B1E1E] mb-3">
                                                                {group.title}
                                                        </h3>
                                                        <ul className="flex flex-wrap gap-2">
                                                                {group.skills.map((skill) => (
                                                                        <li
                                                                                key={skill}
                                                                                className="px-3 py-1 text-sm rounded-full bg-[#E1A937]/15 text-[#8B1E1E]"
                                                                        >
                                                                                {skill}
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </MainContainer>
        );
};

export default Habilities;
