import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Button, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/Rectangle 3012.png"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

export default function BizInc(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>           
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Women’s Biz Inc.</h2>
            <Row style = {{textAlign:"center", marginTop:50}} gutter ={[30,50]}>
                <Col span={12} offset={6}>
                Women-owned businesses generate $5.3B in sales, employ over 43K workers, and makeup 26 percent of privately held companies in the greater Austin area. BiGAUSTIN stands ready to equip you with the tools needed to start and grow your business through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.
                </Col>
                <Col span={12} offset={6}>
                  <img  
                      height={450}
                      src={require('../images/_Z4A2672 1.png')} 
                      style = {{marginTop:20}}
                  />
                <h1> De J. Lozada - Founder Of Soul Popped Gourmet Popcorn <br></br>
One Day I Just Decided To Do It…
</h1>
                </Col>
                <Col span={4} offset={6}>
                    <div>
                      <img style= {{borderRadius:100}} width="50%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <h2> Business Fundamentals </h2>
                    <body>
                    Includes Business Planning, Marketing, and Finance Fundamentals
                    </body>
                </Col>
                <Col span={4}>
                    <div>
                      <img style= {{borderRadius:100}} width="50%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <h2> Finance and Funding </h2>
                    <body>Includes Funding Solutions, Business Financing, Financial Assistance, Bonding Insurance, and Securing Business Credit and Investment Capital
                    </body>
                </Col>
                <Col span={4}>
                    <div>
                      <img style= {{borderRadius:100}} width="50%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <h2> Other Services </h2>
                    <body>Includes Legal Counseling, Procurement Certification, and a State-Of-The-Art Business Tech Center
                    </body>
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
