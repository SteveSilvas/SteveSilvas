import React, { useState } from "react";
import Box from "../../../Components/Box";
import '../styles.css';
interface IProjectBox {
    title: string;
    src: string;
    description: string;
    onClick?: () => void;
}
const ProjectBox: React.FC<IProjectBox> = ({ title, src, description, onClick }) => {
    const [activeSpan, setActiveSpan] = useState<boolean>(false);
    function handleActiveSpan(): void {
        setActiveSpan(true);
    }
    function handleInactiveSpan(): void {
        setActiveSpan(false);
    }
    function handleOnClick(): void {
        onClick && onClick();
    }

    return (
        <Box
            onMouseEnter={handleActiveSpan}
            onMouseLeave={handleInactiveSpan}
            className='BoxProject'
            style={{ position: 'relative' }}
            onClick={handleOnClick}>
            <strong>{title}</strong>
            <img src={src}
                style={{ width: 'auto', height: '80%', alignItems: 'center' }}

            />
            {activeSpan && <span className='Description'>{description}</span>}
        </Box>
    )
};


export default ProjectBox;