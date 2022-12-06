import React from 'react'
import Scrollbar from '../components/Scrollbar';
import FooterApp from '../components/FooterApp';
import "../styles/Footer.css"

import skills from "../assets/icons/skills.png"
import profile from "../assets/icons/profile.png"
import contact from "../assets/icons/contact.png"

const footerApps=[
    {
        "id":1,
        "icon": skills,
        "name": "Tecnologías",
        "url": ""
    },
    {
        "id":2,
        "icon": profile,
        "name": "sobre mi",
        "url": "https/"
    },
    {
        "id":3,
        "icon": contact,
        "name": "contacto",
        "url": "https/"
    }
]

const Footer = () => {
    return (
        <div className="footer">
            <div className="scrollbar__container">
                <Scrollbar />
                <Scrollbar />
                <Scrollbar />
            </div>
            <div className="footerApp__container">
                    {footerApps.map(footerApp => (
                        <FooterApp
                        key={footerApp.id}
                        footerApp={footerApp}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Footer;