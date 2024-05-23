import React from 'react';
import './SocialIcons.css';
import { FaTelegramPlane, FaTwitter, FaInstagram, FaYahoo } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <FaTelegramPlane className="icon" />
      <FaTwitter className="icon" />
      <FaInstagram className="icon" />
    </div>
  );
}

export default SocialIcons;