"use client";
import React from "react";
import Image from "next/image";
import profilePic from "@/assets/steve_perfil.jpeg";
import MainContainer from "@/components/MainContainer";

const About: React.FC = () => {
	return (
		<MainContainer bgColor="#FAF8F5">
			<div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-5rem)] px-6 md:px-12 py-12 relative overflow-hidden">

				{/* Gradientes decorativos sutis */}
				<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#E1A937]/10 to-transparent blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#8B1E1E]/10 to-transparent blur-2xl"></div>

				{/* Card principal */}
				<div className="relative z-10 w-full max-w-5xl bg-white shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 transition-transform hover:scale-[1.01] duration-500">

					{/* Imagem de perfil */}
					<div className="relative w-44 h-44 md:w-64 md:h-64 flex-shrink-0 group">
						<div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#E1A937] to-[#8B1E1E] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
						<Image
							src={profilePic}
							alt="Steve Silva - Desenvolvedor"
							fill
							className="rounded-full object-cover relative z-10 shadow-lg"
							priority
						/>
					</div>

					{/* Texto */}
					<div className="flex flex-col gap-6 text-center md:text-left text-gray-700">
						<h1 className="text-4xl md:text-5xl font-black text-[#8B1E1E]">
							Quem sou
						</h1>
						<p className="text-lg md:text-xl leading-relaxed text-[#1F1F1F]/80">
							Percorri diversos caminhos nessa trilha da vida e com isso construí gostos e habilidades. Nascendo na filosofia, a minha curiosidade já teve muitos alvos que colaboraram para construir quem estou sendo.
						</p>
						<p className="text-lg md:text-xl leading-relaxed text-[#1F1F1F]/80">
							Dediquei-me à música com o violino, à educação com estudos de pedagogia, à produção musical e cultural como voluntário no Sarau na Praça e estudos, ao artesanato principalmente pelo prazer e lazer, à programação de software com diversos cursos.
						</p>
						<p className="text-lg md:text-xl leading-relaxed text-[#1F1F1F]/80">
							Vivenciei experiências muito distintas e trago comigo um pouco de cada lugar onde passei. Desenvolvo soluções de software como carreira profissional e continuo minha busca de aprimoramento e descoberta.
						</p>

						{/* Destaque visual discreto */}
						<div className="mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-[#E1A937] to-[#8B1E1E] mx-auto md:mx-0"></div>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default About;