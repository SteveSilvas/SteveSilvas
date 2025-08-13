import React from 'react';
import Image from 'next/image';
import profilePic from '@/assets/steve_perfil.jpeg'; // Usando o alias '@' para seguir o padrão de projetos Next.js

const About: React.FC = () => {
    return (
        // Container principal com flexbox para centralizar e espaçar o conteúdo
        <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 min-h-screen">
            {/* Card de perfil, agora com flexbox para layout em colunas/linhas */}
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Imagem do perfil */}
                <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64">
                    <Image
                        src={profilePic}
                        alt="Steve Silva - Desenvolvedor"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-lg"
                        priority
                    />
                </div>

                {/* Container de texto */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Quem sou
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Percorri diversos caminhos nessa trilha da vida e com isso construí gostos e habilidades. Nascendo na filosofia, a minha curiosidade já teve muitos alvos que colaboraram para construir quem estou sendo.
                        Dediquei-me à música com o violino, à educação com estudos de pedagogia, à produção musical e cultural como voluntário no Sarau na Praça e estudos, ao artesanato principalmente pelo prazer e lazer, à programação de software com diversos cursos. Vivenciei experiências muito distintas e trago comigo um pouco de cada lugar onde passei.
                        Desenvolvo soluções de softwares como carreira profissional e continuo minha busca de aprimoramento e descoberta.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;