import React from "react";
import { Typography } from 'antd';
import BottomBar from "../../bottomBar/bottomBar.js";
import NavBar from "../../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card} from 'antd';
import ".././Pages.css"
import headerBackgroundImage from "../../images/backgroundheader2.png"

const { Title} = Typography;
const {Meta}= Card;

export default function JobSkills(props) {
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
                src={require('../../images/jobSkills1.jpg')} 
                style = {{marginTop:20}}
                />
            </Col>
            <Col span={9}>
                <br></br>
                <h2>Job Skills Program</h2>
                <body>
                BiGAUSTIN is offering classes in two of the fastest growing industries: IT and Construction. As Austin grows, so does the demand for professionals in these industries.
                <br></br><br></br>
                BiGAUSTIN is offering this opportunity to qualified students at no cost! In addition to these courses, we are offering assistance with job placement with our extensive group of partner companies, which are ready and willing to hire graduates of the program.
                <br></br><br></br>
                Pre-qualifications: <br></br>
                1. Must reside in Austin city limits<br></br>
                2. Meet income guidelines. Example if you are in a household of 3 making less than $56,050 would pre-qualify for a scholarship.
                </body>
            </Col>
          </Row>
          <Row style={{padding: "70px", backgroundColor: "#d8e8df", textAlign: "center"}}>
          <Col span={5} offset={6}>
            </Col>
            <h2> Our Classes</h2>
        <Row style = {{marginTop:20}} gutter = {[16,16]}>
          <Col span={5} offset={6}>
          <Card
            style={{backgroundColor: '#d8e8df', border: 0 }}
            bordered={false}
            hoverable
            cover={<img alt="example" src={require('../../images/jobSkills2.jpg')} />}
            >
            <h4>Construction</h4>
            <p5> - NCCER Core Curriculum  <br></br>      
            - General Labor (Concrete, Sheetrock & Painting) <br></br>    

            - OSHA Certification <br></br>    

            - Cost Estimation and Blue Print Reading<br></br>     

            - Jolt Readiness<br></br>    

            </p5>
            <br></br><br></br>
            <Button type = "primary">Register</Button>
            </Card>
          </Col>
          <Col span={5} offset={3} >
          <Card
            style={{backgroundColor: '#d8e8df', border: 0 }}
            bordered={false}
            hoverable
            cover={<img alt="example" src={require('../../images/jobSkills3.jpg')} />}
            >
            <h4>Information Technology</h4>
            <p5> - Development Program <br></br>
                - 9-Week Course <br></br>
                - Computer Fundamentals <br></br>
                - A+ Certification <br></br>
                - Javascript/HTML <br></br>
                - Job Readiness <br></br>
                - Job Placement Assistance <br></br> 

            </p5>
            <br></br><br></br>
            <Button type = "primary">Register</Button>
            </Card>
            </Col>
        </Row>

          </Row>
        </Row>
      </div>
    <BottomBar/>
    </div>

    
    
  )
}
