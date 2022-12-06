import React from 'react';
import "../styles/Application.css"

const Application = ({singleApplication}) => {
    return (
        <div className="Application">
            <a href={singleApplication.url}>
                <div className="application__container">
                    <img
                    src={singleApplication.icon}
                    alt={singleApplication.name}
                    className="icon__application"
                    />
                    <span className='title__application'>{singleApplication.name}</span>
                </div>
            </a>
        </div>
    );
}

export default Application;