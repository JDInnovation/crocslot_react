import React from 'react';

import Banner from '../Utils/Banner';
import coinImage from '../../assets/token_croki.gif';
import './SupplyBanner.css';

function SupplyBanner() {
  return (
    <Banner component="supply-banner">
      <div className="front align-center justify-center d-flex-row justify-around w-100">
        <div className="front align-center justify-center d-flex-col">
          <div>
            <h1>777M</h1>
          </div>
          <div>
            <h2>SUPPLY</h2>
          </div>
          <div>
            <ul>
              <li>MINT & FREEZE REVOKED</li>
              <li>LIQUIDITY BURNED</li>
              <li>NO TAXES</li>
            </ul>

          </div>

        </div>
        <div>
          <img src={coinImage} alt="Coin IMG" className="coin-image"></img>

        </div>


      </div>

    </Banner>
  );
}

export default SupplyBanner;
