import React, { useState } from 'react';
import "./styles.css";
import NavItem from './NavItem';

function Navbar() {
    return (
        <nav className={"Navbar"}>
            <NavItem path='/home' title='Página Inicial'/>
            <NavItem path='/contact' title='Contato'/>
            <NavItem path='/contact' title='Contato'/>
        </nav>
    );
}
export default Navbar;