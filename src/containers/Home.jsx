import React from 'react';
import Application from '../components/Application';
import "../styles/Home.css"

import contact from "../assets/icons/contact.png"

const Applications =[
    {
        "id":1,
        "icon":contact,
        "name": "Todo List",
        "url": "https://santiago-avila-acin.github.io/Todo-App/"
    },
    {
        "id":2,
        "icon":"./",
        "name": "",
        "url": "https/"
    },
    {
        "id":3,
        "icon":"./",
        "name": "",
        "url": "https/"
    },
    {
        "id":4,
        "icon":"./",
        "name": "",
        "url": "https/"
    },
    {
        "id":5,
        "icon":"./",
        "name": "",
        "url": "https/"
    },
    {
        "id":6,
        "icon":"./",
        "name": "",
        "url": "https/"
    }
]

const Home = () => {
    return (
        <div className="home">
            {Applications.map(singleApplication => (
                <Application
                key={singleApplication.id}
                singleApplication={singleApplication}
                />
            ))}
        </div>
    );
}

export default Home;