import React from 'react';

import SocialIcons from '../SocialIcons';
import crokiGif from '../../assets/croki.gif';
import butterflyImage from '../../assets/butterfly.gif';
import grassRight from '../../assets/grass_right1.gif';
import grassLeft from '../../assets/grass_left1.gif';
import grass from '../../assets/grass_ts.svg';
import Banner from '../Utils/Banner';

import './BuyNowBanner.css';

//<img src={grassRight} className="grass-left" alt="Grass Left GIF" />
//<img src={grassLeft} className="grass-right" alt="Grass Right GIF" />
function BuyNowBanner() {
  return (
    <Banner component="buy-now-banner">
      <div className="h-100 gif-container align-center justify-center">
        <img className="croki-gif" src={crokiGif} alt="Playing Croki GIF" />
      </div>
      <div className="front text-container align-center justify-center">
        <div className="buy-content">
          <h1 className="title">CROKI
            <img src={butterflyImage} alt="Butterfly IMG" className="butterfly-image" />
          </h1>
          <button className="buy-now">BUY NOW</button>
          <SocialIcons />
        </div>
      </div>
      <img src={grass} className="grass" alt="Grass Right GIF" />
{/*       <img src={grass} className="grassBack" alt="Grass Right GIF" /> */}
      <img src={grass} className="grass1" alt="Grass Right GIF" />
     {/*  <img src={grass} className="grassBack1" alt="Grass Right GIF" /> */}
    </Banner>
  );
}

export default BuyNowBanner;
