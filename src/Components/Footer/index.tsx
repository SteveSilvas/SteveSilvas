import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import logotipo from "@/assets/logotipo.png";

const Footer = () => {
    return (
        <footer className="md:h-40 flex flex-col md:flex-row bg-zinc-800 p-4 md:p-8 gap-6 items-center justify-evenly text-white">
            <Image
                src={logotipo}
                alt="Vercel Logo"
                width={200}
                height={200}
                className="h-40 md:h-25 w-auto"
            />

            <div className="flex flex-col gap-4">
                <strong className="text-white text-lg">Horário de Atendimento</strong>
                <span className="text-zinc-300">Terça à domingo</span>
                <span className="text-zinc-300">das 18h às 23h</span>
            </div>

            <div className="flex flex-col gap-4">
                <strong className="text-white text-lg">Contato</strong>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://wa.me/5511966105821"
                    target="_blank"
                >
                    <BsWhatsapp className="inline text-2xl" />
                    <span >(11) 96610-5821</span>
                </Link>
                <Link
                    className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 cursor-pointer"
                    href="https://www.instagram.com/domfatiapizzaria/?igsh=YXAza244MWFmeWUx&utm_source=qr#"
                    target="_blank"
                >
                    <BsInstagram className="inline text-2xl" />
                    <span>@domfatiapizzaria</span>
                </Link>
            </div>

            <Link
                href="https://api.whatsapp.com/send?phone=5511997681306"
                target="_blank"
                className={`w-40 text-center hover:scale-105 transition-all duration-300 ease-in-out text-slate-800 py-1 px-4 rounded-4xl border-2 border-slate-600 cursor-pointer`}>
                <BsWhatsapp className="inline-block mr-2" />
                Contrate
            </Link>
        </footer>
    );
};

export default Footer;
