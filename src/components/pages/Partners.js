import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Button} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/partners_header.png"

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
                  Working with community-centered organizations, entrepreneurs, small businesses, networks, organizers, funders, and financing partners to support community-led solutions.
                  </body>
                </Col>
                
              </Row>

            <Row style = {{textAlign:"center"}}>
            <Col span={12} offset={6}>
              <Button type = "primary" style = {{marginTop: 40}}>Partner With Us</Button> 
            </Col>
            </Row>
            
            <Row style = {{textAlign:"center", marginTop:50}} align = "middle" gutter = {[20,70]}>
                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/cdfi_fund.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/capital_one_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/economic_development_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/frost_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/dell_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/dla_piper_logo.jpg')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/urban_betty_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/city_of_austin_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/empower_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/ut_austin_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/american_councils_for_international_education_logo.jpg')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/uzbekistan_business_leaders_logo.png')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/department_of_state_usa_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/embassy_of_us_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/yseali_logo.jpg')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/walmart_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/heb_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/eblox_logo.jpg')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/texas_riogrande_legal_aid_logo.jpg')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/greater_texas_credit_union.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/graves_dougherty_hearon_moody_logo.jpg')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/dwyer_murphy_calvert_logo.gif')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/bankcorp_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/travis_county_logo.png')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/google_logo.jpg')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/hp1_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/texas_workforce_commission_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/comerica_bank_logo.jpg')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/ebay_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/hp2_life_logo.png')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/indeed_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/paypal_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/woodforest_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/regions_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/yahoo_logo.png')}
                    />
                </Col>
                <Col span={2}>
                    <img 
                    width={100}
                    src={require('../images/Partners/baker_botts_logo.jpg')}
                    />
                </Col>

                <Col span={2} offset={6}>
                    <img 
                    width={100}
                    src={require('../images/Partners/spectrum_reach_logo.png')}
                    />
                </Col>


            </Row>

            
      </div>

      <BottomBar/>
    </div>

    
    
  )
}
