import React from 'react'
import './chat.css';
// import html from 'demochat.html';


const getTime = () => {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var n = hours + ":" + minutes;
    return (
        n
    )
}



export { getTime }


