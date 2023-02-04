import React from "react";
import { Typography } from 'antd';
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import "./Pages.css"
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
                <Title style = {{color:"white", fontSize: 50, fontWeight: "bold", marginTop:100}}> 
                  Providing Innovative Solutions and <br/> Creating Financial Strength
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
            <h2 style = {{color:"white"}}>Testimonials</h2>
            <Carousel style = {{height:"400px"}} arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
              <div>
                <Image
                  width={100}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  style = {{borderRadius:"50%"}}
                />
                <h1 style = {{fontSize: 18, color:"white"}}>Cameron Williamson</h1>
                <h4 style = {{color:"white"}}>Founder</h4>
                <body style = {{color:"white"}}>
                Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California <br/>
                halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket <br/>
                danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. <br/>
                </body>
              </div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </Col>
        </Row>
      </div>

      <div className="partners-section" style = {{textAlign:"center", color:"black", marginTop:100, marginBottom: 100}}>
      <Row>
          <Col span={12} offset={6}>
            <h2 style = {{color:"black"}}>Our Partners</h2>
            <p style = {{color:"black"}}>
            BiGAUSTIN has been at the heart of Central Texas entrepreneurship for over 27 years!  
            We are focused on a combination of small business and workforce development.  
            We provide innovative solutions and create financial strength for our clients. 
            We remain proudly committed to building healthy, sustainable communities. <br/>
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
      

      <div style = {{marginTop:100, marginBottom: 100}}>
        <Row>
          <Col span={12} offset={6}>
            <Title level = {5}>Latest News</Title>
            <h2>Articles You May Read</h2>
          </Col>
        </Row>
        <Row gutter = {[20,20]}>
          <Col span={4} offset={6}>
            <Card bodyStyle={{padding:10}}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
              </div>
              <div className="custom-image">
                <body>Esther Howard  12 Dec 2021</body>
              </div>
              <div className="custom-card">
              <h2 style = {{fontSize:23}}>Charity, Expectations vs. Reality</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy
                  tempor invidunt ut labore et 
                  magna aliquyam erat, sed diam voluptua.....
                  </p>
              </div>
              <div>
              <Button type = "primary" style = {{backgroundColor: "#219D80"}}>Read More</Button>
              </div>
            </Card>
          </Col>
          <Col span={4} >
          <Card bodyStyle={{padding:10}}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
              </div>
              <div className="custom-image">
                <body>Esther Howard 12 Dec 2021</body>
              </div>
              <div className="custom-card">
              <h2 style = {{fontSize:23}}>Charity, Expectations vs. Reality</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy 
                  tempor invidunt ut labore et 
                  magna aliquyam erat, sed diam voluptua.....
                  </p>
              </div>
              <div>
              <Button type = "primary" style = {{backgroundColor: "#219D80"}}>Read More</Button>
              </div>
            </Card>
            </Col>
          <Col span={4}>
          <Card bodyStyle={{padding:10}}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
              </div>
              <div className="custom-image">
                <body>Esther Howard  12 Dec 2021</body>
              </div>
              <div className="custom-card">
              <h2 style = {{fontSize:23}}>Charity, Expectations vs. Reality</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy 
                  tempor invidunt ut labore et
                  magna aliquyam erat, sed diam voluptua.....
                  </p>
              </div>
              <div>
                <Button type = "primary" style = {{backgroundColor: "#219D80"}}>Read More</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    <BottomBar/>
    </div>

    
    
  )
}