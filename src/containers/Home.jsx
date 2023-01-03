import React from 'react';
import Application from '../components/Application';
import "../styles/Home.css"

import chrome from "../assets/icons/chrome.png"
import todoApp from "../assets/icons/todoApp.png"  
import store from "../assets/icons/store.png"  

const Applications =[
    {
        "id":1,
        "icon":store,
        "name": "Store",
        "url": "https://github.com/Santiago-Avila-Acin/Responsive-online-store-react-pt2"
    },
    {
        "id":2,
        "icon":todoApp,
        "name": "Todo List",
        "url": "https://santiago-avila-acin.github.io/Todo-App/"
    },
    {
        "id":3,
        "icon":"./",
        "name": "",
        "url": "https/"
    },
    {
        "id":4,
        "icon":chrome,
        "name": "Chrome",
        "url": "https://santiago-avila-acin.github.io/clone-google-practice/"
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