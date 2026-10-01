import { GrClose, GrMenu } from "react-icons/gr";

interface Props {
	isOpen: boolean;
	toggle: () => void;
}

const NavbarToggle: React.FC<Props> = ({ isOpen, toggle }) => (
	<button
		onClick={toggle}
		className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-gray-100 transition-colors duration-200"
		aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
	>
		{isOpen ? <GrClose className="h-6 w-6" /> : <GrMenu className="h-6 w-6" />}
	</button>
);

export default NavbarToggle;
