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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<>
			<NavbarOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

			<div className="border-b border-line/80 bg-paper/85 backdrop-blur-md">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between md:h-20">
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
