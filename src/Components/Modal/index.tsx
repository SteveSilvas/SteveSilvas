import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';
import Box from '../Box';


interface ModalProps {
    children: ReactNode[] | ReactNode;
    style?: CSSProperties;
    closeClick: () => void;
    isOpen: boolean;
    rightButton?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, style, closeClick, isOpen, rightButton }) => {

    const handleCloseClick = () => {
        closeClick();
    }

    return (
        isOpen &&
        <Box
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
                {rightButton}
            </div>
        </Box>
    );
};

export default Modal;