import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./styles.css";

const Header: React.FC = () => {
    return (
        <section className='HeaderContainer'>
            <Link to="/" className='Title'>
                Steve Silva
            </Link>
            <Navbar/>
        </section>
    )
}

export default Header;