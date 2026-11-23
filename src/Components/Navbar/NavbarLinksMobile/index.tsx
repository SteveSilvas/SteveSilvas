"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";

interface Props {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

const navItems = [
	{ href: "/screens/About", label: "Sobre" },
	{ href: "/screens/Projects", label: "Projetos" },
	{ href: "/screens/Training", label: "Formação" },
	{ href: "/screens/Certifications", label: "Certificados" },
	{ href: "/screens/Experiences", label: "Experiências" },
	{ href: "/screens/Habilities", label: "Habilidades" },
	{ href: "/screens/Contact", label: "Contatos" },
];

const NavbarLinksMobile: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	const pathname = usePathname();

	return (
		<div
			className={`overflow-hidden bg-paper transition-all duration-300 ease-in-out md:hidden ${
				isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
			}`}
		>
			<nav className="flex flex-col gap-1 border-t border-line px-5 pb-6 pt-4">
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						onClick={() => setIsOpen(false)}
						aria-current={pathname === item.href ? "page" : undefined}
						className={`rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
							pathname === item.href
								? "bg-wine-tint text-wine"
								: "text-ink-soft hover:bg-white hover:text-ink"
						}`}
					>
						{item.label}
					</Link>
				))}

				<Link
					href="https://api.whatsapp.com/send?phone=5511997681306"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => setIsOpen(false)}
					className="btn btn-primary mt-3 w-full"
				>
					<BsWhatsapp className="text-lg" />
					Contrate
				</Link>
			</nav>
		</div>
	);
};

export default NavbarLinksMobile;
