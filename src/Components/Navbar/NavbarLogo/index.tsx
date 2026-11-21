import Image from "next/image";
import Link from "next/link";
import logotipo from "@/assets/logotipo.png";

interface Props {
	onClose: () => void;
}

const NavbarLogo: React.FC<Props> = ({ onClose }) => (
	<Link
		href="/"
		className="flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
		onClick={onClose}
	>
		<Image
			src={logotipo}
			alt="Logotipo Steve Silva"
			width={160}
			height={160}
			className="h-9 w-auto md:h-11"
			priority
		/>
	</Link>
);

export default NavbarLogo;
