import React from "react";
import { Typography } from 'antd';
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import "./Pages.css"
import "./Home.css"
import headerBackgroundImage from "../images/backgroundheader.png"
import logo from "../images/_logo.png"
import logo1 from "../images/_logo (1).png"
import logo2 from "../images/_logo (2).png"
import logo3 from "../images/_logo (3).png"


import { ArrowLeftOutlined, ArrowRightOutlined, TrendingUpRounded } from "@material-ui/icons";
const {Meta}= Card;
const { Title} = Typography;

export default function Home(props) {
  console.log('in home screen');
  const cardStyle = {
        borderRadius: "16px", 
        padding:"10%",
        // marginRight: "24px", 
        // marginLeft: "24px", 
        boxShadow: "5px 8px 24px 5px rgb(220,220,220)", 
        width: "102%",
        height: "95%"
    };


  return (
    <div style= {{position: "relative", height: "100vh"}}>
      <div class="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, textAlign:"center", justifyContent:"center", height: "600px"}}>
           <NavBar/>
            <Row style = {{marginBottom: 100}}>
              <Col span={14} offset={5}>
                <Title offset={3} style = {{color:"white", fontSize: 50, fontWeight: "bold", marginTop:100}}> Providing Innovative Solutions and Creating Financial Strength
                </Title>
                <Title level = {4} style = {{color:"white", fontFamily:"Montserrat"}}> 
                Innovative Employment And Entrepreneurship Programs Launch Central <br/> Texans To Financial Success.
                </Title>
                
                <Button type = "primary" style = {{marginTop: 20}}>Donate Now</Button> 
                <Button type = "primary" style = {{marginLeft:50, marginTop: 20}}>Schedule An Appointment</Button>
              </Col>
            </Row>
            
        </div>
        
        <div style = {{marginTop:100, marginBottom: 100}}>
        <Row>
          <Col span={12} offset={6}>
            <h2>About Us</h2>
            <body>BiGAUSTIN has been at the heart of Central Texas entrepreneurship for over 27 years!  We
              are focused on a combination of small business and workforce development.  We provide
              innovative solutions and create financial strength for our clients.  We remain proudly
              committed to building healthy, sustainable communities.
            </body>
          </Col>
        </Row>
        <Row style = {{textAlign:"center", marginTop:50}}>
          <Col span={3} offset={6}>
            <img 
              width={100}
              src={require('../images/helpicon.png')}
            />
            <h3>4597+</h3>
            <body>People Rised</body>
          </Col>
          <Col span={3}>
            <img 
              width={100}
              src={require('../images/helpicon.png')}
            />
            <h3>8945+</h3>
            <body>Volunteer</body></Col>
          <Col span={3}>
            <img 
              width={100}
              src={require('../images/helpicon.png')}
            />
            <h3>10M+</h3>
            <body>Poor People Saved</body>
          </Col>
          <Col span={3}>
            <img 
              width={100}
              src={require('../images/helpicon.png')}
            />
            <h3>100M+</h3>
            <body>Country Member</body>
          </Col>
        </Row>
      </div>

      <div style = {{marginTop:100, marginBottom: 100}}>
        <Row>
          <Col span={12} offset={6}>
            <h2>Ways We Help</h2>
          </Col>
        </Row>
        <Row style = {{textAlign:"center", marginTop:20}} gutter = {[16,16]}>
          <Col span={4} offset={6}>
          <Card style = {cardStyle} 
            cover = {
              <Image 
              src={require('../images/funding_cropped.jpg')}
            />}>
              <Meta
              title= "Funding"
              description= "Micro-loans of up to $50,000 to help grow your business"
              />
            </Card>
          </Col>
          <Col span={4}>
          <Card style = {cardStyle} 
            cover = {
              <Image 
              src={require('../images/consulting_cropped.jpg')}
            />}>
              <Meta
              title= "Consulting"
              description= "One-on-one consultations with experienced professionals to help address your business needs"
              />
            </Card>
            </Col>
          <Col span={4}>
          <Card style = {cardStyle} 
            cover = {
              <Image 
              src={require('../images/education_cropped.jpg')}
            />}>
              <Meta
              title= "Education"
              description= "Classes instructed by industry experts catered to specific business needs"
              />
            </Card>
          </Col>
        </Row>
        <Row style = {{textAlign:"center"}}>
          <Col span={4} offset={10}>
            <Button type = "primary" style = {{marginTop: 20}}>Schedule An Appointment</Button> 
          </Col>
        </Row>
      </div>

      <div className="testimonials" style = {{backgroundColor:"#3D4451", textAlign:"center", color:"white", marginTop:100, marginBottom: 100}}>
      <Row>
          <Col span={12} offset={6}>
            <h2 style = {{color:"white", padding: "30px"}}>Testimonials</h2>
            
            <Carousel style = {{height:"350px"}} arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
            <div class = "carousel">
                <div class = "content">
                <div class = "image">
                  <Image
                    width={150}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style = {{borderRadius:"50%"}}
                  />
                  <h4 style = {{fontSize: 18, color:"white", margin: "5px"}}>Mario Carlin</h4>
                  <p style = {{fontSize: 12, color:"white"}}> CEO, Mario Carlin Management, LLC</p>
                </div>
                <div class = "carousel_text">
                  <body style = {{fontSize: 15, color:"white"}}>
                  I heard about BiGAUSTIN in 2008 from the Texas Business Opportunity and Development program. They walked me through the whole process. They assisted me with consulting, education, networking and funding. BiGAUSTIN provides experts that really understand small business and they enabled me to reach my highest potential.
                </body>
                </div>
                </div>
              </div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </Col>
        </Row>
      </div>

      <div className="partners-section" style = {{textAlign:"left", color:"black", marginTop:100, marginBottom: 100}}>
      <Row>
          <Col span={12} offset={6}>
            <h2 style = {{color:"black"}}>Our Partners</h2>
            <p style = {{color:"black"}}>
            Trusted Partnerships with Leading Organizations <br/>
                </p>
          </Col>
        </Row>
        <Row style = {{textAlign:"center", marginTop:50}}>
          <Col span={3} offset={6}>
            <img 
              width={100}
              src={logo}
            />
          </Col>
          <Col span={3}>
            <img 
              width={100}
              src={logo1}
              />
          </Col>
          <Col span={3}>
            <img 
              width={100}
              src={logo2}
            />
          </Col>
          <Col span={3}>
            <img 
              width={100}
              src={logo3}
            />
          </Col>
        </Row>
        <Row style = {{textAlign:"center"}}>
          <Col span={4} offset={10}>
            <Button type = "primary" style = {{marginTop: 20}}>Partner With Us</Button> 
          </Col>
        </Row>
      </div>
{/* 
      <div className="partners" style = {{backgroundColor:"#D9D9D9", height: 600 , textAlign:"center", color:"black", marginTop:100, marginBottom: 100}}>
        <p> Partners</p>
      </div> */}
      

      
    <BottomBar/>
    </div>

    
    
  )
}