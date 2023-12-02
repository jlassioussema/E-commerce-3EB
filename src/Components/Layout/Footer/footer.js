// Footer.js
import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
function Footer() {
    return (
        <div>




            <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">

                <div className="footer-links">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='w3-hover-opacity'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='w3-hover-opacity'>
                        <FaFacebook />
                    </a>
                    <a href="mailto:your.email@example.com" className='w3-hover-opacity'>
                        <FaEnvelope />
                    </a>
                </div>


            </footer>
        </div>
    );
}

export default Footer;
