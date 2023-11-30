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



export default function RiseThrive(props) {

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
            <Grid sx={{ height: "auto", width: "48%", mt: 10, mb: 4 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={12} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.blue1 }}>Rise & Thrive</Typography>
                </Grid>
              </Grid>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={require('../images/services.png')} />
              </div>

            </Grid>
          </Grid>



          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{mt: 4, mb: 8 }}>
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




          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <Typography variant="h1" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 35,
                fontWeight: 500,
                padding: 0,
                mt: 10,
                mb: 4
              }}>
                <span style={{ paddingRight: 17, color: appTheme.palette.primary.space }}>What does the Program include?</span>
                <img width={45} src={require('../images/decor.png')} />
              </Typography>
            </Grid>
          </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ mb: 5 }}>



              <Grid container sx={{ justifyContent: "center", width: "100%", mb: -4 }}>

                <CssBaseline />
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        height: 300,
                        width: 250,
                        margin: "auto",
                        boxShadow: "none",
                        borderRadius: 1,
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
                        margin: "auto",
                        borderRadius: 1,
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
                        margin: "auto",
                        borderRadius: 1,
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
                          display: "flex",
                          margin: "auto",
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
                          margin: "auto",
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
              </Grid>



            </Grid>
          </Grid>






          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#899B98",
            mt: 5,
          }}>
            <Typography variant="h1" sx={{ mt: 7, fontSize: 40, textAlign: "center", color: appTheme.palette.primary.white, mb: -2 }}>Your Voice Matters to us!</Typography>
            <Typography variant="h1" sx={{ fontSize: 23, textAlign: "center", color: appTheme.palette.primary.white }}>We could use your help in a BiG way!</Typography>
            <Typography variant="h2" sx={{ width: "60%", fontSize: 23, mt: 4, textAlign: "left", color: appTheme.palette.primary.white }}>This is your opportunity to express your needs and suggest any additional services or resources that would benefit you. Together, we can shape a program that truly meets your expectations.</Typography>
            <Typography variant="h2" sx={{ width: "60%", fontSize: 23, mt: 4, textAlign: "left", color: appTheme.palette.primary.white }}>We invite you to take a few moments to complete the Needs Assessment Survey and make your voice heard. Your feedback is invaluable to us, and we deeply appreciate your participation in this important endeavor.</Typography>

            <Button
              width="150"
              variant="contained"
              disableElevation
              sx={{
                color: appTheme.palette.primary.white, fontSize: 18, fontWeight: 500,
                backgroundColor: appTheme.palette.primary.green2, borderRadius: .9, height: 45, mr: 3,
                '&:hover': {
                  fontWeight: 700
                },
                mt: 5,
                mb: 3
              }}>
              Take Survey Now
            </Button>

            <Typography variant="h2" sx={{ width: "50%", mb: 9, fontWeight: 400, fontSize: 20, mt: 4, textAlign: "center", color: appTheme.palette.primary.white }}>For any additional information, you can contact Chessie Floyd, BiGAUSTIN Self Sufficiency Coordinator/Case Manager</Typography>

          </Grid>





          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
