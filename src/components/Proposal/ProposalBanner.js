import React from 'react';


import Banner from '../Utils/Banner';

import './ProposalBanner.css';

function ProposalBanner() {
  return (
    <Banner component="banner proposal-banner">

      <div className="d-flex-col text-center align-center justify-center justify-between">
        <h1>HOW TO BUY?</h1>
        <h3>1. Download Phantom wallet</h3>
        <h3>2. Purchase or Receive $Solana</h3>
        <h3>3. Head to Jupiter Exchange </h3>
        <h3>4. Connect wallet and swap for $CROKI</h3>
      </div>


    </Banner>
  );
}

export default ProposalBanner;

