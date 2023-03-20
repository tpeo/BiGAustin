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
                src={
                  "https://media-exp1.licdn.com/dms/image/C560BAQHY-_S23_wiwg/company-logo_200_200/0/1648837820307?e=2147483647&v=beta&t=ZQwZA1ol_VgVqccfeG-sWLa-I8SQqS_s8HfKN9AmHes"
                }
              />
            </Link>
          </div>
          <SiteNav color="white" background="transparent" align = "right" fontFamily="Montserrat, sans-serif" rowHeight="100">
            <ContentGroup title="About" width="200" height="200">
              <ul>
                <li>
                  <Link to="/about"> About BiGAUSTIN</Link>
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
            <ContentGroup title="Services" width="200" height="200">
              <ul>
                <li>
                  <Link to="/lending">Lending</Link>
                </li>
                <li>
                  <Link to="/consulting">Consulting</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/bizinc">Women's Biz Inc</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Programs" width="200" height="370">
              <ul>
                <li>
                  <Link to="/colobizcenter">Colo Biz Center</Link>
                </li>
                <li>
                  <Link to="/jobsskillsprogram">Jobs Skills Program</Link>
                </li>
                <li>
                  <Link to="/envisioncenter">Envision Center</Link>
                </li>
                <li>
                  <Link to="/wbicoffeetalks">WBI Coffee Talks</Link>
                </li>
                <li>
                  <Link to="/austincreatives">City of Austin Creatives</Link>
                </li>
                <li>
                  <Link to="/startsmart">Start Smart</Link>
                </li>
                <li>
                  <Link to="/empower">Empower</Link>
                </li>
                <li>
                  <Link to="/aspire">Aspire</Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="Workshops" rootURL="/workshops"/>
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
            <ContentGroup title="Donate" rootURL="/"/>
            <ContentGroup title="News" rootURL="/"/>
          </SiteNav>
        </header>
      </div>
    // </BrowserRouter>
  );
}
