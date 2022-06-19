import React from 'react';
import facebook from '../images/icons8-facebook-30.png'
import twitter from '../images/icons8-twitter-30.png'
import youtube from '../images/icons8-youtube-30.png'


export default function Footer() {
    return (
        <footer>
                <img src={facebook} alt='facebook' className="img" />
                <img src={twitter} alt='twitter' className="img" />
                <img src={youtube} alt='youtube' className="img" />
        </footer>
    )
}