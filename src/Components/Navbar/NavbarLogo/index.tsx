import Image from "next/image";
import Link from "next/link";
import logotipo from "@/assets/logotipo.png";

interface Props {
	onClose: () => void;
}

const NavbarLogo: React.FC<Props> = ({ onClose }) => (
	<Link
		href="/"
		className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
		onClick={onClose}
	>
		<Image
			src={logotipo}
			alt="Logotipo"
			width={160}
			height={160}
			className="h-10 md:h-12 w-auto"
			priority
		/>
	</Link>
);

export default NavbarLogo;
