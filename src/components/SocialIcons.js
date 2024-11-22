import React from 'react';
import './SocialIcons.css';
import { FaTelegram, FaXTwitter, FaInstagram, FaYahoo } from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://t.me/+1r2tilv65PwwZmNk" target="_blank"><FaTelegram className="icon" /></a>
      <a href="https://x.com/CrokiToken" target="_blank"><FaXTwitter className="icon" /></a>
      <a href="https://x.com/CrokiToken" target="_blank"><FaInstagram className="icon" /></a>
    </div>
  );
}

export default SocialIcons;
