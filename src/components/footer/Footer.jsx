import React from 'react';
import GitHubButton from 'react-github-btn'

const Footer = () => {
    return (
        <div className="footer-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3cffa6" fill-opacity="1" d="M0,96L1440,0L1440,320L0,320Z"></path></svg>
            <div className="footer-content">
                This website was made by <a href="http://github.com/vitorhfs">Vitor Hugo</a>.
                <GitHubButton href="https://github.com/vitorhfs/landing-spa-react" data-icon="octicon-star" aria-label="Star vitorhfs/landing-spa-react on GitHub">Star</GitHubButton>
            </div>
        </div>
    )
}

export default Footer;