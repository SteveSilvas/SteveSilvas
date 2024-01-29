import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
interface INavItem {
    path: string;
    title: string;
    onClick: () => void;
}
const NavItem: React.FC<INavItem> = ({ path, title, onClick }) => {
    return (
        <Link to={path} className='NavItem' onClick={onClick}>
            {title}
        </Link>
    );
}
export default NavItem;