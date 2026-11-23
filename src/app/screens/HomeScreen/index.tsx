"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import profilePic from "@/assets/steve_lado.png";
import MainContainer from "@/Components/MainContainer";

const stack = ["React", "Next.js", "TypeScript", ".NET", "Node.js"];

const stats = [
	{ value: "4+", label: "anos de experiência" },
	{ value: "35+", label: "repositórios públicos" },
	{ value: "20+", label: "certificações" },
];

const socials = [
	{ label: "GitHub", href: "https://github.com/SteveSilvas", icon: FaGithub },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/steve-silva-752563226/",
		icon: FaLinkedin,
	},
	{ label: "E-mail", href: "mailto:steve.evets00@gmail.com", icon: FaEnvelope },
];

const HomeScreen = () => {
	return (
		<MainContainer>
			<section className="relative w-full overflow-hidden">
				<div aria-hidden className="pointer-events-none absolute inset-0">
					<div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-gold-tint blur-3xl" />
					<div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-wine-tint blur-3xl" />
					<div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-slate-tint blur-3xl" />
				</div>

				<div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-6 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
						<span className="chip chip-wine">
							<span className="h-1.5 w-1.5 rounded-full bg-wine" />
							Disponível para projetos
						</span>

						<h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-7xl">
							Steve <span className="text-wine">Silva</span>
						</h1>

						<p className="mt-4 text-lg font-medium text-ink-soft md:text-xl">
							Desenvolvedor Full Stack
						</p>

						<p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
							Especialista em criar experiências digitais únicas e funcionais.
							Transformo ideias em código, sempre focado na melhor experiência do
							usuário.
						</p>

						<ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
							{stack.map((tech) => (
								<li key={tech} className="chip">
									{tech}
								</li>
							))}
						</ul>

						<div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
							<Link href="/screens/Projects" className="btn btn-primary group">
								Explorar projetos
								<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
							</Link>

							<Link href="/screens/Contact" className="btn btn-outline">
								<FaEnvelope />
								Entre em contato
							</Link>
						</div>

						<div className="mt-8 flex items-center gap-3">
							{socials.map(({ label, href, icon: Icon }) => (
								<a
									key={label}
									href={href}
									target={href.startsWith("http") ? "_blank" : undefined}
									rel="noopener noreferrer"
									aria-label={label}
									className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-colors duration-200 hover:border-wine/25 hover:text-wine"
								>
									<Icon className="text-lg" />
								</a>
							))}
						</div>
					</div>

					<div className="mx-auto w-full max-w-sm">
						<div className="surface bg-linear-to-b from-gold-tint/80 to-white p-2">
							<div className="overflow-hidden rounded-[1.4rem] bg-white">
								<Image
									src={profilePic}
									alt="Steve Silva, desenvolvedor full stack"
									width={520}
									height={520}
									className="h-auto w-full object-cover"
									sizes="(max-width: 1024px) 80vw, 380px"
									priority
								/>
							</div>
						</div>

						<dl className="mt-6 grid grid-cols-3 gap-3 text-center">
							{stats.map((stat) => (
								<div key={stat.label} className="flex flex-col">
									<dt className="sr-only">{stat.label}</dt>
									<dd className="text-xl font-bold text-wine md:text-2xl">
										{stat.value}
									</dd>
									<dd className="mt-1 text-[0.7rem] leading-snug text-ink-soft md:text-xs">
										{stat.label}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>
		</MainContainer>
	);
};

export default HomeScreen;
