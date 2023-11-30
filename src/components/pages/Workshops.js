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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
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



export default function Workshops(props) {

  const [homeData, setHome] = useState(null);
  const items = [1, 2, 3, 4, 5, 6]




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
            justifyContent: "center",
            margin: "auto",
          }}>
            <Grid sx={{ height: "auto", width: "55%", mt: 10, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.green1 }}>Workshops</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>We are ready to help make your business dreams a reality. Women-owned businesses are 26 percent of the greater Austin areas privately held firms. They generate $5.3 billion in sales and employ over 43 thousand workers. BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>
            </Grid>
          </Grid>

          

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}>
            <Grid sx={{ height: "auto", width: "78%", mt: 2, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Typography variant="h1" sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 36,
                fontWeight: 500,
                padding: 0,
                mb: 0
              }}>
                <span style={{ paddingRight: 17 }}>Upcoming Workshops</span>
                <img width={45} src={require('../images/decor.png')} />
              </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "78%",
            margin: "auto",
            mb: 12
          }}>
            <Grid container spacing={5}>
              {items.map((items) => (
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.white,
                      width: 340,
                      borderRadius: 1,
                      margin:"auto",
                      display: "flex",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      flexDirection: "column",
                    }}
                  >

                    <div>
                      <img height={20} style={{ "border-bottom": "7px solid #B6F599" }} src={require('../images/money.jpeg')} />
                    </div>

                    <Grid sx={{paddingLeft: 3}}>
                      <Typography variant="h2" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        fontSize: 17,
                        fontWeight: 500,
                        color: '#999999',
                        fontWeight: 350,
                        padding: 0,
                        mb: 2,
                        mt: 2
                      }}>
                        <PersonIcon sx={{marginRight: 1}}></PersonIcon>
                        <span style={{ paddingRight: 17 }}>Esther Howard</span>
                        <CalendarMonthIcon sx={{marginLeft: 3, marginRight: 1}}></CalendarMonthIcon>
                        <span style={{ paddingRight: 17 }}>12 Sep 2021</span>

                      </Typography>

                    </Grid>


                    <div style={{ "padding-left": "30px" }}>
                      <div>
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 2 }}
                        >
                          Lending
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{ fontSize: 17, mb: 1, width: "90%" }}
                        >
                          We tailor our free consultations to meet your specific needs related to business startup, business plan development, expansion, marketing, and management assistance. We are here to help you figure it out.
                        </Typography>
                      </div>
                    </div>

                    <Grid>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            ml: 3, mb: 4, mt: 2, color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700
                            },
                          }}>
                          Learn More
                        </Button>
                      </Grid>


                  </Card>
                </Grid>



              ))}
            </Grid>


          </Grid>














          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
