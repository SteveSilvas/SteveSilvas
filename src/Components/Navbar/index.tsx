"use client";
import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinksDesktop from "./NavbarLinksDesktop";
import NavbarLinksMobile from "./NavbarLinksMobile";
import NavbarToggle from "./NavbarToggle";
import NavbarOverlay from "./NavbarOverlay";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(!isOpen);

	// Fecha o menu ao redimensionar
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	// Impede scroll ao abrir menu mobile
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<>
			<NavbarOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

			<div className="bg-transparent backdrop-blur-sm shadow-sm border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16 md:h-20">
						<NavbarLogo onClose={() => setIsOpen(false)} />
						<NavbarLinksDesktop />
						<NavbarToggle isOpen={isOpen} toggle={toggleSidebar} />
					</div>
				</div>

				<NavbarLinksMobile isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	);
};

export default Navbar;
