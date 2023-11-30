import React, { useState, useEffect } from "react";
import {
  AppBar,
  Select,
  Typography,
  CssBaseline,
  Card,
  CardContent,
  Container,
  InputLabel,
  IconButton,
  MenuItem,
  FormControl,
  Paper,
  TextField,
  Toolbar,
  Avatar,
  Button,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material";
import BottomBar from "../bottomBar/bottomBar.js";
import NavBar from "../navBar/navBar.js";
import { Col, Row } from 'antd';
import "../styles.css";
import { Image, Carousel, Progress } from 'antd';
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from "/Users/aarushichitagi/Desktop/BiGAustin/src/client.js";
import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image



const { Title } = Typography;


// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <div className="prev-arrow" onClick={onClick}>
    <img src={ArrowLeftImage} alt="Previous" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="next-arrow" onClick={onClick}>
    <img src={ArrowRightImage} alt="Next" />
  </div>
);



export default function About(props) {

  const [homeData, setHome] = useState(null);



  useEffect(() => {
    createClient.fetch(
      `*[_type == "home"]{
      mainHeading,
      mainBlurb,
      about,
      peopleRised,
      volunteers,
      poorPeopleSaved,
      countryMembers,
      funding,
      consulting,
      education,        
      testimonials
    }`
    )
      .then(
        (data) => setHome(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {homeData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${headerBackgroundImage})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid sx={{ height: "auto", mt: 10, mb: 7 }}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                <Typography variant="h1" sx={{ fontSize: 40, mb: 3 }}>Impact we create</Typography>
              </Grid>
            </Grid>
            <Typography variant="h2" sx={{ fontSize: 23, textAlign: "center" }}>Demographical Description</Typography>
          </Grid>



          <div style={{ marginBottom: 50 }}>
            <Row gutter={[0, 25]}>
              <Col span={3} offset={5}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 400 }}> Annual Education <br></br> Hours </Typography>
              </Col>
              <Col span={11}>
                <Progress percent={97} format={() => '5343'} style={{ fontFamily: "League Spartan" }} strokeColor={{ '0%': appTheme.palette.primary.green1, '100%': appTheme.palette.primary.green1 }} trailColor="transparent" />
              </Col>


              <Col span={3} offset={5}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 400 }}> Annual Clients <br></br> Served </Typography>
              </Col>
              <Col span={10}>
                <Progress percent={65} format={() => '4212'} style={{ fontFamily: "League Spartan" }} strokeColor={{ '0%': appTheme.palette.primary.green1, '100%': appTheme.palette.primary.green1 }} trailColor="transparent" />
              </Col>

              <Col span={3} offset={5}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 400 }}> Total Consulting <br></br> Hours </Typography>
              </Col>
              <Col span={10}>
                <Progress percent={92} format={() => '5092'} style={{ fontFamily: "League Spartan" }} strokeColor={{ '0%': appTheme.palette.primary.green1, '100%': appTheme.palette.primary.green1 }} trailColor="transparent" />
              </Col>
            </Row>
          </div>

          <Grid sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid container spacing={2} sx={{ mt: 5, width: "80%", justifyContent: "center", alignItems: "center" }}>
              <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Card
                  sx={{
                    height: 230,
                    width: 180,
                    borderRadius: 3,
                    display: "flex",
                    boxShadow: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <div style={{ "margin-bottom": "10px" }}>
                    <img width={200} src={require('../images/piechart.png')} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2 }}
                    >
                      Ethnicity
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 500, fontSize: 18, mb: 1 }}
                    >
                      volunteer
                    </Typography>
                  </div>
                </Card>
              </Grid>

              <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Card
                  sx={{
                    height: 230,
                    width: 180,
                    borderRadius: 3,
                    display: "flex",
                    boxShadow: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <div style={{ "margin-bottom": "10px" }}>
                    <img width={200} src={require('../images/piechart.png')} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2 }}
                    >
                      Ethnicity
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 500, fontSize: 18, mb: 1 }}
                    >
                      volunteer
                    </Typography>
                  </div>
                </Card>
              </Grid>


              <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Card
                  sx={{
                    height: 230,
                    width: 180,
                    borderRadius: 3,
                    display: "flex",
                    boxShadow: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <div style={{ "margin-bottom": "10px" }}>
                    <img width={200} src={require('../images/piechart.png')} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2 }}
                    >
                      Ethnicity
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 500, fontSize: 18, mb: 1 }}
                    >
                      volunteer
                    </Typography>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>




          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.blue1, textAlign: "center", color: "white", marginTop: 100, marginBottom: 90 }}>
            <Col span={12} offset={6}>
              {/* <h4 style = {{marginTop: 50, color:"white"}}>Our Testimonials</h4> */}
              <h2 style={{ color: "white", paddingTop: 50, paddingBottom: 20 }}>Testimonials</h2>

              <Carousel style={{ height: 480 }} arrows prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                {
                  homeData[0].testimonials.map((item, i) => (
                    // <Row justify="space-evenly">
                    //   <Col span={12} >
                    //     <img width={200} src='https://cdn.sanity.io/images/39eecjq4/production/220968489c85d6cb12619d0c07d5f6e245869d9b-428x429.png' />

                    //     <Typography variant="h1" sx={{fontSize: 15, color: appTheme.palette.primary.white}}>Mario Carlin</Typography>
                    //     <Typography variant="h2" sx={{fontSize: 15, color: appTheme.palette.primary.white}}>CEO, Mario Carlin Management, LLC</Typography>
                    //   </Col>

                    //   <Col span={12}>
                    //     <Typography variant="h2" sx={{fontSize: 15, color: appTheme.palette.primary.white}}>I heard about BiGAUSTIN in 2008 from the Texas Business Opportunity and Development program. They walked me through the whole process. They assisted me with consulting, education, networking and funding. BiGAUSTIN provides experts that really understand small business and they enabled me to reach my highest potential.</Typography>
                    //   </Col>
                    // </Row>
                    // <Grid container>

                    <Grid>
                      <Grid item sx={{ textAlign: "center", mb: 3 }} xs={6}>
                        <div style={{ textAlign: "center" }}>
                          <img width={150} style={{ margin: "auto" }} src='https://cdn.sanity.io/images/39eecjq4/production/220968489c85d6cb12619d0c07d5f6e245869d9b-428x429.png' />
                        </div>
                        <Typography variant="h1" sx={{ mb: -1, fontSize: 20, color: appTheme.palette.primary.white }}>Mario Carlin</Typography>
                        <Typography variant="h2" sx={{ fontSize: 17, color: appTheme.palette.primary.white, }}>CEO, Mario Carlin Management, LLC</Typography>
                      </Grid>

                      <Grid xs={6} width="80%" style={{ margin: "auto" }}>
                        <Typography variant="h2" sx={{ fontSize: 19, color: appTheme.palette.primary.white }}>I heard about BiGAUSTIN in 2008 from the Texas Business Opportunity and Development program. They walked me through the whole process. They assisted me with consulting, education, networking and funding. BiGAUSTIN provides experts that really understand small business and they enabled me to reach my highest potential.</Typography>
                      </Grid>
                    </Grid>
                  ))
                }
              </Carousel>

              {/* <Carousel style = {{height:"400px"}} arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
                    <div>
                      <Image
                        width={100}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style = {{borderRadius:"50%"}}
                      />
                      <h1 style = {{fontSize: 18, color:"white"}}>Cameron Williamson</h1>
                      <h4 style = {{color:"white"}}>Founder</h4>
                      <body style = {{color:"white"}}>
                      Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California <br/>
                      halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket <br/>
                      danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. <br/>
                      </body>
                    </div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                  </Carousel> */}


            </Col>
          </div>







          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
