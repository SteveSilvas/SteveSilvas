"use client";
import React from "react";
import Image from "next/image";
import profilePic from "@/assets/steve_perfil.jpeg";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

const paragraphs = [
	"Percorri diversos caminhos nessa trilha da vida e com isso construí gostos e habilidades. Nascendo na filosofia, a minha curiosidade já teve muitos alvos que colaboraram para construir quem estou sendo.",
	"Dediquei-me à música com o violino, à educação com estudos de pedagogia, à produção musical e cultural como voluntário no Sarau na Praça e estudos, ao artesanato principalmente pelo prazer e lazer, à programação de software com diversos cursos.",
	"Vivenciei experiências muito distintas e trago comigo um pouco de cada lugar onde passei. Desenvolvo soluções de software como carreira profissional e continuo minha busca de aprimoramento e descoberta.",
];

const About: React.FC = () => {
	return (
		<MainContainer>
			<div className="w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<div className="surface grid gap-10 p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-start md:gap-12 md:p-12">
					<div className="mx-auto w-40 sm:w-48 md:mx-0 md:w-56">
						<div className="rounded-full bg-linear-to-tr from-gold-tint to-wine-tint p-1.5">
							<div className="relative aspect-square overflow-hidden rounded-full bg-white">
								<Image
									src={profilePic}
									alt="Steve Silva"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 160px, 224px"
									priority
								/>
							</div>
						</div>
					</div>

					<div>
						<PageTitle eyebrow="Sobre mim">Quem sou</PageTitle>

						<div className="mt-6 flex flex-col gap-4">
							{paragraphs.map((paragraph) => (
								<p
									key={paragraph.slice(0, 24)}
									className="text-base leading-relaxed text-ink-soft md:text-lg"
								>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default About;
