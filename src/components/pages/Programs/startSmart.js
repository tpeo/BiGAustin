import React from "react";
import { Typography } from 'antd';
import BottomBar from "../../bottomBar/bottomBar.js";
import NavBar from "../../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import ".././Pages.css"
import headerBackgroundImage from "../../images/backgroundheader2.png"

const { Title} = Typography;

export default function StartSmart(props) {
  return (
    <div style= {{position: "relative", height: "100vh"}}>
      <div class="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, textAlign:"center", justifyContent:"center", height: "500px", backgroundSize: "1500px 600px"}}>
           <NavBar/>
            
        </div>

      <div style = {{marginTop:100, marginBottom: 100}}>
        <Row gutter = {[50,100]}>
        <Row>
        <Col span={9} offset={3}>
            <img
            width = {400}
            src={require('../../images/startSmart1.png')} 
            style = {{marginTop:20}}
            />
          </Col>
          <Col span={9}>
            <h2>Start Smart</h2>
            <body>
            BiGAUSTIN’s Start Smart program provides all the key essentials for starting and operating a business.
            <br></br><br></br>
            Start Smart provides practical business training, helping students hone the skills they need to create, manage, and grow a small business. In addition, the start smart program connects entrepreneurs with business insights, leadership skills, and professional networking connections so you can create a new business or expand an existing enterprise.
            <br></br><br></br>
            Start Smart is a 14-session course designed for people who want to start a business and need the skills to test the feasibility of their business concept. Participants develop a business plan which acts as the blueprint for their start-up venture.
            <br></br><br></br>
            <Button type = "primary">Register</Button>
            </body>
          </Col>
          </Row>
          <Row style={{padding: "70px", backgroundColor: "#d8e8df"}}>
          <Col span={9} offset={3}>
            <h2>Thinking About Starting A Business?</h2>
            <body>
            You're not alone. Every year, thousands of Americans catch the entrepreneurial spirit, launching small businesses to sell their products or services. In fact, given the new economic reality of our time, more people than ever before have found the "job" they thought was waiting for them doesn't exist. Others have come to the conclusion that they would rather create work they love, constructed to fit with their own life goals.
            <br></br><br></br>
            Many times entrepreneurs are starting a business based on¬ an idea, but lack the personal hands-on experience of running a business from all aspects. The more you know about starting a business, the more power you have to form a business that develops into a lasting source of income and satisfaction.
            </body>
          </Col>
          <Col span={9} offset={3}>
            <img
            src={require('../../images/startSmart2.png')} 
            style = {{marginTop:35, top: 30}}
            />
          </Col>
          </Row>
          <Row>
          <Col span={9} offset={3}>
            <img
            width = {400}
            src={require('../../images/startSmart3.png')} 
            style = {{marginTop:20}}
            />
          </Col>
          <Col span={9} style = {{marginTop:75}}>
            <h2>Business Empowerment</h2>
            <body>
            BiGAUSTIN offers comprehensive training and support services to build the entrepreneurial capacity of socially and economically diverse women and men who want to start or grow a business. Minorities, women, and low-income adult applicants are encouraged for all BiGAUSTIN programs.
            <br></br> <br></br>
            <Button type = "primary">Register</Button>
            </body>
          </Col>
          </Row>
        </Row>
      </div>

    <BottomBar/>
    </div>

    
    
  )
}
