import React from 'react';

import Banner from '../Utils/Banner';

import './CommunityBanner.css';

function CommunityBanner() {
  return (
    <Banner component="banner community-banner">
    <div className="h-100" id="dexscreener-embed"><iframe  src="https://dexscreener.com/solana/33V6P3GcL8FU7yN8EpK4qEi9tkQPr967rN3saWH84bha?embed=1&theme=dark"></iframe></div>


    </Banner>
  );
}

export default CommunityBanner;

