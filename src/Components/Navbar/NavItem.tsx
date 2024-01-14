import React, { useState } from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
interface INavItem {
    path:string;
    title:string;
}
const NavItem :React.FC<INavItem> = ({path, title}) =>{
    return (
       <Link to={path}>
            {title}
       </Link>
    );
}
export default NavItem;