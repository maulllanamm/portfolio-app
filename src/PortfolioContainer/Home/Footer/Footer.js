import React from 'react';
import './Footer.css';
import HomeShape from '../../../assets/Home/shape-bg.png';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={HomeShape} alt="" />
      </div>
    </div>
  );
}
