import React from "react";
import { Typography } from 'antd';
import BottomBar from "../../bottomBar/bottomBar.js";
import NavBar from "../../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import ".././Pages.css"
import headerBackgroundImage from "../../images/backgroundheader2.png"

const { Title} = Typography;

export default function CityOfAustinCreatives(props) {
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
            src={require('../../images/cityAustin1.jpg')} 
            style = {{marginTop:20}}
            />
          </Col>
          <Col span={9}>
            <h2>Business Consulting <br></br> For Creatives</h2>
            <body>
            BiGAUSTIN has joined forces with the City of Austin Economic Development Department to provide business training for creatives in the music, film/media, visual arts, performing arts, and non-profit arts group industries to help sustain, enhance, and grow your businesses through education, training, coaching, and technical assistance..
            <br></br><br></br>
            Whether you are exploring the idea of starting a business, or you already have sales under your belt, BiGAUSTIN has a solution designed just for you.
            <br></br><br></br>
            <br></br><br></br>
            <Button type = "primary">Register</Button>
            </body>
          </Col>
          </Row>
          <Row style={{padding: "70px", backgroundColor: "#d8e8df"}}>
          <Col span={9} offset={3}>
            <h4>Meet Our Coaches ----- </h4>
            <br></br>
            <h2>Corey Tabor</h2>
            <h4>Senior Business Development Consultant at BiGAUSTIN</h4>
            <br></br>
            <body>
            Corey's purpose is to inform, instruct, and inspire people to fulfill their purpose. He's committed to helping people discover and live out their purpose. For over 20 years he has been speaking to students and working professionals inspiring them to do what they were created to do.
            <br></br><br></br>
            Corey is the Founder and President of ill Coaching, a firm that informs, instructs, and inspires through speaking, coaching, and publishing. He is also Founder and C..O. of the History in the Making Community Development Center (H.I.M. Center), a nonprofit focused on education, economic development, and family development.
            </body>
          </Col>
          <Col span={9} offset={3} style={{paddingTop: 70}}>
            <img
            src={require('../../images/cityAustin2.png')} 
            style = {{width: 400}}
            />
          </Col>
          <Col span={9} offset={3} style = {{paddingTop: 80}}>
          <h2>Stephanie Douglas</h2>
            <h4>Director of Business Development and Women's BiZ Inc. at BiGAUSTIN</h4>
            <br></br>
            <body>
            She is a seasoned entrepreneur. Her passion to help others be the very best is what drives her.
            Her ability to draw from her own varied experiences as an entrepreneur is helping other entrepreneurs succeed.
            <br></br><br></br>
            Stephanie's journey as an owner/entrepreneur: The Historic Cotton Exchange, a live music bistro and art gallery, The Trois Estate, an event center hosted 200+ events such as IPO launches, weddings, corporate quarterly meetings, and destination location events.
            Outside of work, Stephanie loves spending time with her son, hanging outdoors, and live music!
            </body>
          </Col>
          <Col span={9} offset={3} style={{paddingTop: 50}}>
            <img
            src={require('../../images/cityAustin3.png')} 
            style = {{marginTop:40, top: 30, width: 400}}
            />
          </Col>
          </Row>
        </Row>
      </div>

    <BottomBar/>
    </div>

    
    
  )
}
