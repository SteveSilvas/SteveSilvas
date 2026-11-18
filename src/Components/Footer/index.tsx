import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logotipo from "@/assets/logotipo.png";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row bg-zinc-800 p-4 md:p-8 gap-6 items-center justify-evenly text-white">
            <Image
                src={logotipo}
                alt="Steve Silva"
                width={200}
                height={200}
                className="h-20 md:h-24 w-auto"
            />

            <div className="flex flex-col gap-2 text-center md:text-left">
                <strong className="text-white text-lg">Steve Silva</strong>
                <span className="text-zinc-300">Desenvolvedor Full Stack</span>
                <span className="text-zinc-300">São Paulo - Brasil</span>
            </div>

            <div className="flex flex-col gap-4">
                <strong className="text-white text-lg">Contato</strong>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://github.com/SteveSilvas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="inline text-xl" />
                    <span>GitHub</span>
                </Link>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://www.linkedin.com/in/steve-silva-752563226/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="inline text-xl" />
                    <span>LinkedIn</span>
                </Link>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="mailto:steve.evets00@gmail.com"
                >
                    <FaEnvelope className="inline text-xl" />
                    <span>steve.evets00@gmail.com</span>
                </Link>
            </div>

            <Link
                href="https://api.whatsapp.com/send?phone=5511997681306"
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 text-center hover:scale-105 transition-all duration-300 ease-in-out text-slate-800 py-1 px-4 rounded-full border-2 border-slate-600 cursor-pointer"
            >
                Contrate
            </Link>
        </footer>
    );
};

export default Footer;

