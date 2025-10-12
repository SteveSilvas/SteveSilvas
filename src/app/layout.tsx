import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-default',
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
			<body className={`${openSans.variable} font-sans flex flex-col min-h-screen bg-gray-50`}>
				<header className="fixed top-0 left-0 right-0 z-50">
					<Navbar />
				</header>
				{/* <main className="flex-grow pt-16 md:pt-20"> */}
					{children}
				{/* </main> */}
				<Footer />
			</body>
		</html>
	);
}
