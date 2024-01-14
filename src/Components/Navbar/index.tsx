import React from 'react';
import NavItem from './NavItem';
import "./styles.css";

const  Navbar:React.FC = () => {
    return (
        <nav className={"Navbar"}>
            <NavItem path='/about' title='Sobre'/>
            <NavItem path='/projects' title='Projetos'/>
            <NavItem path='/training' title='Formação'/>
            <NavItem path='/certificate' title='Certificados'/>
            <NavItem path='/experience' title='Experiências'/>
            <NavItem path='/skills' title='Habilidades'/>
            <NavItem path='/contact' title='Contatos'/>

        </nav>
    );
}
export default Navbar;