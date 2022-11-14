import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Button, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

export default function Services(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Our Services</h2>
            <Row style = {{textAlign:"center", marginTop:50}} gutter ={[30,50]}>
                <Col span={12} offset={6}>
                  We are ready to help make your business dreams a reality. 
                  Women-owned businesses are 26 percent of the greater Austin areas privately held firms. 
                  They generate $5.3 billion in sales and employ over 43 thousand workers. 
                  BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. 
                  We accomplish this together through education, consulting, round-table discussions, 
                  innovative networking opportunities, and lending programs.
                </Col>
                <Col span={12} offset={6}>
                  <img  
                      height={450}
                      src={require('../images/backgroundheader2.png')} 
                      style = {{marginTop:20}}
                  />
                </Col>
                <Col span={4} offset={6}>
                  <Card>
                    <div>
                      <img style= {{borderRadius:100}} width="50%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <h2> Funding </h2>
                    <body>
                      Lorem ipsum dolor sit amet, consetetur sadipscing
                      sed diam nonumy  tempor invidunt ut labore et
                      magna aliquyam erat, sed diam voluptua.....
                    </body>
                  </Card>
                </Col>
                <Col span={4}>
                  <Card>
                    <div>
                      <img style= {{borderRadius:100}} width="50%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <h2> Consulting </h2>
                    <body>Lorem ipsum dolor sit amet, consetetur sadipscing
                        sed diam nonumy  tempor invidunt ut labore et
                        magna aliquyam erat, sed diam voluptua.....
                    </body>
                  </Card>
                </Col>
                <Col span={4}>
                  <Card>
                    <div>
                      <img style= {{borderRadius:100}} width="50%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <h2> Education </h2>
                    <body>Lorem ipsum dolor sit amet, consetetur sadipscing
                        sed diam nonumy  tempor invidunt ut labore et
                        magna aliquyam erat, sed diam voluptua.....
                    </body>
                  </Card>
                </Col>
            </Row>
      </div>

      <div style = {{marginTop:100, marginBottom: 100, textAlign:"left"}}>
        <Row style = {{textAlign:"left", marginTop:50}} gutter ={[30,50]}>
          <Col span={6} offset={6}>
            <h2> Women's Biz Inc </h2>
            <body> 
              We are ready to help make your business dreams a reality. 
              Women-owned businesses are 26 percent of the greater Austin areas privately held firms. 
              They generate $5.3 billion in sales and employ over 43 thousand workers. 
              BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. 
              We accomplish this together through education, consulting, round-table discussions, 
              innovative networking opportunities, and lending programs.
              <br/><br/>
              <Button type = "primary" style = {{color:"white"}}> Learn More </Button>
            </body>
            
          </Col>
          <Col span={6}>
            <img  
                height={450}
                src={require('../images/chelleneffe.png')} 
                style = {{marginTop:20}}
            />
          </Col>
        </Row>
      </div>
      <BottomBar/>
    </div>

    
    
  )
}
