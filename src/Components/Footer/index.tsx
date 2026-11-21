import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logotipo from "@/assets/logotipo.png";

const socialLinks = [
	{ label: "GitHub", href: "https://github.com/SteveSilvas", icon: FaGithub },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/steve-silva-752563226/",
		icon: FaLinkedin,
	},
	{ label: "E-mail", href: "mailto:steve.evets00@gmail.com", icon: FaEnvelope },
];

const Footer = () => {
	return (
		<footer className="mt-auto border-t border-line bg-white/70">
			<div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8 lg:px-8">
				<div className="flex flex-col gap-4">
					<Image
						src={logotipo}
						alt="Steve Silva"
						width={200}
						height={200}
						className="h-20 w-auto self-start"
					/>
					<p className="max-w-xs text-sm leading-relaxed text-ink-soft">
						Desenvolvedor Full Stack em São Paulo. Construo produtos digitais
						do banco de dados à interface.
					</p>
				</div>

				<div className="flex flex-col gap-3">
					<strong className="eyebrow">Navegar</strong>
					<nav className="flex flex-col gap-2 text-sm">
						<Link
							className="w-fit text-ink-soft transition-colors hover:text-wine"
							href="/screens/About"
						>
							Sobre
						</Link>
						<Link
							className="w-fit text-ink-soft transition-colors hover:text-wine"
							href="/screens/Projects"
						>
							Projetos
						</Link>
						<Link
							className="w-fit text-ink-soft transition-colors hover:text-wine"
							href="/screens/Certifications"
						>
							Certificados
						</Link>
						<Link
							className="w-fit text-ink-soft transition-colors hover:text-wine"
							href="/screens/Contact"
						>
							Contatos
						</Link>
					</nav>
				</div>

				<div className="flex flex-col gap-3">
					<strong className="eyebrow">Contato</strong>
					<div className="flex flex-col gap-2 text-sm">
						{socialLinks.map(({ label, href, icon: Icon }) => (
							<Link
								key={label}
								className="flex w-fit items-center gap-2 text-ink-soft transition-colors hover:text-wine"
								href={href}
								target={href.startsWith("http") ? "_blank" : undefined}
								rel="noopener noreferrer"
							>
								<Icon className="text-base" />
								<span>{label}</span>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className="border-t border-line/70">
				<div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<span>© {new Date().getFullYear()} Steve Silva · São Paulo, Brasil</span>
					<span>Feito com Next.js, TypeScript e Tailwind CSS</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
