import React from 'react'
import "../styles/Time.css"

const Time = () => {
    let date = new Date ();

    return (
        <div className='time'>
                <h2>{date.getHours()} : {date.getMinutes()} </h2>
        </div>
    );
}

export default Time;