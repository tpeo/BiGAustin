import React from "react";
import { Typography } from "antd";
import BottomBar from "../../bottomBar/bottomBar.js";
import NavBar from "../../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card } from "antd";
import ".././Pages.css";
import headerBackgroundImage from "../../images/backgroundheader2.png";

const { Title } = Typography;
const myImageStyle = { width: "0px", height: "100px", marginTop: 20 };
const { Meta } = Card;

export default function Programs(props) {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        class="new_event_container"
        style={{
          backgroundImage: `url(${headerBackgroundImage})`,
          textAlign: "center",
          justifyContent: "center",
          height: "500px",
          backgroundSize: "1500px 600px",
        }}
      >
        <NavBar />
      </div>
      <div style = {{marginTop:20, marginBottom: 20, textAlign:"center"}}>
            <h2> Programs</h2>
        </div>
      <div style={{ marginBottom: 100 }}>
        <Row gutter={[50, 100]}>
          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                src={require("../../images/nathan-dumlao-6VhPY27jdps-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>WBI Coffee Talk Series</h2>
              <body>
                “Coffee Talk” is a series of events that ignites the spirit of
                women over conversation and coffee. Women learn how to cultivate
                meaningful relationships that are vital to successful lifestyles
                and prosperous businesses.
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                height={10}
                src={require("../../images/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>City of Austin Creatives</h2>
              <body>
                BiGAUSTIN has joined forces with the City of Austin Economic
                Development Department to provide business training for
                creatives in the music, film/media, visual arts, performing
                arts, and non-profit arts group industries to help sustain,
                enhance, and grow your businesses through education, training,
                coaching, and technical assistance..
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                height={10}
                src={require("../../images/EnVision+Center+Webpage+(6).jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
            <h2>BIGAustin Envision Center</h2>
            <body width="100%">
                Your community One-Stop Center for economic empowerment, health and wellness, educational advancement, and character and leadership.
                Press the button to find out more!

                                                                                                                                                      
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                src={require("../../images/lucrezia-carnelos-yGv-pvgRuiI-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>Start Smart</h2>
              <body>
                Start Smart provides practical business training, helping
                students hone the skills they need to create, manage, and grow a
                small business.  In addition, the start smart program connects
                entrepreneurs with business insights, leadership skills, and
                professional networking connections so you can create a new
                business or expand an existing enterprise.
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                src={require("../../images/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>Jobs Skills Program</h2>
              <body>
                BiGAUSTIN is offering classes in two of the fastest growing
                industries: IT and Construction. As Austin grows, so does the
                demand for professionals in these industries.
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>

            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                src={require("../../images/redd-f-PTRzqc_h1r4-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>Co-Lo Biz Center</h2>
              <body>
                BiG VIP BiZ brings Austin's CEOs, business professionals, and
                small business owners from all sectors of business together
                under one roof to create the ultimate office, work-space,
                networking and business development experience. We want you as a
                VIP, this is about BiGger service and Better Business.
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>

            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                src={require("../../images/mailchimp-KR0WW6bjtt0-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>Empower</h2>
              <body>
                Empower expands access to digital marketing expertise to
                business owners from all socioeconomic backgrounds by preparing
                them with skills and information that help equalize the playing
                field.
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>

            </Col>
          </Row>

          <Row style={{ backgroundColor: "#d8e8df", height: "300px" }}>
            <Col span={9} offset={3}>
              <img
                width={250}
                src={require("../../images/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={9}>
              <h2>Aspire</h2>
              <body>
                ASPIRE IS A Diversified, Multi-Use, Mixed-Income Development
                That Provides Underserved Residents An Environment To Survive
                And Thrive. The Project Advances Social And Economic
                Opportunities For Low-Income And Minority Individuals Through
                Entrepreneurship And Job-Skills Training, Access To Loans,
                Affordable Housing, And Community-Building Initiatives.
              </body>
              <Button style={{ top: -150 }} type = "primary">Learn More</Button>

            </Col>
          </Row>
        </Row>
      </div>

      <BottomBar />
    </div>
  );
}
