import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Button, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

export default function Workshops(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Workshops </h2>
            <Row style = {{textAlign:"center", marginTop:50}} gutter ={[30,50]}>
                <Col span={12} offset={6}>
                  We are ready to help make your business dreams a reality. 
                  Women-owned businesses are 26 percent of the greater Austin areas privately held firms. 
                  They generate $5.3 billion in sales and employ over 43 thousand workers. 
                  BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. 
                  We accomplish this together through education, consulting, round-table discussions, 
                  innovative networking opportunities, and lending programs.
                </Col>
            </Row>
            <Row style = {{textAlign:"left", marginTop:50}} gutter ={[10,50]}>
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
                      <Button type = "primary" style = {{backgroundColor: "#219D80"}}>View Event</Button>
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
                      <Button type = "primary" style = {{backgroundColor: "#219D80"}}>View Event</Button>
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
                      <Button type = "primary" style = {{backgroundColor: "#219D80"}}>View Event</Button>
                    </div>
                  </Card>
                </Col>

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
                      <Button type = "primary" style = {{backgroundColor: "#219D80"}}>View Event</Button>
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
                      <Button type = "primary" style = {{backgroundColor: "#219D80"}}>View Event</Button>
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
                      <Button type = "primary" style = {{backgroundColor: "#219D80"}}>View Event</Button>
                    </div>
                  </Card>
                </Col>
            </Row>
      </div>
      <BottomBar/>
    </div>

    
    
  )
}
