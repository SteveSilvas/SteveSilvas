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
		<MainContainer>
			<div className="w-full max-w-3xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<PageTitle
					eyebrow="Trajetória acadêmica"
					description="Formação técnica e superior na área de tecnologia, sempre acompanhada de cursos livres para manter o repertório atualizado."
				>
					Formação
				</PageTitle>

				<ol className="mt-10 space-y-5 border-l border-line pl-8">
					{training.map((item) => (
						<li key={item.course} className="relative">
							<span className="absolute -left-8 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper bg-wine" />
							<div className="surface surface-hover p-6">
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<h2 className="text-lg font-bold text-ink">{item.institution}</h2>
									<span className="chip chip-slate w-fit">{item.date}</span>
								</div>
								<p className="mt-2 leading-relaxed text-ink-soft">{item.course}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</MainContainer>
	);
};

export default Training;
