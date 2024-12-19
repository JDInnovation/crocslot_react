import React from 'react';

import Banner from '../Utils/Banner';

import communityImage from '../../assets/crokigang.png';
import butterflyImage from '../../assets/butterfly.gif';

import { FaTelegram } from 'react-icons/fa6';

import './CommunityBanner.css';

function CommunityBanner() {
  return (
    <Banner component="banner community-banner">

      <div>
        <img src={communityImage} className="crokigang " />
      </div>
      <div className=" text-community  d-flex-col align-center justify-center ">
        <h1>COMMUNITY</h1>
        <p className=" text-center align-center justify-center ">Become a part of the croki family by joining our Telegram community! Engage with fellow holders, share ideas, and stay updated with the latest project developments. Our Telegram group is the heart of our community, where your voice matters and collaboration thrives. Whether you have questions, suggestions, or just want to connect, our Telegram channel is the perfect place to be involved. Click the link below to join us and help shape the future of croki together!
        </p>
        <a href="https://t.me/crokiportal" target="_blank" className="join-telegram">JOIN TELEGRAM <FaTelegram className="icon-community" /> <img src={butterflyImage} alt="Butterfly IMG" className="butterfly-image2" /> </a>
      </div>


    </Banner>
  );
}

export default CommunityBanner;

