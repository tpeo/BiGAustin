import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Button, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

export default function Consulting(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:70, marginBottom: 70, textAlign:"center"}}>
            <h2> Consulting</h2>
            <Row style = {{textAlign:"center", marginTop:20}} gutter ={[30,50]}>
                <Col span={12} offset={6}>
                BiGAUSTIN offers confidential business consulting services tailored to meet your needs. We’ve got you covered whether you are just getting started or if you are already in business.
                </Col>
                <Col span={12} offset={6}>
                  <img  
                      height={450}
                      src={require('../images/_Z4A2672 1 (1).png' )} 
                      style = {{marginTop:20}}
                  />
                <h1 style = {{marginTop:30,fontSize: 25,fontWeight : "normal"}}>From a quick visit to thoughtful advice, we’re here for you</h1>
                <Button type = "primary">Schedule An Appointment</Button>
                <h2 style = {{textAlign:"left", marginTop:50, fontSize: 15}}>Services      ⎯⎯⎯</h2>
                </Col>
                
                <Col span={4} offset={6}>
                    <div>
                      <img style= {{borderRadius:100}} width="75%" src={require('../images/Ellipse 360.png' )}/>
                    </div>
                    <h2> One on one </h2>
                    <body>
                    We tailor our free consultations to meet your specific needs related to business startup, business plan development, expansion, marketing, and management assistance. We are here to help you figure it out.
                    </body>
                </Col>
                <Col span={4}>
                    <div>
                      <img style= {{borderRadius:100}} width="75%" src={require('../images/Ellipse 361.png' )}/>
                    </div>
                    <h2> Planning </h2>
                    <body>Our business experts will provide you with a free business plan template and guide you in the right direction. You will write the plan and we will provide the expertise and validation to guide you through the refinement process.
                    </body>
                </Col>
                <Col span={4}>
                    <div>
                      <img style= {{borderRadius:100}} width="75%" src={require('../images/Ellipse 362.png' )}/>
                    </div>
                    <h2> Education & Training </h2>
                    <body>Once your plans are complete, we will recommend classes that will help you achieve success in your business.
                    </body>
                </Col>
            </Row>
      </div>
      <BottomBar/>
    </div>
  )
}
