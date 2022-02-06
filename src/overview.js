import React from 'react';
import CardSmall from './card-small'

const cardListData = [
    {
        id:1,
        icon: 'images/icon-facebook.svg',
        pageViews:'87',
        percentage:3,
        is_danger: false
    },
    {
        id:2,
        icon: 'images/icon-facebook.svg',
        pageViews:'52',
        percentage:2,
        is_danger: true
    },
    {
        id:3,
        icon: 'images/icon-twitter.svg',
        pageViews:'5462',
        percentage:2257,
        is_danger: false
    },
    {
        id:4,
        icon: 'images/icon-twitter.svg',
        pageViews:'52k',
        percentage:1375,
        is_danger: false
    },
    {
        id:5,
        icon: 'images/icon-instagram.svg',
        pageViews:'117',
        percentage:303,
        is_danger: false
    },
    {
        id:6,
        icon: 'images/icon-instagram.svg',
        pageViews:'507',
        percentage:553,
        is_danger: false
    },
    {
        id:7,
        icon: 'images/icon-youtube.svg',
        pageViews:'107',
        percentage:19,
        is_danger: true
    },
    {
        id:8,
        icon: 'images/icon-youtube.svg',
        pageViews:'1407',
        percentage:12,
        is_danger: true
    },
]

function Overview(){

    return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {cardListData.map((cardData)=><CardSmall key ={cardData.id} {...cardData}/>)}
                </div>
            </div>
        </section>
    );
}

export default Overview;