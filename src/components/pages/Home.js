import { useEffect, useState, Fragment } from "react";
import { Typography } from 'antd';
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../NavBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import {helpIcon} from "../images/helpicon.png";
import "./Pages.css"
import { Tab } from "react-bootstrap";
import headerBackgroundImage from "../images/backgroundheader.png"
import SiteNav, { ContentGroup } from "react-site-nav";

const { Title} = Typography;


export default function Home(props) {
  console.log('in home screen');
  

  return (
    <div style= {{position: "relative", height: "100vh"}}>
      <div class="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, textAlign:"center", justifyContent:"center", height: "600px"}}>
           <NavBar/>
            <Row style = {{marginTop:100, marginBottom: 100}}>
              <Col span={14} offset={5}>
                <Title style = {{color:"white", fontSize: 50, fontWeight: "bold"}}> 
                  Providing Innovative Solutions And <br/> Creating Financial Strength
                </Title>
                <Title level = {4} style = {{color:"white", fontFamily:"Montserrat"}}> 
                Innovative Employment And Entrepreneurship Programs Launch Central <br/> Texans To Financial Success.
                </Title>
                
                <Button type = "primary" style = {{marginTop: 20}}>Donate Now</Button> 
                <Button style = {{marginLeft:50}} ghost>Schedule Appointment</Button>
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
            <body>BiGAUSTIN has been at the heart of Central Texas entrepreneurship for over 27 years!  We
              are focused on a combination of small business and workforce development.  We provide 
              innovative solutions and create financial strength for our clients.  We remain proudly 
              committed to building healthy, sustainable communities.
            </body>
          </Col>
        </Row>
        <Row style = {{textAlign:"center", marginTop:20}} gutter = {[16,16]}>
          <Col span={4} offset={6}>
            <Image 
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h3>Funding</h3>
          </Col>
          <Col span={4}>
            <Image 
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h3>Consulting</h3>
            </Col>
          <Col span={4}>
            <Image 
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h3>Education</h3>
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
            <h4 style = {{marginTop: 50, color:"white"}}>Our Testimonials</h4>
            <h2 style = {{color:"white"}}>What People Say</h2>
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

      <div className="partners" style = {{backgroundColor:"#D9D9D9", height: 600 , textAlign:"center", color:"black", marginTop:100, marginBottom: 100}}>
        <p> Partners</p>
      </div>
      

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

    {/* <div  id="bottomBarContainer" style = {{backgroundColor:"#3D4451", textAlign:"center", color:"white", height: 500}}>
      <Row style = {{marginTop:100, marginBottom: 100}}>
      
          <Col span={3} offset={2}>
          <h1 style= {{color:"white"}}> Home</h1>
            <h1> Quick Link</h1>
            <h1> About Us</h1>
            <h1> Blog Post</h1>
            <h1> Photo Gallery</h1>
          </Col>
          <Col span={3} offset={2}>
            <h1 style= {{color:"white"}}> Get In Touch</h1>
            <h1> Contact Us</h1>
            <h1> Our Services</h1>
          </Col>
          <Col span={3} offset={2}>
            <h1 style= {{color:"white"}}> Address</h1>
            <h1> 2464 Royal Ln. Mesa, New</h1>
            <h1> Jersey 45463</h1>
          </Col>
          <Col span={3} offset={2}>
            <h1 style= {{color:"white"}}> NewsLetter</h1>
          </Col>
        </Row>
      </div> */}

    <BottomBar/>
    </div>

    
    
  )
}
