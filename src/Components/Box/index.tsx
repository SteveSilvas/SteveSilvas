import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';


interface BoxProps {
    children: ReactNode[] | ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Box: React.FC<BoxProps> = ({ children,
    className,
    style,
    onClick,
    onMouseEnter,
    onMouseLeave }) => {
    const boxContainerClass = 'BoxContainer';
    const combinedClassName = className ? `${boxContainerClass} ${className}` : boxContainerClass;

    const handleOnClick = () => {
        if (onClick) onClick();
    }

    const handleOnMouseEnter = () => {
        if (onMouseEnter) onMouseEnter();
    }

    const handleOnMouseLeave = () => {
        if (onMouseLeave) onMouseLeave();
    }
    return (
        <div
            className={combinedClassName}
            style={style}
            onClick={handleOnClick}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}>
            {children}
        </div>
    );
};

export default Box;
