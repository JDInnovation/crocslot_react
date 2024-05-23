import React from 'react';
import './Header.css';
import crokiImage from '../assets/croki.gif';
import butterflyImage from '../assets/butterfly.gif';
import SocialIcons from './SocialIcons';

const Header = () => {
  return (
    <div className="header">
      <img src={crokiImage} alt="Croki" className="croki-image" />
      <div className="header-content">
        <h1>CROKI
        <img src={butterflyImage} alt="Butterfly" className="butterfly-image" />
        </h1>
        <button className="buy-now">BUY NOW</button>
        <SocialIcons />
      </div>
      <div className="footer-text">
        5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC
      </div>
    </div>
  );
}

export default Header;