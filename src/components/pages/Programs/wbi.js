import React from "react";
import { Typography } from 'antd';
import BottomBar from "../../bottomBar/bottomBar.js";
import NavBar from "../../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import { useState } from "react";
import ".././Pages.css"
import headerBackgroundImage from "../../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const { Title} = Typography;

export default function WBI(props) {
   const [picIndex, setPicIndex] = useState(2);

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
            src={require('../../images/wbi1.jpg')} 
            style = {{marginTop:20}}
            />
          </Col>
          <Col span={10}>
            <br></br>
            <h2>Coffee Talk Series</h2>
            <body>
            “Coffee Talk” is a series of events that ignites the spirit of women over conversation and coffee. Women learn how to cultivate meaningful relationships that are vital to successful lifestyles and prosperous businesses.
            <br></br><br></br>
            BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.
            <br></br><br></br><br></br>
            <Button type = "primary">Register</Button>
            </body>
          </Col>
          </Row>
          <Row style={{padding: "70px", backgroundColor: "#d8e8df"}}>
          <Col span={15} offset={4} style={{textAlign: "center"}}>
            <h2>WBI Speakers</h2>
            <body>
            BiGAUSTIN will have business and employment resources as well as local investment firms, venture capitalists, and financial institutions that support Women. Clients will share their success stories and tell our partners how their continued support is critical to the economic success of the community.
            </body>
          </Col>
          
          <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[20,70]}>
            <Col offset={7}>
              <ArrowLeftOutlined onClick={() => {
                if (picIndex <= 2) {
                  setPicIndex(2)
                } else {
                  setPicIndex(picIndex - 1)
                }
              }}/>
            </Col>
            <Col span={10}>
              <img 
                width={1100}
                src={require(`../../images/wbi${picIndex}.png`)}
              />
            </Col>
            <Col >
              <ArrowRightOutlined onClick={() => {
                if (picIndex >= 20) {
                  setPicIndex(2)
                } else {
                  setPicIndex(picIndex + 1)
                }
                }}/>
            </Col>
          </Row>
          </Row>
        </Row>
      </div>

    <BottomBar/>
    </div>

    
    
  )
}
