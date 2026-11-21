import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-default",
});

export const metadata: Metadata = {
	title: "Steve Silva",
	description: "Portfólio de Steve Silva",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${raleway.variable} font-sans flex min-h-screen flex-col bg-paper text-ink`}>
				<header className="fixed inset-x-0 top-0 z-50">
					<Navbar />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
