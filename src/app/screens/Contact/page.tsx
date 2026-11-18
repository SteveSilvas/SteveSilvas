import React from "react";
import MainContainer from "@/Components/MainContainer";
import PageTitle from "@/Components/PageTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contacts = [
        {
                label: "E-mail",
                value: "steve.evets00@gmail.com",
                href: "mailto:steve.evets00@gmail.com",
                icon: <FaEnvelope />,
        },
        {
                label: "WhatsApp",
                value: "(11) 9 9768-1306",
                href: "https://wa.me/5511997681306",
                icon: <FaWhatsapp />,
        },
        {
                label: "GitHub",
                value: "github.com/SteveSilvas",
                href: "https://github.com/SteveSilvas",
                icon: <FaGithub />,
        },
        {
                label: "LinkedIn",
                value: "linkedin.com/in/steve-silva-752563226",
                href: "https://www.linkedin.com/in/steve-silva-752563226/",
                icon: <FaLinkedin />,
        },
];

const Contact: React.FC = () => {
        return (
                <MainContainer bgColor="#FAF8F5">
                        <div className="w-full max-w-3xl min-h-[calc(100vh-5rem)] px-6 py-12">
                                <PageTitle>Contatos</PageTitle>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        {contacts.map((contact) => (
                                                <a
                                                        key={contact.label}
                                                        href={contact.href}
                                                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                                >
                                                        <span className="text-2xl text-[#8B1E1E]">{contact.icon}</span>
                                                        <span className="flex flex-col">
                                                                <strong className="text-[#1F1F1F]">{contact.label}</strong>
                                                                <span className="text-sm text-gray-600">{contact.value}</span>
                                                        </span>
                                                </a>
                                        ))}
                                </div>
                        </div>
                </MainContainer>
        );
};

export default Contact;
