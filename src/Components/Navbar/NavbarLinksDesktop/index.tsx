"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";

const navItems = [
	{ href: "/screens/About", label: "Sobre" },
	{ href: "/screens/Projects", label: "Projetos" },
	{ href: "/screens/Training", label: "Formação" },
	{ href: "/screens/Certifications", label: "Certificados" },
	{ href: "/screens/Experiences", label: "Experiências" },
	{ href: "/screens/Habilities", label: "Habilidades" },
	{ href: "/screens/Contact", label: "Contatos" },
];

const NavbarLinksDesktop = () => {
	const pathname = usePathname();

	return (
		<nav className="hidden items-center gap-1 md:flex lg:gap-2">
			{navItems.map((item) => {
				const isActive = pathname === item.href;

				return (
					<Link
						key={item.href}
						href={item.href}
						aria-current={isActive ? "page" : undefined}
						className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-4 ${
							isActive
								? "bg-wine-tint text-wine"
								: "text-ink-soft hover:bg-white hover:text-ink"
						}`}
					>
						{item.label}
					</Link>
				);
			})}

			<Link
				href="https://api.whatsapp.com/send?phone=5511997681306"
				target="_blank"
				rel="noopener noreferrer"
				className="btn btn-primary ml-2 px-5 py-2.5 text-sm"
			>
				<BsWhatsapp className="text-base" />
				Contrate
			</Link>
		</nav>
	);
};

export default NavbarLinksDesktop;
