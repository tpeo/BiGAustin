import React from "react";
import { Typography } from 'antd';
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/about_header.png"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
const { Title} = Typography;

export default function About(props) {
  return (
    <div style= {{position: "relative", height: "100vh"}}>
      <div class="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, textAlign:"center", justifyContent:"center", height: "500px", backgroundSize: "1500px 600px"}}>
           <NavBar/>
            <Row style = {{marginBottom: 100}}>
              <Col span={14} offset={5}>
                <Title style = {{color:"white", fontSize: 50, fontWeight: "bold", marginTop:150}}> 
                  About BiG Austin
                </Title>
              </Col>
            </Row>
            
        </div>
        
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
        <Row>
          <Col span={12} offset={6}>
            <h2>Vision Statement</h2>
            <body>
                BiGAUSTIN provides fair access to capital,resources to build small businesses, tools to attain livable wages, and quality affordable housing.    
            </body>
          </Col>
        </Row>
      </div>

      <div style = {{marginTop:100, marginBottom: 100}}>
        <Row gutter = {[50,100]}>
          <Col span={9} offset={3}>
            <h2>Our Mission</h2>
            <body>
            Empowering underserved Texans to excel and prosper through education, counseling, and capital.
            <br></br>
            <br></br>
            BiGAUSTIN, an Austin-based CDFI, has been at the intersection of economic and community development in Central Texas for nearly three decades. Focused on a combination of small business and workforce development efforts, we provide solutions and create financial strength for women, minorities, and clients facing systemic inequalities. We remain proudly committed to building healthy, sustainable communities and value efforts that lead to the creation of equitable economic participation.
            </body>
          </Col>
          <Col span={9}>
            <img
            src={require('../images/about_right.jpg')} 
            style = {{marginTop:20, top: 24}}
            />
          </Col>

          <Col span={9} offset={3}>
            <img
            width = {400}
            src={require('../images/about_left.jpg')} 
            style = {{marginTop:20}}
            />
          </Col>
          <Col span={9}>
            <h2>Our History</h2>
            <body>
            BiGAUSTIN was founded in 1992 as a City of Austin-funded organization designed to help people start their own small business, particularly low to moderate income minorities. In 1995, BiGAUSTIN obtained its 501(c)(3) non-profit status and began independent operations.
            <br></br> <br></br>
            Today, BiGAUSTIN obtains its funding from the state of Texas, private equity firms, Travis County, local and national banks, and the federal government. We are proud of our partnerships and will continue to leverage them for the benefit of our clients. BiGAUSTIN is also governed by a fully independent Board of Directors.

            </body>
          </Col>
          
        </Row>
      </div>

    <BottomBar/>
    </div>

    
    
  )
}
