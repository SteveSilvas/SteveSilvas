"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GrClose, GrMenu } from "react-icons/gr";
import logotipo from "@/assets/logotipo.png";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	// Fecha o menu ao redimensionar para desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isOpen]);

	// Previne scroll quando o menu mobile está aberto
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			{/* Overlay para fechar menu ao clicar fora (mobile) */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			<div className="bg-transparent backdrop-blur-sm shadow-sm border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16 md:h-20">
						{/* Logo */}
						<Link
							href="/"
							className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
							onClick={() => setIsOpen(false)}
						>
							<Image
								src={logotipo}
								alt="Logotipo da DomFatia Pizzaria"
								width={160}
								height={160}
								className="h-10 md:h-12 w-auto"
								priority
							/>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center space-x-8">
							<Link
								href="/screens/About"
								className="text-slate-700 hover:text-slate-900 font-semibold text-sm uppercase tracking-wide transition-colors duration-200 relative group"
							>
								Sobre
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
							</Link>

							<Link
								href="https://api.whatsapp.com/send?phone=5511997681306"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
							>
								<BsWhatsapp className="mr-2 text-base" />
								Contrate
							</Link>
						</nav>

						{/* Mobile menu button */}
						<button
							onClick={toggleSidebar}
							className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-gray-100 transition-colors duration-200"
							aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
						>
							{isOpen ? (
								<GrClose className="h-6 w-6" />
							) : (
								<GrMenu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
					? 'max-h-screen opacity-100'
					: 'max-h-0 opacity-0 overflow-hidden'
					}`}>
					<div className="px-4 pt-4 pb-6 space-y-6 bg-white border-t border-gray-100">
						<Link
							href="/screens/About"
							onClick={() => setIsOpen(false)}
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
						>
							Sobre
						</Link>

						<Link
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
							href={"/screens/Project"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Projetos
						</Link>

						<Link
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
							href={"/screens/Training"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Formação
						</Link>

						<Link
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
							href={"/screens/Certifications"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Certificados
						</Link>

						<Link
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
							href={"/screens/experiencias"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Experiências
						</Link>

						<Link
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
							href={"/screens/habilities"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Habilidades
						</Link>

						<Link
							className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
							href={"/screens/contact"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Contatos
						</Link>

						<Link
							href="https://api.whatsapp.com/send?phone=5511997681306"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setIsOpen(false)}
							className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200 hover:scale-105"
						>
							<BsWhatsapp className="mr-2 text-lg" />
							Contrate
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;