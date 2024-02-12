import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';


interface BoxProps {
    children: ReactNode[] | ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

const Box: React.FC<BoxProps> = ({ children, className, style, onClick }) => {
    const boxContainerClass = 'BoxContainer';
    const combinedClassName = className ? `${boxContainerClass} ${className}` : boxContainerClass;

    const handleOnClick = () => {
        if (onClick) onClick();
    }

    return (
        <div className={combinedClassName} style={style} onClick={handleOnClick}>
            {children}
        </div>
    );
};

export default Box;
