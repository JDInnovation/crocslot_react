import React from 'react';

import slotImage from '../../assets/slot.png';

import './ProposalBanner.css';

import Banner from '../Utils/Banner';

function ProposalBanner() {
  return (
    <Banner component="proposal-banner">
      <div className="proposal justify-around align-center h-100 ">
        <div className="d-flex-col align-center justify-center text-center text-box ">
          <h1>PROPOSAL</h1>
          <p>Welcome to $croki, the vibrant and community-powered memecoin that's redefining the crypto landscape! Born from a passion for fun and unity, our token thrives on the collective energy of its holders. There’s no complex utility, just pure, unbridled community spirit driving our journey forward. Whether you're a crypto veteran or a newcomer, join us in building something extraordinary together.<br></br>
          </p>
        </div>
        <div  className="d-flex-col justify-center align-center">
          <img src={slotImage} className="slot-image " />
        </div>
      </div>
    </Banner>
  );
}

export default ProposalBanner;

