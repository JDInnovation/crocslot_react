import React from 'react';
import JupiterSwap from '../JupiterSwap';
import Banner from '../Utils/Banner';

import CopyExample from './Copy';

import './HowtoBuyBanner.css'

function HowToBuyBanner() {
  return (
    <Banner component="how-buy-banner">
      <JupiterSwap />
      <CopyExample></CopyExample>
    </Banner>
  );
}

export default HowToBuyBanner;

