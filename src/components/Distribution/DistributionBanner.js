import React from 'react';
import AnimatedChart from '../Chart/AnimatedChart';
import Banner from '../Utils/Banner';

function DistributionBanner() {
  return (
    <Banner component="distribution-banner">
      <AnimatedChart />
    </Banner>
  );
}

export default DistributionBanner;