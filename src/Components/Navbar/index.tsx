import React, { useState } from 'react';
import NavItem from './NavItem';
import "./styles.css";

const Navbar: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const classe = `${menuVisible ? 'NavBarMobile': 'Navbar'} `;

    return (
        <>
            <nav className={classe}>
                <NavItem path='/about' title='Sobre' onClick={toggleMenu}/>
                <NavItem path='/projects' title='Projetos' onClick={toggleMenu}/>
                <NavItem path='/training' title='Formação' onClick={toggleMenu}/>
                <NavItem path='/certificate' title='Certificados' onClick={toggleMenu}/>
                <NavItem path='/experience' title='Experiências' onClick={toggleMenu}/>
                <NavItem path='/skills' title='Habilidades' onClick={toggleMenu}/>
                <NavItem path='/contact' title='Contatos' onClick={toggleMenu}/>
            </nav>
            <button className="hamburger-button" onClick={toggleMenu}>
                ☰
            </button>
        </>
    );
}
export default Navbar;