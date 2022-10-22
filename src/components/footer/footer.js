import React from "react";
import { Button, Col, Row, Input} from 'antd';

export default function Footer() {
  return (
    <div style = {{backgroundColor: "#22262F", height:"300px"}}>
    <Row>
      <Col span={3} offset={4}>
        <h3 style = {{color: "white"}}>10k</h3>
        <h2 style = {{color: "white", fontSize: 20}}>Worldwide Clients Already Connected</h2>
      </Col>
      <Col span={3}>
        <h2 style = {{color: "white", fontSize: 15, paddingTop:30}}>Quick Links</h2>
        <body style = {{color: "white"}}> 
        Home <br/>
        About Us <br/>
        Blog Post <br/>
        Photo Gallery 
        </body>
      </Col>
      <Col span={3}>
      <h2 style = {{color: "white", fontSize: 15, paddingTop:30}}>Get In Touch</h2>
        <body style = {{color: "white"}}> 
        Contact Us<br/>
        Our Services <br/>
        </body>
      </Col>
      <Col span={3}>
      <h2 style = {{color: "white", fontSize: 15, paddingTop:30}}>Address</h2>
        <body style = {{color: "white"}}> 
        2464 Royal Ln. Mesa, New Jersey 45463
        </body>
      </Col>
      <Col span={6}>
        <h2 style = {{color: "white", fontSize: 15, paddingTop:30}}>Newsletter</h2>
        <Input.Group compact>
          <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Enter your email" />
          <Button type="primary" style={{height:"auto"}}>Subscribe</Button>
        </Input.Group>
      </Col>
    </Row>
  </div>
  );
}
