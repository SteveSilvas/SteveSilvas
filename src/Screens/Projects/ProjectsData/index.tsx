import portifolio from '../../../assets/portifolio/portifolio-figma.png';
export interface ProjectProps {
    title: string
    description: string
    src: string[]
}

export const projectsObject: ProjectProps[] = [
    {
        title: 'Portifólio',
        description: 'Portifólio pessoal, onde eu mostro alguns dos meus projetos.',
        src: [portifolio, portifolio, portifolio, portifolio]
    },
    {
        title: 'Jogo da Velha Web',
        description: 'Jogo da Velha Web',
        src: [portifolio]
    },
    {
        title: 'Jogo da Velha Mobile',
        description: 'Jogo da Velha Mobile',
        src: [portifolio]
    },
    {
        title: 'Jogo da Memória',
        description: 'Jogo da Memória',
        src: [portifolio]
    },
    {
        title: 'Landing Page',
        description: 'Landing Page',
        src: [portifolio]
    },
    {
        title: 'Busca Endereço',
        description: 'Aplicação mobile para busca de endereço a partir de cep ou busca de cep',
        src: [portifolio]
    },
    {
        title: 'Calculador IMC',
        description: 'Calculadora de IMC web',
        src: [portifolio]
    },
    {
        title: 'Livro por livro',
        description: 'Aplicativo mobile para trocas de livros entre usuários',
        src: [portifolio]
    },
    {
        title: 'Roleta de Classes Gramaticais',
        description: 'Aplicação web de roleta para sortear classes gramaticais',
        src: [portifolio]
    },
];
