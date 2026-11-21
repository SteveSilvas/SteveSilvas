import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contacts = [
	{
		label: "E-mail",
		value: "steve.evets00@gmail.com",
		href: "mailto:steve.evets00@gmail.com",
		icon: <FaEnvelope />,
	},
	{
		label: "WhatsApp",
		value: "(11) 9 9768-1306",
		href: "https://wa.me/5511997681306",
		icon: <FaWhatsapp />,
	},
	{
		label: "GitHub",
		value: "github.com/SteveSilvas",
		href: "https://github.com/SteveSilvas",
		icon: <FaGithub />,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/steve-silva-752563226",
		href: "https://www.linkedin.com/in/steve-silva-752563226/",
		icon: <FaLinkedin />,
	},
];

const Contact: React.FC = () => {
	return (
		<MainContainer>
			<div className="w-full max-w-3xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
				<PageTitle
					eyebrow="Vamos conversar"
					description="Tem um projeto, uma ideia ou um sistema que precisa de mãos experientes? Respondo rápido e gosto de entender o problema antes de falar de código."
				>
					Contatos
				</PageTitle>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{contacts.map((contact) => (
						<a
							key={contact.label}
							href={contact.href}
							target={contact.href.startsWith("http") ? "_blank" : undefined}
							rel="noopener noreferrer"
							className="surface surface-hover flex items-center gap-4 p-5"
						>
							<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wine-tint text-lg text-wine">
								{contact.icon}
							</span>
							<span className="flex min-w-0 flex-col">
								<strong className="text-sm font-semibold text-ink">
									{contact.label}
								</strong>
								<span className="break-words text-sm text-ink-soft">
									{contact.value}
								</span>
							</span>
						</a>
					))}
				</div>
			</div>
		</MainContainer>
	);
};

export default Contact;
