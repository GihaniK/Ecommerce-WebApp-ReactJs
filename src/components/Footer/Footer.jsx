import React from 'react';
import './Footer.scss';
function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>iPhone</span>
          <span>TV</span>
          <span>Mac</span>
          <span>Accessories</span>
          <span>iPad</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>This space is a great opportunity to give a full background on who you are, 
            what you do and what your site has to offer. Your users are genuinely interested in 
            learning more about you, so don't be afraid to share personal anecdotes to create a
             more friendly quality. 
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>This space is a great opportunity to give a full background on who you are,
             what you do and what your site has to offer. Your users are genuinely interested
              in learning more about you, 
            so don't be afraid to share personal anecdotes to create a more friendly quality.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>ThunderMac</span>
          <span className='copyright'>©Copyright 2021 by ThunderMac.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer