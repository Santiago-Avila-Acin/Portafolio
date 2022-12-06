import React from 'react';
import "../styles/FooterApp.css"

const FooterApp = ({footerApp}) => {
    return (
        <div className="FooterApp">
            <a href={footerApp.url}>
                <div className="application__container">
                    <img
                    src={footerApp.icon}
                    alt={footerApp.name}
                    className="icon__application"
                    />
                    <span className='title__application'>{footerApp.name}</span>
                </div>
            </a>
        </div>
    );
}

export default FooterApp;