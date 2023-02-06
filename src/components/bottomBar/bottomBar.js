import "./bottomBar.css";
import React from 'react';
// import group3251 from "./assets/group3251.svg";


export default function BottomBar() {
  return (
    <div className="bottomBarContainer">
      <div className="rectangle">
        <div className="flex-container">
          <span className="address">Address</span>
          <span className="address_text">
          2464 Royal Ln. Mesa, New Jersey 45463
          </span>
        </div>
        <div className="flex-container-1">
          <span className="header_text">Quick Links</span>
          <span className="link_text">Home</span>
          <span className="link_text">Donate</span>
          <span className="link_text">News</span>
          <span className="link_text">Contact Us</span>
        </div>
        <div className="flex-container-1">
          <span className="header_text">Get In Touch</span>
          <span className="link_text">Home</span>
          <span className="link_text">Donate</span>
          <span className="link_text">News</span>
          <span className="link_text">Contact Us</span>
        </div>
        <div className="flex-container-1">
          <span className="header_text">How We Help</span>
          <span className="link_text">Home</span>
          <span className="link_text">Donate</span>
          <span className="link_text">News</span>
          <span className="link_text">Contact Us</span>
        </div>
        <div className="flex-container-1">
          <span className="header_text">Get Involved</span>
          <span className="link_text">Home</span>
          <span className="link_text">Donate</span>
          <span className="link_text">News</span>
          <span className="link_text">Contact Us</span>
        </div>
        <div className="flex-container-4">
          <span className="newsletter">Newsletter</span>
          <div className="flex-container-5">
            <div className="email-box">
              <span className="enter-your-email">Enter your email</span>
            </div>
            <div className="subscribe-frame">
              <span className="subscribe">Subscribe</span>
            </div>
          </div>
          <span className="spam_text">
            Your email is safe with us, we don’t spam.
          </span>
          <span className="follow-me">Follow Me</span>
          {/* <img className="group-3251" src={group3251} /> */}
        </div>
      </div>
    </div>
  );
};
