interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const NavbarOverlay: React.FC<Props> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	return (
		<div
			className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-sm md:hidden"
			onClick={onClose}
			aria-hidden="true"
		/>
	);
};

export default NavbarOverlay;
