import React from 'react';
import crokiGif from '../../assets/croki.gif';
import './BuyNowBanner.css';

function BuyNowBanner() {
  return (
    <div className="banner buy-now-banner d-flex-row align-center justify-center">
        <div className="w-100 h-100 max-width d-flex-row align-center justify-around">
            <div className="h-100 gif-container align-center justify-center">
                <img className="croki-gif" src={crokiGif} alt="Playing Croki GIF" />
            </div>
            <div className="text-container align-center justify-center">
                Peido
            </div>
        </div>
    </div>
  );
}

export default BuyNowBanner;
