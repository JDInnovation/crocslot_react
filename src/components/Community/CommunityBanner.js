import React from 'react';

import Banner from '../Utils/Banner';

function CommunityBanner() {
  return (
    <Banner component="buy-now-banner">
      <div className="banner community-banner">
        <div className="d-flex-col w-100 align-center justify-center justify-between">
          <h1>HOW TO BUY?</h1>
          <h3>1. Download Phantom wallet</h3>
          <h3>2. Purchase or Receive $Solana</h3>
          <h3>3. Head to Jupiter Exchange </h3>
          <h3>4. Connect wallet and swap for $CROKI</h3>
        </div>

      </div>
    </Banner>
  );
}

export default CommunityBanner;

