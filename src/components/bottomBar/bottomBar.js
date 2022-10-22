import "./bottomBar.css";
// import group3251 from "./assets/group3251.svg";


export default function BottomBar() {
  return (
    <div className="bottomBarContainer">
      <div className="rectangle">
        <div className="flex-container">
          <span className="num-10-k">10k</span>
          <span className="worldwide-client-alr">
            Worldwide Client Already Connected
          </span>
        </div>
        <div className="flex-container-1">
          <span className="quick-link">Quick Link</span>
          <span className="home">Home</span>
          <span className="about-us">About us</span>
          <span className="blog-post">Blog post</span>
          <span className="photo-gallery">Photo gallery</span>
        </div>
        <div className="flex-container-2">
          <span className="get-in-touch">Get In Touch</span>
          <span className="contact-us">Contact us</span>
          <span className="our-services">Our services</span>
        </div>
        <div className="flex-container-3">
          <span className="address">Address</span>
          <span className="address-thing">
            2464 Royal Ln. 
          </span>
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
          <span className="email-frame">
            Your email is safe with us,we don’t spam.
          </span>
          <span className="follow-me">Follow Me</span>
          {/* <img className="group-3251" src={group3251} /> */}
        </div>
      </div>
    </div>
  );
};
