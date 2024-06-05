import React from 'react';
import './SocialIcons.css';
import { FaTelegram, FaXTwitter, FaInstagram, FaYahoo } from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <FaTelegram className="icon" />
      <FaXTwitter className="icon" />
      <FaInstagram className="icon" />
    </div>
  );
}

export default SocialIcons;