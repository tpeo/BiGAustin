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



export default function StartSmart(props) {

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
            <Grid sx={{ height: "auto", width: "68%", mt: 10, mb: 4 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={12} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.blue1 }}>Start Smart: Launch your Dreams</Typography>
                </Grid>
              </Grid>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={require('../images/services.png')} />
              </div>

            </Grid>
          </Grid>



          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8, mt:4 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ textAlign: "left" }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 35,
                  fontWeight: 500,
                  padding: 0,
                  mb: 4
                }}>
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>The Entrepreneurial Leap </span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 200, mb: 5, color: appTheme.palette.primary.space }}>{homeData[0].about}</Typography>
                <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 200, color: appTheme.palette.primary.space }}>{homeData[0].about}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ textAlign: "left" }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 35,
                  fontWeight: 500,
                  padding: 0,
                  mb: 4
                }}>
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>Introducing Start Smart</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 200, mb: 5, color: appTheme.palette.primary.space }}>{homeData[0].about}</Typography>
                <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 200, color: appTheme.palette.primary.space }}>{homeData[0].about}</Typography>
              </Grid>
            </Grid>
          </Grid>




          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <Typography variant="h1" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 35,
                fontWeight: 500,
                padding: 0,
                mt: 5,
              }}>
                <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>The Entrepreneurial Leap </span>
                <img width={45} src={require('../images/decor.png')} />
              </Typography>
            </Grid>
          </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ mb: 10 }}>



              <Grid container sx={{ justifyContent: "center", width: "100%", mb: -4 }}>

                <CssBaseline />
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        display: "flex",
                        margin:"auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={require('../images/money.jpeg')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          Capital
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          The borrower's equity interest in the business and business loan.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        margin:"auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={require('../images/money.jpeg')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          Capital
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          The borrower's equity interest in the business and business loan.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        margin:"auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={require('../images/money.jpeg')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          Capital
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          The borrower's equity interest in the business and business loan.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>


                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        boxShadow: "none",
                        borderRadius: 1,
                        margin:"auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                        <img src={require('../images/money.jpeg')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                        >
                          Capital
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                        >
                          The borrower's equity interest in the business and business loan.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>



                </Grid>
              </Grid>







              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}

              >
                <Grid container sx={{ width: "80%" }}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 300,
                          width: 250,
                          boxShadow: "none",
                          borderRadius: 1,
                          margin:"auto",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={require('../images/money.jpeg')} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                          >
                            Capital
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                          >
                            The borrower's equity interest in the business and business loan.
                          </Typography>
                        </div>
                      </Card>
                    </Grid>

                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 300,
                          width: 250,
                          boxShadow: "none",
                          borderRadius: 1,
                          margin:"auto",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={require('../images/money.jpeg')} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                          >
                            Capital
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                          >
                            The borrower's equity interest in the business and business loan.
                          </Typography>
                        </div>
                      </Card>
                    </Grid>

                    <Grid item xs>
                      <Card
                        sx={{
                          backgroundColor: appTheme.palette.primary.white,
                          height: 300,
                          width: 250,
                          boxShadow: "none",
                          borderRadius: 1,
                          display: "flex",
                          margin:"auto",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >

                        <div className="circular-image2" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                          <img src={require('../images/money.jpeg')} />
                        </div>

                        <div >
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 1 }}
                          >
                            Capital
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                          >
                            The borrower's equity interest in the business and business loan.
                          </Typography>
                        </div>
                      </Card>
                    </Grid>




                  </Grid>
                </Grid>
              </Grid>



            </Grid>
          </Grid>



          <Grid sx={{ height: "auto", mt: 2, backgroundColor: appTheme.palette.primary.blue1 }}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center", mt: 5, mb: 5 }}>
                <Typography variant="h1" sx={{ fontSize: 25, color: appTheme.palette.primary.white }}>Meet your Instructor</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mb: 14, paddingBottom: 7, backgroundColor: appTheme.palette.primary.blue1 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "95%" }}>
              <Grid item md={4} xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid sx={{ textAlign: "center" }}>
                  <div className="circular-image" >
                    <img
                      src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                      alt="Logo"
                    ></img>
                  </div>
                </Grid>
                <Grid>
                  <Typography variant="h1" sx={{ textAlign: "center", fontSize: 21, fontWeight: 500, color: appTheme.palette.primary.white, mb: -1 }}>Daniel Frunza</Typography>
                  <Typography variant="h2" sx={{ textAlign: "center", fontSize: 18, fontWeight: 400, color: appTheme.palette.primary.white }}>Business Plan Maestro</Typography>
                  <Typography variant="h2" sx={{ textAlign: "center", fontSize: 18, fontWeight: 400, color: appTheme.palette.primary.white }}>Consulting Expert</Typography>
                  <Typography variant="h2" sx={{ textAlign: "center", fontSize: 18, fontWeight: 400, color: appTheme.palette.primary.white }}>Volunteer @ BigAUSTIN</Typography>

                </Grid>
              </Grid>


              <Grid item md={5} xs={12} >
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                  <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white }}>“Coffee Talk” is a series of events that ignites the spirit of women over conversation and coffee. Women learn how to cultivate meaningful relationships that are vital to successful lifestyles and prosperous businesses.</Typography>
                  <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white }}>BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>
                  <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white }}>BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid sx={{
            mt: 10, 
            mb: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Grid container sx={{ width: "70%" }}>
              <CssBaseline />
              <Grid container sx={{}}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 35,
                  fontWeight: 500,
                  padding: 0,
                  mb: 4
                }}>
                  <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>FAQ</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>

              </Grid>

                <Typography variant="h2" sx={{ textAlign: "left", fontSize: 24, fontFamily: "DM Serif Display", fontWeight: 500, mb: 2, color: appTheme.palette.primary.space }}>How do I join the virtual workshop?</Typography>
                <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 200, color: appTheme.palette.primary.space, mb: 3 }}>Once you register for the event you will receive an email with details to access the webinar.
                  The invitation email or message will include a link to the meeting.</Typography>

            </Grid>
          </Grid>



          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
