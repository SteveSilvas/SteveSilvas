import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

interface Props {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

const NavbarLinksMobile: React.FC<Props> = ({ isOpen, setIsOpen }) => (
	<div
		className={`md:hidden transition-all duration-300 ease-in-out ${
			isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
		}`}
	>
		<div className="px-4 pt-4 pb-6 space-y-6 bg-white border-t border-gray-100">
			{[
				{ href: "/screens/About", label: "Sobre" },
				{ href: "/screens/Projects", label: "Projetos" },
				{ href: "/screens/Training", label: "Formação" },
				{ href: "/screens/Certifications", label: "Certificados" },
				{ href: "/screens/experiencias", label: "Experiências" },
				{ href: "/screens/habilities", label: "Habilidades" },
				{ href: "/screens/contact", label: "Contatos" },
			].map((item) => (
				<Link
					key={item.href}
					href={item.href}
					onClick={() => setIsOpen(false)}
					className="block text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 py-2"
				>
					{item.label}
				</Link>
			))}

			<Link
				href="https://api.whatsapp.com/send?phone=5511997681306"
				target="_blank"
				rel="noopener noreferrer"
				onClick={() => setIsOpen(false)}
				className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200 hover:scale-105"
			>
				<BsWhatsapp className="mr-2 text-lg" />
				Contrate
			</Link>
		</div>
	</div>
);

export default NavbarLinksMobile;
