import React from 'react';
import './SocialIcons.css';
import { FaTelegram, FaXTwitter, FaInstagram, FaYahoo } from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://t.me/+hlC4qTlwUjYxYTg0" target="_blank"><FaTelegram className="icon" /></a>
      <a href="https://www.instagram.com/croki_solana?igsh=Mjg5ODh3N2NoMXZ4&utm_source=qr" target="_blank"><FaXTwitter className="icon" /></a>
      <a href="https://www.instagram.com/croki_solana?igsh=Mjg5ODh3N2NoMXZ4&utm_source=qr" target="_blank"><FaInstagram className="icon" /></a>
    </div>
  );
}

export default SocialIcons;