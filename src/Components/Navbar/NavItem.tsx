import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
interface INavItem {
    path:string;
    title:string;
}
const NavItem :React.FC<INavItem> = ({path, title}) =>{
    return (
       <Link to={path} className='NavItem'>
            {title}
       </Link>
    );
}
export default NavItem;