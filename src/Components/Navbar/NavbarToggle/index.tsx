import { GrClose, GrMenu } from "react-icons/gr";

interface Props {
	isOpen: boolean;
	toggle: () => void;
}

const NavbarToggle: React.FC<Props> = ({ isOpen, toggle }) => (
	<button
		onClick={toggle}
		className="rounded-full p-2.5 text-ink-soft transition-colors duration-200 hover:bg-white hover:text-ink md:hidden"
		aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
		aria-expanded={isOpen}
	>
		{isOpen ? <GrClose className="h-5 w-5" /> : <GrMenu className="h-5 w-5" />}
	</button>
);

export default NavbarToggle;
