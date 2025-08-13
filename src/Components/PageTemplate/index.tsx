export interface IPageTemplateProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    height?: string;
};

const PageTemplate: React.FC<IPageTemplateProps> = ({ children, id, className, height }) => {
    const defaultHeight = "min-h-[calc(100vh-3.25rem)]"; // Default height if not provided
    return(
         <div id={id} className={`relative flex flex-col scroll-mt-13 md:scroll-mt-15 ${className} ${height || defaultHeight}`} >
            {children}
         </div>
    );
};

export default PageTemplate;