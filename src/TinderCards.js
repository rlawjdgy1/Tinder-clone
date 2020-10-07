import React, { useState } from 'react';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
        },
        {
            name: 'mark zuckerberg',
            url: "https://en.wikipedia.org/wiki/Mark_Zuckerberg#/media/File:Mark_Zuckerberg_F8_2019_Keynote_(32830578717)_(cropped).jpg"
        }
    ]);
    // const people = [];

    return (
        <div>
            <h1>Tinder cards</h1>

            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
}

export default TinderCards;