import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

import dialogame from "@/assets/projects/dialogame.png";
import jogoDaMemoria from "@/assets/projects/jogo_da_memoria.png";
import geracaoZine from "@/assets/projects/geracao_zine.png";
import jogoVelhaWeb from "@/assets/projects/jogo_velha_web.png";
import jogoVelha from "@/assets/projects/jogo_velha.png";
import localiDados from "@/assets/projects/LocaliDados.png";
import universodanmatema from "@/assets/projects/universodanmatema.png";
import aulasUniversodanmatema from "@/assets/projects/aulas_universodanmatema.png";
import meuPortifolio from "@/assets/projects/meu_portifolio.png";

type Project = {
        src: StaticImageData;
        title: string;
        description: string;
        stack: string;
        redirect: string;
};

const projects: Project[] = [
        {
                src: dialogame,
                title: "DialoGame - Web",
                description:
                        "Jogo educativo que transforma a alfabetização em brincadeira: reconhecimento de letras, números, vogais e consoantes.",
                stack: "React, TypeScript, Jotai, HTML e CSS.",
                redirect: "https://dialo-game.vercel.app",
        },
        {
                src: jogoDaMemoria,
                title: "Jogo da Memória - Web",
                description:
                        "Jogo da memória para dois jogadores: vire as cartas, encontre os pares e marque mais pontos que o adversário.",
                stack: "React e TypeScript.",
                redirect: "https://jogo-da-memoria-react-dun.vercel.app",
        },
        {
                src: geracaoZine,
                title: "Geração Zine - Web",
                description:
                        "Plataforma para criadores independentes transformarem ideias, arte e narrativas em publicações autorais.",
                stack: "Next.js, TypeScript e Tailwind CSS.",
                redirect: "https://geracao-zine.vercel.app",
        },
        {
                src: jogoVelhaWeb,
                title: "Jogo da Velha - Web",
                description: "Jogo da velha web desenvolvido para praticar lógica de programação.",
                stack: "React, TypeScript, HTML e CSS.",
                redirect: "https://github.com/SteveSilvas/JogoDaVelha",
        },
        {
                src: jogoVelha,
                title: "Jogo da Velha - Mobile",
                description: "Versão mobile do jogo da velha, com arquivo .apk disponível para instalação.",
                stack: "React Native e TypeScript.",
                redirect: "https://github.com/SteveSilvas/JogoDaVelha_Mobile",
        },
        {
                src: localiDados,
                title: "LocaliDados - Mobile",
                description: "Aplicativo para busca de endereço por CEP e de CEP por endereço.",
                stack: "React Native e TypeScript.",
                redirect: "https://github.com/SteveSilvas/LocaliDados",
        },
        {
                src: universodanmatema,
                title: "Universo Dan Matema - Web",
                description: "Plataforma educacional com conteúdo de matemática.",
                stack: "Next.js, TypeScript e Tailwind CSS.",
                redirect: "https://github.com/SteveSilvas/dan-matema",
        },
        {
                src: aulasUniversodanmatema,
                title: "Aulas - Universo Dan Matema",
                description: "Área de aulas da plataforma Universo Dan Matema.",
                stack: "Next.js, TypeScript e Tailwind CSS.",
                redirect: "https://github.com/SteveSilvas/aulas-mat-universodanmatema",
        },
        {
                src: meuPortifolio,
                title: "Portfólio - Web",
                description: "Este site, construído para apresentar meus projetos e trajetória.",
                stack: "Next.js, TypeScript e Tailwind CSS.",
                redirect:
                        "http://d7jp7yqkx6bqpqxwobivetu0.143.95.190.192.sslip.io/",
        },
];

const Projects: React.FC = () => {
        return (
                <MainContainer bgColor="#FAF8F5">
                        <div className="w-full max-w-6xl min-h-[calc(100vh-5rem)] px-6 py-12">
                                <PageTitle>Projetos</PageTitle>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                        {projects.map((project) => (
                                                <Link
                                                        key={project.title}
                                                        href={project.redirect}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex flex-col bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                                >
                                                        <div className="relative w-full h-44 bg-gray-100">
                                                                <Image
                                                                        src={project.src}
                                                                        alt={project.title}
                                                                        fill
                                                                        className="object-cover"
                                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                />
                                                        </div>
                                                        <div className="flex flex-col gap-2 p-5">
                                                                <h3 className="text-lg font-bold text-[#8B1E1E]">
                                                                        {project.title}
                                                                </h3>
                                                                <p className="text-sm text-gray-700">{project.description}</p>
                                                                <span className="text-xs text-gray-500 mt-1">{project.stack}</span>
                                                        </div>
                                                </Link>
                                        ))}
                                </div>
                        </div>
                </MainContainer>
        );
};

export default Projects;
