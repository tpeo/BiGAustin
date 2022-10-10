import React from "react";
import {
  Switch,
  Link,
  Route,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import SiteNav, { ContentGroup } from "react-site-nav";
import "./NavBar.css";

export default function NavBar() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    // <BrowserRouter>
      <div className="container-fluid">
        <header>
          <div className="logo">
            <Link to="/">
              <img
                alt={"logo"}
                src={
                  "https://media-exp1.licdn.com/dms/image/C560BAQHY-_S23_wiwg/company-logo_200_200/0/1648837820307?e=2147483647&v=beta&t=ZQwZA1ol_VgVqccfeG-sWLa-I8SQqS_s8HfKN9AmHes"
                }
              />
            </Link>
          </div>
          <SiteNav color="#3F3F3F" background="#fff">
            <ContentGroup title="About" width="200" height="150">
              <ul>
                <li>
                  <Link to="/link-2"> About BiGAUSTIN</Link>
                </li>
                <li>
                  <Link to="/link-2">Our Impact</Link>
                </li>
                <li>
                  <Link to="/link-2">Our Team</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="How We Help" width="200" height="150">
              <ul>
                <li>
                  <Link to="/link-2">Services</Link>
                </li>
                <li>
                  <Link to="/link-2">Programs</Link>
                </li>
                <li>
                  <Link to="/link-2">Workshops</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Get Involved" width="200" height="150">
              <ul>
                <li>
                  <Link to="/link-2">Volunteer</Link>
                </li>
                <li>
                  <Link to="/link-2">Partner</Link>
                </li>
                <li>
                  <Link to="/link-2">Contact Us</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="What’s New" width="200" height="0">
            </ContentGroup>
            <ContentGroup title="Donate" width="200" height="0">
            </ContentGroup>
          </SiteNav>
        </header>
      </div>
    // </BrowserRouter>
  );
}
