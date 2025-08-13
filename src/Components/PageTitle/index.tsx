export interface IPageTitleProps {
    children: string;
}
const PageTitle: React.FC<IPageTitleProps> = ({ children }) => {
    return (
        <h1 className="my-6 text-3xl font-bold text-zinc-800 dark:text-amber-500">
            {children}
        </h1>
    );
}

export default PageTitle;