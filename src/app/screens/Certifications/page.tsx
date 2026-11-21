"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

import bancoDeDados from "@/assets/certificates/banco_de_dados.png";
import csharpBasico from "@/assets/certificates/csharp_basico.png";
import csharpPoo from "@/assets/certificates/csharp_poo.jpg";
import css from "@/assets/certificates/css.png";
import designGrafico from "@/assets/certificates/design_grafico.png";
import htmlAvancado from "@/assets/certificates/html_avancado.png";
import htmlBasico from "@/assets/certificates/html_basico.png";
import htmlCss from "@/assets/certificates/html_css.png";
import ingles from "@/assets/certificates/ingles.png";
import introJavascript from "@/assets/certificates/intro_javascript.png";
import javaBasico from "@/assets/certificates/java_basico.png";
import lgpd from "@/assets/certificates/lgpd.png";
import modelagem from "@/assets/certificates/modelagem.png";
import powerbi from "@/assets/certificates/introducao_powerbi.png";
import phpPoo from "@/assets/certificates/php_poo.png";
import reactTypescript from "@/assets/certificates/react_typescript.png";
import restNode from "@/assets/certificates/rest_node.png";
import segurancaApi from "@/assets/certificates/seguranca_api.png";
import sistemas from "@/assets/certificates/sistemas.png";
import typescript from "@/assets/certificates/typescript.png";
import typescriptPoo from "@/assets/certificates/typescript_poo.png";

type Certificate = {
	src: StaticImageData;
	alt: string;
};

const certificates: Certificate[] = [
	{ src: designGrafico, alt: "Design Gráfico" },
	{ src: htmlBasico, alt: "HTML Básico" },
	{ src: htmlCss, alt: "HTML com CSS" },
	{ src: htmlAvancado, alt: "HTML Avançado" },
	{ src: css, alt: "Inovando com CSS" },
	{ src: introJavascript, alt: "Introdução ao JavaScript" },
	{ src: typescript, alt: "Introdução ao TypeScript" },
	{ src: typescriptPoo, alt: "POO com TypeScript" },
	{ src: reactTypescript, alt: "React com TypeScript" },
	{ src: restNode, alt: "Arquitetura REST com NodeJS" },
	{ src: javaBasico, alt: "Java Básico" },
	{ src: csharpBasico, alt: "C# Básico" },
	{ src: csharpPoo, alt: "C# POO" },
	{ src: phpPoo, alt: "PHP POO" },
	{ src: modelagem, alt: "Modelagem de Dados" },
	{ src: bancoDeDados, alt: "Banco de Dados" },
	{ src: powerbi, alt: "Introdução ao Power BI" },
	{ src: segurancaApi, alt: "Segurança em API" },
	{ src: sistemas, alt: "Sistemas Operacionais" },
	{ src: ingles, alt: "Inglês - Basic Review" },
	{ src: lgpd, alt: "LGPD" },
];

const Certifications: React.FC = () => {
	const [selected, setSelected] = useState<Certificate | null>(null);

	useEffect(() => {
		if (!selected) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setSelected(null);
		};

		document.addEventListener("keydown", onKeyDown);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = "unset";
		};
	}, [selected]);

	return (
		<MainContainer>
			<div className="w-full max-w-6xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<PageTitle
					eyebrow={`${certificates.length} certificados`}
					description="Cursos de desenvolvimento web, back-end, banco de dados, segurança e metodologias. Clique em um certificado para ampliar."
				>
					Certificados
				</PageTitle>

				<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{certificates.map((certificate) => (
						<button
							key={certificate.alt}
							onClick={() => setSelected(certificate)}
							className="surface surface-hover flex flex-col overflow-hidden p-3 text-left"
						>
							<span className="relative block h-36 w-full rounded-xl bg-paper">
								<Image
									src={certificate.src}
									alt={certificate.alt}
									fill
									className="object-contain p-1"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
							</span>
							<span className="mt-3 px-1 pb-1 text-sm font-semibold text-ink">
								{certificate.alt}
							</span>
						</button>
					))}
				</div>
			</div>

			{selected && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
					onClick={() => setSelected(null)}
					role="dialog"
					aria-modal="true"
					aria-label={selected.alt}
				>
					<div
						className="surface relative w-full max-w-3xl p-3"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							onClick={() => setSelected(null)}
							aria-label="Fechar"
							className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-ink shadow-sm transition-colors hover:text-wine"
						>
							×
						</button>
						<div className="relative h-[65vh] w-full rounded-xl bg-paper">
							<Image
								src={selected.src}
								alt={selected.alt}
								fill
								className="object-contain p-2"
								sizes="90vw"
							/>
						</div>
						<p className="px-2 pb-1 pt-3 text-sm font-semibold text-ink">
							{selected.alt}
						</p>
					</div>
				</div>
			)}
		</MainContainer>
	);
};

export default Certifications;
