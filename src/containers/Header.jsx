import React from 'react';
import Time from '../components/Time';
import Title from '../components/Title';
import "../styles/Header.css"

const Header = () => {
    return (
        <div className="header">
            <Time />
            <Title />
        </div>
    );
}

export default Header;