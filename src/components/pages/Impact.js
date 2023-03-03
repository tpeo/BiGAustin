import React from "react";
import NavBar from "../navBar/navBar.js";
import BottomBar from "../bottomBar/bottomBar.js";
import {Col, Row, Image, Carousel, Card, Progress} from 'antd';
import "./Pages.css"
import headerBackgroundImage from "../images/impact_header.jpg"
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export const dataGender =  {
  labels: ['Women', 'Men'],
  animation: {
    animateScale: true
  },
  datasets: [
    {
      data: [83, 17],
      backgroundColor: [
        '#D0E8FF',
        '#A9F4D0',
      ],
      borderColor: [
        '#D0E8FF',
        '#A9F4D0',
      ],
      borderWidth: 1,
    },
  ],
};

export const dataRace =  {
  labels: ['African-American', 'Other'],
  animation: {
    animateScale: true
  },
  datasets: [
    {
      data: [40, 60],
      backgroundColor: [
        '#D0E8FF',
        '#A9F4D0',
      ],
      borderColor: [
        '#D0E8FF',
        '#A9F4D0',
      ],
      borderWidth: 1,
    },
  ],
};

export const dataEthnicity =  {
  labels: ['Hispanic', 'Non-hispanic'],
  animation: {
    animateScale: true
  },
  datasets: [
    {
      data: [71, 29],
      backgroundColor: [
        '#D0E8FF',
        '#A9F4D0',
      ],
      borderColor: [
        '#D0E8FF',
        '#A9F4D0',
      ],
      borderWidth: 1,
    },
  ],
};

var options = {
  animation: {
    // loop: true,
    // delay: 100,
    duration: 5000
},
  plugins: {
      legend: {
          display: true,
          position: 'bottom',
          maxHeight: 100
      },
  },
  cutout: "50%"
} 

const labels = ["Annual Education Hours", "Total Consulting Hours", "Annual Clients Served"]

export const optionsBar = {
  animation: {
    // loop: true,
    // delay: 100,
    duration: 5000
  },
  barThickness: 15,
  scales: {
    x: {
      ticks: {
        tickWidth: 10,
        display: false,
      },
      grid: {
        lineWidth: 0
      }
    },
    y: {
      ticks: {
        tickWidth: 10,
        callback: function(value, index, ticks) {
          return labels[value];
        }
      },
      grid: {
        lineWidth: 0
      }
    }
  },
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display:false,
    },
    title: {
      display: false,
      text: 'Demographical Description',
    },
  },
};

export const dataBar = {
  labels: ["Annual Education Hours", "Total Consulting Hours", "Annual Clients Served"],
  datasets: [
    {
      labels: ["Annual Education Hours", "Total Consulting Hours", "Annual Clients Served"],
      data: [5343,5092,4212],
      borderColor: '#88BEB7',
      backgroundColor: '#88BEB7',
    }
  ],
};

export default function Impact(props) {
  return (
    <div>
        <div id="new_event_container" style = {{backgroundImage: `url(${headerBackgroundImage})`, backgroundColor:"#3D4451", textAlign:"center", justifyContent:"center", height: "600px"}}>
            <NavBar/>       
        </div>
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
        <h2> Demographical Description </h2>
         <Col span={12} offset={6}>
          <Bar options={optionsBar} data={dataBar} />
         </Col>
         </div>
        
        <div style = {{marginTop:100, marginBottom: 100, textAlign:"center"}}>
            <h2> Targeted Audience </h2>
            <Row style = {{textAlign:"center", marginTop:50, marginLeft: 45}}>
                <Col span={3} offset={6} >
                    <Doughnut data={dataGender} options={options}/> 
                    <h3>Gender</h3>
                </Col>
                <Col span={3} offset={1}>
                    <Doughnut data={dataEthnicity} options={options}/> 
                    <h3>Ethnicity</h3>
                </Col>
                <Col span={3} offset={1}>
                    <Doughnut data={dataRace} options={options}/> 
                    <h3>Race</h3>
                </Col>
            </Row>
      </div>

      <div style = {{marginTop:100, marginBottom: 100}}>
        {/* <Row gutter = {[16,40]}>
            <Col span={2} offset={6}>
                Annual Education Hours
            </Col>
            <Col span={10}>
                <Progress percent={30} format={() => '5343'} strokeColor={{'0%': '#88BEB7','100%': '#63A697'}} trailColor = "transparent" status="active"/>
            </Col>
        

            <Col span={2} offset={6}>
                Annual Clients Served
            </Col>
            <Col span={10}>
                <Progress percent={99} format={() => '4212'} strokeColor={{'0%': '#88BEB7','100%': '#63A697'}} trailColor = "transparent" status="active"/>
            </Col>

            <Col span={2} offset={6}>
                Total Consulting Hours
            </Col>
            <Col span={10}>
                <Progress percent={55} format={() => '5092'} strokeColor={{'0%': '#88BEB7','100%': '#63A697'}} trailColor = "transparent" status="active"/>
            </Col>
        </Row> */}
      </div>

      <div>
        <Row>
            <Col span={6} offset={6}>
                <h2> Chelle Neffe - Urban Betty</h2>
                <body>
                Chelle Neff has been a leader in the U.S. salon industry since founding Urban Betty in 2005 and 
                has more than 20 years of experience creating innovative practices in the salon and beauty worlds. 
                Neff has successfully grown Urban Betty’s revenue year after year and today has two salon companies 
                that house more than 70 employees. For four years consecutively, Inc. 5000 named Urban Betty as one 
                of the fastest-growing privately held companies.  
                <br/><br/>
                Due to its continued success, the salon is expanding and opening a third location in 2022 and launching 
                an Urban Betty product line in the fall of 2021. 
                <br/><br/>
                READ ARTICLE HERE:  https://bit.ly/2ZvSyFa
                </body>
            </Col>
            <Col span={5} offset={1}>
                <img  
                    width={450}
                    src={require('../images/chelleneffe.png')} 
                    style = {{marginTop:20}}
                />
            </Col>
        </Row>
      </div>

      <div className="testimonials" style = {{backgroundColor:"#3D4451", textAlign:"center", color:"white", marginTop:100}}>
      <Row>
          <Col span={12} offset={6}>
            <h2 style = {{color:"white"}}>Videos</h2>
            <Carousel style = {{height:"400px"}} arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
              <div>
                <Image
                  width={300}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </Col>
        </Row>
      </div>
      <BottomBar/>
    </div>

    
    
  )
}
