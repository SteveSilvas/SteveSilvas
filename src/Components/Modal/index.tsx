import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';


interface ModalProps {
    children: ReactNode[] | ReactNode;
    className?: string;
    style?: CSSProperties;
    closeClick: () => void;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, className, style, closeClick, isOpen }) => {
    // const boxContainerClass = 'ModalContent';
    // const combinedClassName = className ? `${boxContainerClass} ${className}` : boxContainerClass;

    const handleCloseClick = () => {
        closeClick();
    }

    return (
        isOpen &&
        <main
            className='ModalContainer'
            style={style}
        >
            <div className='ContentContainer'>
                {children}
            </div>
            <div className='ButtonArea'>
                <button
                    className='CloseButton'
                    onClick={handleCloseClick}
                >
                    Fechar
                </button>
            </div>
        </main>
    );
};

export default Modal;