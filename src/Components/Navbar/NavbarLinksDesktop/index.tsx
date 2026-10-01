import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const NavbarLinksDesktop = () => (
	<nav className="hidden md:flex items-center space-x-8">
		{[
			{ href: "/screens/About", label: "Sobre" },
			{ href: "/screens/Projects", label: "Projetos" },
			{ href: "/screens/Training", label: "Formação" },
			{ href: "/screens/Certifications", label: "Certificados" },
		].map((item) => (
			<Link
				key={item.href}
				href={item.href}
				className="text-slate-700 hover:text-slate-900 font-semibold text-sm uppercase tracking-wide transition-colors duration-200 relative group"
			>
				{item.label}
				<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
			</Link>
		))}

		<Link
			href="https://api.whatsapp.com/send?phone=5511997681306"
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
		>
			<BsWhatsapp className="mr-2 text-base" />
			Contrate
		</Link>
	</nav>
);

export default NavbarLinksDesktop;
