import React from 'react';
import './card-small.css'

export default function CardSmall({icon,pageViews,percentage,is_danger }){
    let cardClassArrow = 'card-small-percentage'
    let icon_arrow = "/images/icon-up.svg"
    if (is_danger){
        cardClassArrow = 'card-small-percentage is-danger'
        icon_arrow = "/images/icon-down.svg"
    }

    return(
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
                <img src={icon} alt=""/>
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className={cardClassArrow}>
                <span>
                    <img src={icon_arrow} alt=""/>
                    {percentage}%
                </span>
            </p>
        </div>
    );
}