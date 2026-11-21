import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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
	live?: boolean;
};

const projects: Project[] = [
	{
		src: dialogame,
		title: "DialoGame - Web",
		description:
			"Jogo educativo que transforma a alfabetização em brincadeira: reconhecimento de letras, números, vogais e consoantes.",
		stack: "React, TypeScript, Jotai, HTML e CSS.",
		redirect: "https://dialo-game.vercel.app",
		live: true,
	},
	{
		src: jogoDaMemoria,
		title: "Jogo da Memória - Web",
		description:
			"Jogo da memória para dois jogadores: vire as cartas, encontre os pares e marque mais pontos que o adversário.",
		stack: "React e TypeScript.",
		redirect: "https://jogo-da-memoria-react-dun.vercel.app",
		live: true,
	},
	{
		src: geracaoZine,
		title: "Geração Zine - Web",
		description:
			"Plataforma para criadores independentes transformarem ideias, arte e narrativas em publicações autorais.",
		stack: "Next.js, TypeScript e Tailwind CSS.",
		redirect: "https://geracao-zine.vercel.app",
		live: true,
	},
	{
		src: jogoVelhaWeb,
		title: "Jogo da Velha - Web",
		description: "Jogo da velha web desenvolvido para praticar lógica de programação.",
		stack: "React, TypeScript, HTML e CSS.",
		redirect: "https://stevesilvas.github.io/JogoDaVelha/",
		live: true,
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
		redirect: "http://d7jp7yqkx6bqpqxwobivetu0.143.95.190.192.sslip.io/",
		live: true,
	},
];

const Projects: React.FC = () => {
	return (
		<MainContainer>
			<div className="w-full max-w-6xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<PageTitle
					eyebrow="Portfólio"
					description="Projetos que saíram do papel: aplicações web, apps mobile e APIs em produção. Os marcados com “No ar” você pode abrir e usar agora."
				>
					Projetos
				</PageTitle>

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Link
							key={project.title}
							href={project.redirect}
							target="_blank"
							rel="noopener noreferrer"
							className="surface surface-hover group flex flex-col overflow-hidden"
						>
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-paper">
								<Image
									src={project.src}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
								{project.live && (
									<span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-semibold text-wine shadow-sm backdrop-blur">
										<span className="h-1.5 w-1.5 rounded-full bg-wine" />
										No ar
									</span>
								)}
							</div>

							<div className="flex flex-1 flex-col gap-2.5 p-5">
								<h3 className="text-lg font-bold text-ink transition-colors duration-200 group-hover:text-wine">
									{project.title}
								</h3>
								<p className="text-sm leading-relaxed text-ink-soft">
									{project.description}
								</p>
								<span className="mt-auto pt-2 text-xs font-medium text-ink-soft/75">
									{project.stack}
								</span>
								<span className="inline-flex items-center gap-1.5 text-sm font-semibold text-wine">
									Ver projeto
									<FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</MainContainer>
	);
};

export default Projects;
