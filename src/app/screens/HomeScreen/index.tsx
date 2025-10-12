"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import profilePic from "@/assets/steve_lado.png";
import MainContainer from "@/components/MainContainer";

const HomeScreen = () => {
	return (
		<MainContainer bgColor="#8B1E1E">
			<div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full min-h-[calc(100vh-5rem)] py-6 md:py-8 lg:py-0">

				{/* Elementos decorativos de fundo */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none mt-[35vh] md:mt-0">
					{/* Círculo principal */}
					<div className="absolute top-2 left-4 md:left-12 lg:left-24 w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#E1A937] opacity-90 animate-pulse"></div>

					{/* Círculos secundários */}
					<div className="absolute top-24 right-4 lg:right-24 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#E1A937] opacity-30 animate-bounce"></div>
					{/* <div className="absolute z-50 bottom-20 left-8 lg:left-32 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white opacity-10"></div> */}

					{/* Gradientes decorativos */}
					<div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-bl from-[#E1A937]/20 to-transparent blur-3xl"></div>
					<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 to-transparent blur-2xl"></div>
				</div>

				<div className="relative z-10 flex-shrink-0 order-2 lg:order-1 mb-8 lg:mb-0">
					<div className="relative group">
						{/* Glow effect atrás da imagem */}
						<div className="absolute -inset-4 bg-gradient-to-r from-[#E1A937] to-[#cf941e] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

						<Image
							src={profilePic}
							alt="Steve Silva - Desenvolvedor"
							width={400}
							height={400}
							className="relative object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
							style={{
								maskImage: "linear-gradient(to top, black 55%, transparent 100%)",
								WebkitMaskImage: "linear-gradient(to top, black 55%, transparent 100%)",
								filter: "brightness(0.85) contrast(1.3) saturate(1.1)"
							}}
							priority
						/>
					</div>
				</div>

				<section className="relative z-10 flex flex-col text-center lg:text-left order-1 lg:order-2 lg:ml-16 xl:ml-24 max-w-xl">
					<h1 className="flex md:flex-col flex-wrap justify-center gap-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white">
						<span className="block">Steve</span>
						<span className="block text-[#E1A937] bg-gradient-to-r from-[#E1A937] to-[#cf941e] bg-clip-text">
							Silva
						</span>
					</h1>

					<h2 className="text-xl md:text-2xl font-light text-[#d0a87a] mb-4 opacity-90">
						Desenvolvedor Full Stack
					</h2>

					<p className="max-w-lg text-base md:text-lg leading-relaxed text-gray-200 mb-4 opacity-90">
						Especialista em criar experiências digitais únicas e funcionais.
						Transformo ideias em código, sempre focado na melhor experiência do usuário.
					</p>

					<div className="flex gap-4 md:mb-8">
						<Link
							href="/screens/Projects"
							className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-[#E1A937] rounded-full hover:bg-[#cf941e] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E1A937]/25"
						>
							Explorar Projetos
							<FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
						</Link>

						<Link
							href="/cv.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
						>
							<FaDownload className="mr-2" />
							Download CV
						</Link>
					</div>

					<div className="flex justify-center lg:justify-start gap-6">
						<a
							href="https://github.com/stevesilvas"
							target="_blank"
							rel="noopener noreferrer"
							className="group p-3 text-white hover:text-[#E1A937] transition-all duration-300 hover:scale-110"
							aria-label="GitHub"
						>
							<FaGithub className="text-2xl group-hover:drop-shadow-lg" />
						</a>
						<a
							href="https://www.linkedin.com/in/steve-silva-752563226/"
							target="_blank"
							rel="noopener noreferrer"
							className="group p-3 text-white hover:text-[#E1A937] transition-all duration-300 hover:scale-110"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="text-2xl group-hover:drop-shadow-lg" />
						</a>
						<a
							href="mailto:steve.evets00@gmail.com"
							className="group p-3 text-white hover:text-[#E1A937] transition-all duration-300 hover:scale-110"
							aria-label="E-mail"
						>
							<FaEnvelope className="text-2xl group-hover:drop-shadow-lg" />
						</a>
					</div>
				</section>
			</div>

			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
						backgroundSize: '40px 40px',
						animation: 'float 20s ease-in-out infinite'
					}}
				></div>
			</div>

			<style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-10px) translateX(5px); }
                }
            `}</style>
		</MainContainer>
	);
};

export default HomeScreen;