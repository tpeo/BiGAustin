import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Image, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

export default function DreamTeam(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Dream Team </h2>

            <Row style = {{textAlign:"center", marginTop:50}}>
                <Col span={12} offset={6}>
                  <body>
                  "Individual commitment to a group effort--that is what makes a team work, a company work, a society work, a civilization work." --Vince Lombardi<br /> 
                  <br/>
                  &nbsp;Empowering small business through education and investment, igniting community growth. <br /> 
                  <br/> 
                  &nbsp;Our continued success could not be possible without the support of our staff, on-site contractors, as well as our volunteer teachers, mentors, interns and volunteers, who, by their commitment to our mission, help Central Texas businesses thrive every day.  
                  </body>
                </Col>
              </Row>
            
            <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[16,70]}>
                {/* offset=6 */}
                <Col span={2} offset={3}>
                    <img 
                    width={300}
                    src={require('../images/Stacy Rhone.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Stacy Dukes-Rhone</h2>
                    <body>CEO/ED</body>
                </Col>
                {/* offset=2 */}
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Stephanie Douglass.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Stephanie Douglass</h2>
                    <body>COO</body>
                </Col>
                <Col span={2} offset={1}>
                    <img 
                    width={300}
                    src={require('../images/Melissa Hepner.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Melissa Hepner</h2>
                    <body>Associate Director of Contracts, Compliance & Strategic Initiatives</body>
                </Col>

                {/* offset=6 */}
                <Col span={2} offset={3}>
                    <img 
                    width={300}
                    src={require('../images/Andronn Hamlett.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Andronn Hamlett</h2>
                    <body>Programs</body>
                </Col>
                {/* offset=2 */}
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Terrell Hill.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Terrell Hill</h2>
                    <body>Leading</body>
                </Col>
                <Col span={2} offset={1}>
                    <img 
                    width={300}
                    src={require('../images/Corey Tabor.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Corey Tabor</h2>
                    <body>Senior Business Development Consultant</body>
                </Col>

                  {/* offset=6 */}
                  <Col span={2} offset={3}>
                    <img 
                    width={300}
                    src={require('../images/Daniel Frunza.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20}}>Daniel Frunza</h2>
                    <body>BiG Austin Volunteer</body>
                </Col>
                {/* offset=2 */}
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Steve Foster.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Steve Foster</h2>
                    <body>General Counsel</body>
                </Col>
                <Col span={2} offset={1}>
                    <img 
                    width={300}
                    src={require('../images/Eric Anderson.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20}}>Eric Anderson</h2>
                    <body>Financial Consultant</body>
                </Col>
            </Row>
      </div>

      <div style = {{backgroundColor:"#3D4451", textAlign:"center", marginTop:100, color:"white"}}>
        
        <Row style = {{textAlign:"center", marginTop:50}}>
            <Col span={12} offset={6}>
              <h2 style = {{marginTop:50, color: "white"}}> Board of Directors </h2>
              <body style = {{color: "white"}}>
              BiGAUSTIN values both cultural and economic diversity. The Board of Directors represents the diversity of the community we serve, and contributes a depth and breadth of business and financing experience. The Board consists of small business owners, corporate representatives, attorneys, bankers and small business owners.  
              </body>
            </Col>
          </Row>

        <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[16,70]}>
        <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src={require('../images/melvin+wrenn-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20, color: "white"}}>Melvin Wrenn</h2>
                    <body style = {{color: "white"}}>Chairman of the board</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Donna+Myers-BiGAUSTIN.png')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20, color: "white"}}>Donna Myers</h2>
                  <body style = {{color: "white"}}>Vice Chair</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}linda
                    src={require('../images/linda+young-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20, color: "white"}}>Linda Young</h2>
                    <body style = {{color: "white"}}>Secretary</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/manuelmorin-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20, color: "white"}}>Manuel Morin</h2>
                  <body style = {{color: "white"}}>Treasurer</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src={require('../images/Stacy Rhone.jpeg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20, color: "white"}}>Stacy Rhone</h2>
                    <body style = {{color: "white"}}>Member</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Todd+Reed-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20, color: "white"}}>Todd Reed</h2>
                  <body style = {{color: "white"}}>Member</body>
                </Col>


                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src={require('../images/AlfredJackson_BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20, color: "white"}}>Alfred Jackson</h2>
                    <body style = {{color: "white"}}>Development Committee Chair</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Bentley-Harris-Catherine-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20, color: "white"}}>Catherine Bentley Harris</h2>
                  <body style = {{color: "white"}}>Member</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src={require('../images/mark+hodges-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20, color: "white"}}>Mark Hodges</h2>
                    <body style = {{color: "white"}}>Member</body>
                </Col>
                <Col span={2} offset={2}>
                    <img 
                    width={300}
                    src={require('../images/Beverly+Watts+Davis-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3}>
                  <h2 style = {{fontSize: 20, color: "white"}}>Beverly Watts Davis</h2>
                  <body style = {{color: "white"}}>Member</body>
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={300}
                    src={require('../images/dumarsais-simeus-BiGAUSTIN.jpg')}
                    style = {{borderRadius:"50%"}}
                    />
                </Col>
                <Col span={3} style = {{alignItems: "center"}}>
                    <h2 style = {{fontSize: 20, color: "white"}}>Dumas Simeus</h2>
                    <body style = {{color: "white"}}>Member</body>
                </Col>

          </Row>
         <br/><br/>
      </div>
      <BottomBar/>
    </div> 
  )
}
