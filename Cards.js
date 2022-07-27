import React from 'react'
import CardItem from './CardItem'
import {  } from "./Cards.css";

function Cards() {
    return (
        <div className='cards' id='cards'>
            <h1>Articles</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src="/images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside
                            the Amazon Jungle"
                            label="Adventure"
                            path="/Article1"
                            />
                            <CardItem 
                            src="/images/img-2.jpg"
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Luxury"
                            path="/Article2"
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem 
                            src="/images/img-3.jpg"
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Mystery"
                            path="/Article3"
                            />
                            <CardItem 
                            src="/images/img-4.jpg"
                            text="Experience football on top of the Himilayan Mountains"
                            label="Adrenaline"
                            path="/Article4"
                            />
                            <CardItem 
                            src="/images/img-8.jpg"
                            text="Ride through the Sahara desert on a guided camel tour"
                            label="Adventure"
                            path="/Article5"
                            />
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Cards;
