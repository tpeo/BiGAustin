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



export default function Services(props) {

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
          
          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "55%", mt: 10, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.green1 }}>Services</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 8 }}>We are ready to help make your business dreams a reality. Women-owned businesses are 26 percent of the greater Austin areas privately held firms. They generate $5.3 billion in sales and employ over 43 thousand workers. BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>

              <Grid container justifyContent="center" alignItems="center">
                <div className="programs-image-container" style={{ width: "80%", display: "flex", justifyContent: "center" }}>
                  <img src={require('../images/services.png')} />
                </div>
              </Grid>


            </Grid>
          </Grid>


          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            
            sx={{mt: 18, mb: 20, margin:"auto"}}
          >
            <Grid container justifyContent="center" sx={{ width: "70%" }}>

              <CssBaseline />

              <Grid container spacing={2} sx={{ mt: 5 }}>

                <Grid item xs >
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 290,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      width: 250,
                      borderRadius: 1,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                      <img width={70} src={require('../images/volunteers.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                      >
                        Lending
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ textAlign: "center", fontSize: 18, mb: 1, width: 220 }}
                      >
                        Micro-loans of up to $50,000 to help grow your business
                      </Typography>
                    </div>


                    <Grid container sx={{ mt: 3 }}>
                      <Grid item xs={10} md={10}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500, ml: 8,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700
                            },
                          }}>
                          Learn More
                        </Button>
                      </Grid>

                      <Grid item xs={2} md={2} sx={{ textAlign: 'right', paddingRight: 0, mt: 1 }}>
                        <img width={35} src={require('../images/decor.png')} />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>


                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 290,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      width: 250,
                      margin: "auto",
                      borderRadius: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                      <img width={70} src={require('../images/volunteers.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                      >
                        Lending
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ textAlign: "center", fontSize: 18, mb: 1, width: 220 }}
                      >
                        Micro-loans of up to $50,000 to help grow your business
                      </Typography>
                    </div>


                    <Grid container sx={{ mt: 3 }}>
                      <Grid item xs={10} md={10}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500, ml: 8,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700
                            },
                          }}>
                          Learn More
                        </Button>
                      </Grid>

                      <Grid item xs={2} md={2} sx={{ textAlign: 'right', paddingRight: 0, mt: 1 }}>
                        <img width={35} src={require('../images/decor.png')} />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>

                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      height: 290,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      width: 250,
                      borderRadius: 1,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                      <img width={70} src={require('../images/volunteers.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1 }}
                      >
                        Lending
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ textAlign: "center", fontSize: 18, mb: 1, width: 220 }}
                      >
                        Micro-loans of up to $50,000 to help grow your business
                      </Typography>
                    </div>


                    <Grid container sx={{ mt: 3 }}>
                      <Grid item xs={10} md={10}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500, ml: 8,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700
                            },
                          }}>
                          Learn More
                        </Button>
                      </Grid>

                      <Grid item xs={2} md={2} sx={{ textAlign: 'right', paddingRight: 0, mt: 1 }}>
                        <img width={35} src={require('../images/decor.png')} />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>






          <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 9, mb: 25 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "90%" }}>
              <Grid item md={4} xs={12} >
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left", padding: 5 }}>
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 30,
                    fontWeight: 500,
                    padding: 0,
                    mb: 4
                  }}>
                    <span style={{ paddingRight: 17, fontSize: 32, color: appTheme.palette.primary.green1 }}>Our Mission</span>
                    <img width={40} src={require('../images/decor.png')} />
                  </Typography>
                  <Typography variant="h2" sx={{ fontSize: 23, fontWeight: 200, mb: 3, color: appTheme.palette.primary.black }}>We are ready to help make your business dreams a reality. Women-owned businesses are 26 percent of the greater Austin areas privately held firms. They generate $5.3 billion in sales and employ over 43 thousand workers. BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>

                  <Button
                    width="150"
                    height="20"
                    variant="contained"
                    disableElevation
                    sx={{
                      color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                      backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                      '&:hover': {
                        fontWeight: 700
                      },
                    }}>
                    Learn More
                  </Button>

                </Grid>
              </Grid>

              <Grid item md={4} xs={12} sx={{ display: 'flex', padding: 3, justifyContent: 'center', alignItems: 'center' }}>
                <img className="squareImage"
                  src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                  alt="Logo"
                  style={{
                    top: 0,
                    left: 0,
                    width: 350,
                    height: 350,
                    margin: "auto",
                    borderRadius: '15px',
                    boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                  }}
                ></img>
              </Grid>
            </Grid>
          </Grid>






          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
