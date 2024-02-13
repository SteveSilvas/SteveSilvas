import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';


interface ModalProps {
    children: ReactNode[] | ReactNode;
    style?: CSSProperties;
    closeClick: () => void;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, style, closeClick, isOpen }) => {

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