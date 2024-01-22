import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';


interface BoxProps {
    children: ReactNode[] | ReactNode;
    className?: string;
    style?: CSSProperties;
}

const Box: React.FC<BoxProps> = ({children, className, style }) => {
    const boxContainerClass = 'BoxContainer';
    const combinedClassName = className ? `${boxContainerClass} ${className}` : boxContainerClass;

    return (
        <div className={combinedClassName} style={style}>
            {children}
        </div>
    );
};

export default Box;
