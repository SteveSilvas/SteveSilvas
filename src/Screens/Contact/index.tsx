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
                <h3>Contate-me</h3>

                <h4><BsTelephone className='Icon' /> (11)9 9768-1306</h4>
                <h4><MdEmail className='Icon' /> steve.evets00@gmail.com</h4>
            </Box>
            <Box className='ContactBox'>
                <h3>Conheça-me</h3>
                <Link
                    className='Link'
                    to={"https://www.linkedin.com/in/steve-silva-752563226/"}
                    target='blank'>
                    <div className='LinkRow'>
                        <FaLinkedin className='Icon' />
                        <h3>LinkedIn</h3>
                    </div>
                </Link>
                <Link
                    className='Link'
                    to={"https://github.com/SteveSilvas"}
                    target='blank'>
                    <div className='LinkRow'>
                        <FaGithub className='Icon' />
                       <h3>GitHub</h3>
                    </div>
                </Link>
                <Link
                    className='Link'
                    to={"https://wa.me/5511997681306?text=Inicie+chat+via+WhatsApp"}
                    target='blank'>
                    <div className='LinkRow'>
                        <FaWhatsapp className='Icon' />
                        <h3>WhatsApp</h3>
                    </div>
                </Link>
            </Box>
        </section>
    )
}

export default Contact;