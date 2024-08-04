import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
interface INavItem {
    path: string;
    title?: string;
    children?: React.ReactNode;
    onClick: () => void;
}
const NavItem: React.FC<INavItem> = ({ path, title, onClick, children }) => {
    return (
        <Link to={path} className='NavItem' onClick={onClick}>
            {title}
            {children}
        </Link>
    );
}
export default NavItem;