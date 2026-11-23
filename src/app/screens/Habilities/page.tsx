import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";

const skillGroups = [
	{
		title: "Soft Skills",
		skills: [
			"Comunicação",
			"Trabalho em equipe",
			"Resolução de problemas",
			"Adaptabilidade",
			"Gestão de tempo",
			"Liderança",
			"Empatia",
		],
	},
	{
		title: "Front-End",
		skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Lit"],
	},
	{
		title: "Back-End",
		skills: [".NET", "Node", "Express", "Sequelize", "Entity Framework", "APIs REST"],
	},
	{
		title: "Bancos de Dados",
		skills: ["SQL Server", "Postgres", "MySQL", "MongoDB", "Solr"],
	},
	{
		title: "Linguagens",
		skills: ["C#", "Java", "Python", "PHP", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Git"],
	},
	{
		title: "Outras Habilidades",
		skills: [
			"Design (Figma, Canva)",
			"Arquitetura de Sistemas",
			"Documentação",
			"Investigação de Bugs",
			"Lógica de Negócio",
			"Linha de Comando",
			"UML",
			"Scrum",
		],
	},
];

const Habilities: React.FC = () => {
	return (
		<MainContainer>
			<div className="w-full max-w-5xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<PageTitle
					eyebrow="Ferramentas e competências"
					description="O conjunto de tecnologias que uso no dia a dia, das linguagens ao desenho da solução."
				>
					Habilidades
				</PageTitle>

				<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{skillGroups.map((group) => (
						<section key={group.title} className="surface surface-hover p-6">
							<h2 className="text-base font-bold text-ink">{group.title}</h2>
							<span className="mt-3 block h-0.5 w-8 rounded-full bg-gold/60" />
							<ul className="mt-4 flex flex-wrap gap-1.5">
								{group.skills.map((skill) => (
									<li key={skill} className="chip chip-wine">
										{skill}
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</div>
		</MainContainer>
	);
};

export default Habilities;
