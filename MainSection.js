import React from 'react'
import '../App.css';
import './MainSection.css';
import { FaArrowDown } from 'react-icons/fa';

function MainSection() {
    return (
        <div className='main-container'>
            <h1>Welcome to the Travel Blog</h1>
            <p>Check out the articles below</p>
            <button className="mainSectionButton" type="button" 
                onClick={() => {
                window.location.href='#cards';
                }}> View articles <FaArrowDown className="icon"/></button>
        </div>
    )
}

export default MainSection
