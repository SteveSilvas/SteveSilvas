import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

const training = [
        {
                institution: "Faculdade Anhanguera",
                course: "Tecnologia em Desenvolvimento Web",
                date: "Conclusão em 2024",
        },
        {
                institution: "Etec Albert Einstein",
                course: "Técnico em Desenvolvimento de Sistemas",
                date: "Conclusão em 2021",
        },
        {
                institution: "Batista Cepelos",
                course: "Ensino Médio",
                date: "Conclusão em 2012",
        },
];

const Training: React.FC = () => {
        return (
                <MainContainer bgColor="#FAF8F5">
                        <div className="w-full max-w-4xl min-h-[calc(100vh-5rem)] px-6 py-12">
                                <PageTitle>Formação</PageTitle>

                                <ul className="flex flex-col gap-6 mt-8">
                                        {training.map((item) => (
                                                <li
                                                        key={item.course}
                                                        className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#E1A937] hover:shadow-lg transition-shadow duration-300"
                                                >
                                                        <h3 className="text-xl font-bold text-[#8B1E1E]">
                                                                {item.institution}
                                                        </h3>
                                                        <p className="text-gray-700 mt-1">{item.course}</p>
                                                        <span className="text-sm text-gray-500">{item.date}</span>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </MainContainer>
        );
};

export default Training;
