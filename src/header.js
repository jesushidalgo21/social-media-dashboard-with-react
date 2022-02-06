import React from 'react';
import './header.css';
// import Switch from './switch.js';

function Header({children}){
    return(
        <header className="header">
            <div className="wrapper">
                <div className="header-grid">
                    <div>
                        <h1>Social Media Dashboard</h1>
                        <p className="header-total">Total Followers: 23,004</p>
                    </div>
                    {children}
                    {/* <Switch /> */}
                </div>
            </div>
        </header>
    );
}

export default Header