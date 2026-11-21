import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

const experiences = [
	{
		company: "Grupo GPS",
		role: "Analista de Sistemas - Pleno",
		technologies:
			"C#, .NET Core, Postgres, Visual Studio, Visual Studio Code, Git, GitHub, JavaScript, TypeScript, React, Postman, Azure",
		date: "2024 - Atual",
	},
	{
		company: "Copart Leilões Brasil",
		role: "Desenvolvedor de Sistemas - Júnior",
		technologies:
			"C#, .NET Core, SQL Server, Visual Studio, Visual Studio Code, Git, GitHub, JavaScript, TypeScript, Lit, React Native, Postman, Jira, Jenkins, Spinnaker, IIS",
		date: "2022 - 2024",
	},
];

const Experiences: React.FC = () => {
	return (
		<MainContainer>
			<div className="w-full max-w-3xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<PageTitle
					eyebrow="Carreira"
					description="Experiência em times de produto e sistemas corporativos, do levantamento de requisitos ao deploy."
				>
					Experiências
				</PageTitle>

				<ol className="mt-10 space-y-5 border-l border-line pl-8">
					{experiences.map((item) => (
						<li key={item.company} className="relative">
							<span className="absolute -left-8 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper bg-wine" />
							<article className="surface surface-hover p-6">
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<h2 className="text-lg font-bold text-ink">{item.company}</h2>
									<span className="chip chip-wine w-fit">{item.date}</span>
								</div>

								<p className="mt-1 font-medium text-ink-soft">{item.role}</p>

								<ul className="mt-4 flex flex-wrap gap-1.5">
									{item.technologies.split(", ").map((tech) => (
										<li key={tech} className="chip chip-slate">
											{tech}
										</li>
									))}
								</ul>
							</article>
						</li>
					))}
				</ol>
			</div>
		</MainContainer>
	);
};

export default Experiences;
