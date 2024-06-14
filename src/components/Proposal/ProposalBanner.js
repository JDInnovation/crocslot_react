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
          <p>Beyond its viral meme appeal, Croki offers real utility. <br></br>

            Each token acts as a spin in a decentralized, open-source slot machine, providing fair winnings for gambling enthusiasts.<br></br>

            Join us and be part of this ambitizous, innovative project that’s set to revolutionize the gabling and meme world!<br></br>
          </p>
        </div>
        <div  className="d-flex-col justify-center align-center h-100">
          <img src={slotImage} className="slot-image " />
        </div>
      </div>
    </Banner>
  );
}

export default ProposalBanner;

