interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const NavbarOverlay: React.FC<Props> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	return (
		<div
			className="fixed inset-0 bg-black/50 z-40 md:hidden"
			onClick={onClose}
		/>
	);
};

export default NavbarOverlay;