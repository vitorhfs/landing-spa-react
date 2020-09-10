import React from 'react';
import twitterLogo from '../../images/twitter-square-brands.svg';
import instagramLogo from '../../images/instagram-square-brands.svg';
import facebookLogo from '../../images/facebook-square-brands.svg';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div className="contact-container">
            <Helmet>
                <title>The Grass Mowers - Contact</title>
            </Helmet>
            <div className="info">
                1 Ed Preate Dr, Scranton, Pennsylvania.<br/>
                +1 999-7878<br/>
                thegrassmowers@pennsylvaniamowers.com
            </div>   
            <div className="maps-pointer">
            <iframe 
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.647225105525!2d-75.67941545107622!3d41.37077981864459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4dfaf42ec70c7%3A0x4d41e8d8bf946bb4!2s1%20Ed%20Preate%20Dr%2C%20Scranton%2C%20PA%2018507%2C%20USA!5e1!3m2!1sen!2sbr!4v1599518984820!5m2!1sen!2sbr" 
                width="600" height="250" 
                frameborder="0" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0">
            </iframe>
            </div>          
            <div className="social">
                <img href="#" className="twitter" src={ twitterLogo } alt="twitter" width='40px' height='40px' />
                <img href="#" className="twitter" src={ instagramLogo } alt="twitter" width='40px' height='40px' />
                <img href="#" className="twitter" src={ facebookLogo } alt="twitter" width='40px' height='40px' />
            </div>   
            <div className="contact">
                <p>Reach us out to the best lawn mowning of all Pennsylvania.</p>
            </div>
        </div>
    )
}

export default Contact;