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
        <p className=" text-center align-center justify-center ">Join our Telegram group to <br></br>
          interact with the team and other<br></br>
          holders. Stay up to date with the <br></br>
          latest news and participate in <br></br>
          exclusive discussions.
        </p>
        <button className="join-telegram">JOIN TELEGRAM <FaTelegram className="icon-community" /> <img src={butterflyImage} alt="Butterfly IMG" className="butterfly-image2" /> </button>
      </div>


    </Banner>
  );
}

export default CommunityBanner;

