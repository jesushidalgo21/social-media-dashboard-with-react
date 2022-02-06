import React from 'react';
import './card.css';

function Card({username,followers,todayFollowers,icon,name,}){
    const cardClass = `card ${name}`;
    let cardToday = 'card-today'
    let icon_arrow = "/images/icon-up.svg"
    if (Number(todayFollowers)<0){
        icon_arrow = "/images/icon-down.svg"
        cardToday = 'card-today is-danger'
    }
    return(
        <article className={cardClass}>
            <p className="card-title">
                <img src={icon} alt=''/>
                {username}
            </p>
            <p className ='card-followers'>
                <span className ='card-followers-number'>{followers}</span>
                <span className ='card-followers-title'>Followers</span>
            </p>
            <p className={cardToday}>
                <img src={icon_arrow} alt=""/>
                {todayFollowers} Today
            </p>
        </article>
    )
}

export default Card