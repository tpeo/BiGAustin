import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Button} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"

export default function Partners(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Partners</h2>

            <Row style = {{textAlign:"center", marginTop:50}}>
                <Col span={12} offset={6}>
                  <body>
                    BiGAUSTIN values both cultural and economic diversity. 
                    The Board of Directors represents the diversity of the community we serve, and contributes a depth and 
                    breadth of business and financing experience. The Board consists of small business owners, corporate 
                    representatives, attorneys, bankers and small business owners.
                  </body>
                </Col>
              </Row>
            
            <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[20,70]}>
                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/helpicon.png')}
                    />
                </Col>


            </Row>

            <Button type = "primary" style = {{marginTop: 100}}>Partner With Us</Button> 
      </div>

      <BottomBar/>
    </div>

    
    
  )
}
