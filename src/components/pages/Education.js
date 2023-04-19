import React from "react";
import { Typography } from "antd";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import { Button, Col, Row, Image, Carousel, Card } from "antd";
import "./Pages.css";
import "./Home.css";
import headerBackgroundImage from "../images/backgroundheader.png";
import { Link } from "react-router-dom";
import { logos } from "../images/Partners/logos.js";
import { useState } from "react";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  TrendingUpRounded,
} from "@material-ui/icons";
const { Meta } = Card;
const { Title } = Typography;

export default function Home(props) {
  const [logoIndex, setLogoIndex] = useState(0);
  console.log("in home screen");
  const cardStyle = {
    borderRadius: "16px",
    padding: "10%",
    boxShadow: "5px 8px 24px 5px rgb(220,220,220)",
    width: "102%",
    height: "95%",
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        id="new_event_container"
        style={{
          backgroundImage: `url(${headerBackgroundImage})`,
          backgroundColor: "#3D4451",
          textAlign: "center",
          justifyContent: "center",
          height: "600px",
        }}
      >
        <NavBar />
      </div>

      <div style={{ marginTop: 100, marginBottom: 100 }}>
        <Row>
          <Col span={12} offset={6}>
            <h2>The BiGAUSTIN School of Business & Job Skills Development</h2>
            <body>
              BiGAUSTIN delivers innovative solutions and creates financial
              strength for our clients. We are committed to building healthy,
              sustainable communities by providing high-quality training to job
              seekers and entrepreneurs to prepare them for the evolving
              economic landscape in the Central Texas area.
            </body>
          </Col>
        </Row>
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          <Row gutter={[50, 100]}>
            <Col span={6} offset={6}>
              <img
                width={400}
                src={require("../images/businessCapital.png")}
                style={{ marginTop: 20 }}
              />
            </Col>
            <Col span={6}>
              <br></br> <br></br>
              <body>
                The lack of access to high-quality and affordable education is
                one of the primary reasons businesses fail. Therefore, BiGAUSTIN
                takes an underserved business owner’s amazing talent and matches
                it with the resources needed to succeed and become a positive
                economic contributor.
                <br></br> <br></br>
                BiGAUSTIN uses a multi-modal approach to deliver seminars,
                workshops, and intensive business training. Our workshops and
                classes are tailored to each job seeker & business owner’s
                needs. We cover every aspect of job-skills development &
                entrepreneurship by offering a wide range of courses suited to
                your specific needs. This helps you to gain a full understanding
                of your business and industry.
                <br></br> <br></br> <br></br>
                <Button type="primary">Upcoming Sessions</Button>
              </body>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ marginTop: 100, marginBottom: 100 }}>
        <Row>
          <Col span={12} offset={6}>
            <h2>Services</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={[16, 16]}>
          <Col span={5} offset={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/borrowingBasics.png")}
                />
              }
            >
              <Meta
                title="Borrowing Basics"
                description="A thorough evaluation of the funding process. Our Borrowing Basics class will provide you with insider details on what your lending officer is looking for and peek at the loan evaluation process. Topics will also include credit analysis and loan sources for small businesses."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Business+Law+Basics.png")}
                />
              }
            >
              <Meta
                title="Business Law Basics"
                description="Know the law! Experienced attorneys specializing in contract and business law equip our clients with safeguard measures and the legal knowledge of how to utilize contracts that further their business goals. You will leave with a resource packet to get started and the fundamental steps necessary for small business success."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Business+Plan+101.png")}
                />
              }
            >
              <Meta
                title="Business Plan 101"
                description="The number one key to success when owning a business is planning! Our instructor will help you clearly understand the strategic process of developing a business plan. You'll be provided with a template and an in-depth explanation of each section. Our Business Plan 101 instructor is also available to you for counseling should your business plan require further attention."
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={[16, 16]}>
          <Col span={5} offset={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/commercial-leasing.png")}
                />
              }
            >
              <Meta
                title="Commercial Leasing"
                description="Designed to accommodate our clients who require a physical location to operate their business, our commercial leasing class examines how to negotiate the most lucrative deal. A licensed realtor will take the mystery out of leasing and arm each client with awareness to pitfalls and loopholes that new business owners are often vulnerable to."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/ConsultantCorner.png")}
                />
              }
            >
              <Meta
                title="Consultant's Corner"
                description="Speak up and ask for what you want. Consultant's Corner is designed to adjust according to our client's needs. We correspond with experts in specific areas that our clients have requested. One-on-one meetings are then made available for attendees to reserve. If there's a specific topic you'd like to learn more about, please let us know by clicking the 'Let us know' button at the bottom of the page."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Contract+Basics.png")}
                />
              }
            >
              <Meta
                title="Contract Basics"
                description="This course is to help you identify contract terms you need to focus on and show you how to better asses and manage contracts for your business. We will go in-depth on term definitions and how they may change depending on your business."
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={[16, 16]}>
          <Col span={5} offset={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Intellectual+Property.png")}
                />
              }
            >
              <Meta
                title="Intellectual Property"
                description="Intellectual property is a broad term that can become easily convoluted. Know how to protect your ideas. During this class you will learn what intellectual property actually is, what applies to you and your business, and how to protect it. This course covers patents, trademarks, copyrights, and trade secrets."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Intro+to+...+Govt+Contracting.png")}
                />
              }
            >
              <Meta
                title="Introduction To Local, State, And Federal Government Contracting"
                description="Obtaining a contract with the government can be a complex and long process. We'll show you what registrations and certifications your business needs and examine other considerations and precautions you must take when deciding on investing time and effort in the governmental market."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Quickbooks.png")}
                />
              }
            >
              <Meta
                title="Quickbooks"
                description="Find out how to organize your records and financial statements. This two-session workshop will go over sales tax, invoices, sales, deposits, bills, and customer statements. You will leave knowing how to track everything your business has open and running."
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={[16, 16]}>
          <Col span={5} offset={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Start+Smart.png")}
                />
              }
            >
              <Meta
                title="Start Smart"
                description="This 14-session workshop is for any business owner who needs a detailed run-down of everything there is to know about running a business. We provide you with the key essentials and connect you with like-minded entrepreneurs who will also learn the skills needed to succeed in their chosen field."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Using+Credit+Wisely.png")}
                />
              }
            >
              <Meta
                title="Using Credit Wisely"
                description="Our instructor will walk you through an in-depth guide and tell you about what can affect your credit while teaching what you can do to improve your credit. We'll also go over sample letters and what steps to take to remove collections from your report."
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require("../images/t-Web+Smarts.png")}
                />
              }
            >
              <Meta
                title="Web Smarts"
                description="This three session workshop will go over the more technical side of owning a website. Our instructor will teach what steps to take and what to set up for a website in the first session. Then you'll learn how to optimize that website for a search engine and your clients. Finally, we'll go over all you can do to advertise your website online."
              />
            </Card>
          </Col>
        </Row>
      </div>

      <BottomBar />
    </div>
  );
}
