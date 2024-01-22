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
                <NavItem path='/about' title='Sobre' />
                <NavItem path='/projects' title='Projetos' />
                <NavItem path='/training' title='Formação' />
                <NavItem path='/certificate' title='Certificados' />
                <NavItem path='/experience' title='Experiências' />
                <NavItem path='/skills' title='Habilidades' />
                <NavItem path='/contact' title='Contatos' />
            </nav>
            <button className="hamburger-button" onClick={toggleMenu}>
                ☰
            </button>
        </>
    );
}
export default Navbar;