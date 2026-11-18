import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

const experiences = [
        {
                company: "Grupo GPS",
                role: "Analista de Sistemas - Pleno",
                technologies:
                        "C#, .NET Core, Postgres, Visual Studio, Visual Studio Code, Git, GitHub, JavaScript, TypeScript, React, Postman, Azure",
                date: "2024 - Atual",
        },
        {
                company: "Copart Leilões Brasil",
                role: "Desenvolvedor de Sistemas - Júnior",
                technologies:
                        "C#, .NET Core, SQL Server, Visual Studio, Visual Studio Code, Git, GitHub, JavaScript, TypeScript, Lit, React Native, Postman, Jira, Jenkins, Spinnaker, IIS",
                date: "2022 - 2024",
        },
];

const Experiences: React.FC = () => {
        return (
                <MainContainer bgColor="#FAF8F5">
                        <div className="w-full max-w-4xl min-h-[calc(100vh-5rem)] px-6 py-12">
                                <PageTitle>Experiências</PageTitle>

                                <ul className="flex flex-col gap-6 mt-8">
                                        {experiences.map((item) => (
                                                <li
                                                        key={item.company}
                                                        className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#8B1E1E] hover:shadow-lg transition-shadow duration-300"
                                                >
                                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                                                                <h3 className="text-xl font-bold text-[#8B1E1E]">
                                                                        {item.company}
                                                                </h3>
                                                                <span className="text-sm font-semibold text-[#E1A937]">
                                                                        {item.date}
                                                                </span>
                                                        </div>
                                                        <p className="text-gray-800 font-semibold mt-1">{item.role}</p>
                                                        <p className="text-sm text-gray-600 mt-2">
                                                                Tecnologias: {item.technologies}
                                                        </p>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </MainContainer>
        );
};

export default Experiences;
