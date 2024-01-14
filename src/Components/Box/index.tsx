import React, { ReactNode } from 'react';
import './styles.css';


interface BoxProps {
  children: ReactNode[] | ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className='BoxContainer'>
      {children}
    </div>
  );
};

export default Box;
