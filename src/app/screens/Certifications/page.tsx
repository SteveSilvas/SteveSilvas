"use client";
import React, { useState } from "react";
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

        return (
                <MainContainer bgColor="#FAF8F5">
                        <div className="w-full max-w-6xl min-h-[calc(100vh-5rem)] px-6 py-12">
                                <PageTitle>Certificados</PageTitle>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                        {certificates.map((certificate) => (
                                                <button
                                                        key={certificate.alt}
                                                        onClick={() => setSelected(certificate)}
                                                        className="bg-white shadow-md rounded-2xl p-4 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                                >
                                                        <div className="relative w-full h-40">
                                                                <Image
                                                                        src={certificate.src}
                                                                        alt={certificate.alt}
                                                                        fill
                                                                        className="object-contain"
                                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                />
                                                        </div>
                                                        <span className="block mt-3 text-center font-semibold text-[#8B1E1E]">
                                                                {certificate.alt}
                                                        </span>
                                                </button>
                                        ))}
                                </div>
                        </div>

                        {selected && (
                                <div
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                                        onClick={() => setSelected(null)}
                                >
                                        <div className="relative max-w-3xl w-full bg-white rounded-2xl p-4">
                                                <button
                                                        onClick={() => setSelected(null)}
                                                        aria-label="Fechar"
                                                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#8B1E1E] text-white font-bold"
                                                >
                                                        ×
                                                </button>
                                                <div className="relative w-full h-[70vh]">
                                                        <Image
                                                                src={selected.src}
                                                                alt={selected.alt}
                                                                fill
                                                                className="object-contain"
                                                                sizes="90vw"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        )}
                </MainContainer>
        );
};

export default Certifications;
