import React from 'react';
import Card from './card'
import './top-cards-list.css'


const cardListData = [
    {
        username: '@JesusHidalgo',
        id:1,
        followers:'1987',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name:'facebook'
    },
    {
        username: '@JesusHidalgo',
        id:2,
        followers:'1044',
        todayFollowers: 6,
        icon: 'images/icon-twitter.svg',
        name:'twitter'
    },
    {
        username: '@JesusHidalgo',
        id:3,
        followers:'11k',
        todayFollowers: 65,
        icon: 'images/icon-instagram.svg',
        name:'instagram'
    },
    {
        username: '@JesusHidalgo',
        id:4,
        followers:'1098',
        todayFollowers: -44,
        icon: 'images/icon-youtube.svg',
        name:'youtube'
    },
]

function TopCardsList(){
    return(
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {cardListData.map((cardData)=><Card key ={cardData.id} {...cardData}/>)}
            </div>
        </div>
    </section>
    )
}

export default  TopCardsList