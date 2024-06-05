import React from 'react';


import Banner from '../Utils/Banner';

import './ProposalBanner.css';

function ProposalBanner() {
  return (
    <Banner component="banner proposal-banner">

      <div className="d-flex-col text-center align-center justify-center justify-between">
        <h1>HOW TO BUY?</h1>
        <h3>1. Download <span className="phantom">Phantom</span> wallet</h3>
        <h3>2. Purchase or Receive <span className="solana">$Solana</span></h3>
        <h3>3. Head to <span className="jupiter">Jupiter</span> Exchange </h3>
        <h3>4. Connect wallet and swap for <span className="croki">$CROKI</span></h3>
      </div>


    </Banner>
  );
}

export default ProposalBanner;

