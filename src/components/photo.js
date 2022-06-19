import React from 'react';
import photo from '../images/AaronHeadshot.PNG'

export default function Photo() {
    return (
        <main>
            <img 
                src={photo}
                alt="My Headshot"
                className="my-photo" 
            />
        </main>
    )
}