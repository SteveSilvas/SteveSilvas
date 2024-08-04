import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Box from '../../Components/Box';
import './styles.css';


const Contact: React.FC = () => {
    return (
        <section className='PageContact'>
            <Box className='ContactBox'>
                <h3 className='ContactTitle'>Contate-me</h3>
                <div className='ContactItem'>
                    <BsTelephone className='Icon' />
                    <h4> (11)9 9768-1306</h4>
                </div>
                <div className='ContactItem'>
                    <MdEmail className='Icon' />
                    <h4>steve.evets00@gmail.com</h4>
                </div>
            </Box>
            <Box className='ContactBox'>
                <h3 className='ContactTitle'>Conheça-me</h3>
                <Link
                    className='ContactItem'
                    to={"https://www.linkedin.com/in/steve-silva-752563226/"}
                    target='blank'>
                    <FaLinkedin className='Icon' />
                    <h4>LinkedIn</h4>
                </Link>
                <Link
                    className='ContactItem'
                    to={"https://github.com/SteveSilvas"}
                    target='blank'>
                    <FaGithub className='Icon' />
                    <h4>GitHub</h4>
                </Link>
                <Link
                    className='ContactItem'
                    to={"https://wa.me/5511997681306?text=Inicie+chat+via+WhatsApp"}
                    target='blank'>
                    <FaWhatsapp className='Icon' />
                    <h4>WhatsApp</h4>
                </Link>
            </Box>
        </section>
    )
}

export default Contact;