import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <div className="footer-container">         
             <section className="social-media">
                 <div className="social-media-wrap">
                     <div className="footer-logo">
                         <Link to="/" className="social-logo">
                             Travel Blog <i className='fas fa-blog' />
                         </Link>
                     </div>
                     <small className="website-rights">TRAVEL BLOG © 2021</small>
                 </div>
             </section>
        </div>
    )
}

export default Footer;
