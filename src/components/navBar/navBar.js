import { Button } from "antd";
import React from "react";
import {
  Switch,
  Link,
  Route,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import SiteNav, { ContentGroup } from "react-site-nav";
import "./navBar.css";

export default function NavBar() {
  const [showModal, setShowModal] = React.useState(false);
  return (
      <div className="container-fluid">
        <header>
          <div className="logo">
            <Link to="/">
              <img
                alt={"logo"}
                src={require('../images/BIGAustinClearBackground.png')}
                style={{margin:30}}
              />
            </Link>
          </div>
          <SiteNav color="white" background="transparent" align = "right" fontFamily="Montserrat, sans-serif" rowHeight="100">
            <ContentGroup title="Home" rootUrl="/"/>
            <ContentGroup title="About" width="200" height="200">
              <ul>
                <li>
                  <Link to="/about">About BiGAUSTIN</Link>
                </li>
                <li>
                  <Link to="/ourimpact">Our Impact</Link>
                </li>
                <li>
                  <Link to="/dreamteam">Dream Team</Link>
                </li>
                <li>
                  <Link to="/partners">Partners</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="How We Help" width="200" height="150">
              <ul>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/programs">Programs</Link>
                </li>
                <li>
                  <Link to="/workshops">Workshops</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Get Involved" width="200" height="150">
              <ul>
                <li>
                  <Link to="/volunteer">Volunteer</Link>
                </li>
                <li>
                  <Link to="/partners">Partner</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Donate" rootUrl="/donate"/>
          </SiteNav>
        </header>
      </div>
    // </BrowserRouter>
  );
}
