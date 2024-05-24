import React from 'react';
import BuyNowBanner from './BuyNow/BuyNowBanner';
import SupplyBanner from './Supply/SupplyBanner';
import CommunityBanner from './Community/CommunityBanner';
import ProposalBanner from './Proposal/ProposalBanner';
import AboutCrokiBanner from './AboutCroki/AboutCrokiBanner';
import DistributionBanner from './Distribution/DistributionBanner';

function MainPage() {
  return (
    <div className="main-page d-flex-col align-center justify-center">
      <BuyNowBanner />
      <SupplyBanner />
      <CommunityBanner />
      <ProposalBanner />
      <AboutCrokiBanner />
      <DistributionBanner />
    </div>
  );
}

export default MainPage;
