import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "@/assets/steve_perfil.jpeg";

const HomeScreen = () => {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center p-6
                 bg-slate-100 dark:bg-slate-900"
        >
            <div
                className="max-w-5xl w-full p-8 md:p-12
                   bg-white dark:bg-slate-800
                   rounded-3xl shadow-xl
                   flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
            >
                <div className="flex-shrink-0">
                    <Image
                        src={profilePic}
                        alt="Steve Silva"
                        width={200}
                        height={200}
                        className="rounded-full object-cover shadow-lg border-4 border-white dark:border-slate-800 transition"
                        priority
                    />
                </div>

                <section className="flex flex-col gap-4 text-center md:text-left">
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Olá, eu sou Steve Silva
                    </h1>
                    <p className="max-w-lg text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Desenvolvedor Full Stack apaixonado por criar soluções modernas, escaláveis e eficientes para a web. Com experiência em diversas tecnologias e foco em entregar qualidade e inovação.
                    </p>

                    <div className="flex justify-center md:justify-start gap-5 mt-4">
                        <a
                            href="https://github.com/stevesilvas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-300
                         hover:text-slate-900 dark:hover:text-white
                         text-3xl transition-transform transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/steve-silva-752563226/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400
                         hover:text-blue-800 dark:hover:text-blue-300
                         text-3xl transition-transform transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:steve.evets00@gmail.com"
                            className="text-red-500 dark:text-red-400
                         hover:text-red-700 dark:hover:text-red-300
                         text-3xl transition-transform transform hover:scale-110"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>

                    <Link
                        href="/screens/projects"
                        className="mt-8 px-8 py-3 w-fit
                       text-base font-semibold text-white
                       rounded-full shadow-lg
                       bg-gradient-to-r from-cyan-500 to-blue-500
                       hover:from-blue-500 hover:to-cyan-500
                       transition-all transform hover:-translate-y-1"
                    >
                        Ver meus projetos
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default HomeScreen;