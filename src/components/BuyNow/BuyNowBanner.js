import React from 'react';

import SocialIcons from '../SocialIcons';
import crokiGif from '../../assets/croki.gif';
import butterflyImage from '../../assets/butterfly.gif';
import grass from '../../assets/grass45.png';

import Banner from '../Utils/Banner';

import './BuyNowBanner.css';


function BuyNowBanner() {
  return (
    <Banner component="buy-now-banner">
      <div className="h-100 gif-container align-center justify-center">
        <img className="croki-gif" src={crokiGif} alt="Playing Croki GIF" />
      </div>
      <div className="front text-container align-center justify-center">
        <div className="buy-content">
          <h1>CROKI
            <img src={butterflyImage} alt="Butterfly IMG" className="butterfly-image" />
          </h1>
          <button className="buy-now">BUY NOW</button>
          <SocialIcons />
        </div>
      </div>
      <img src={grass} className="grass" alt="Grass IMG" />

      <div className="footer-text">
        5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC
      </div>
    </Banner>
  );
}

export default BuyNowBanner;
