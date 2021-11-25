import React from 'react';
import footer from '../../../images/footer/footer.png.webp';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <img src={footer} alt="" />
            <h4>copyright 2021</h4>
        </div>
    );
};

export default Footer;