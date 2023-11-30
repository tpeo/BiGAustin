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



export default function Consulting(props) {

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

          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>

            <Typography variant="h1" sx={{ fontSize: 40, mb: 3, mt: 5, color: appTheme.palette.primary.blue1 }}>The BiGAUSTIN School of Business & Job Skills Development</Typography>
            <Grid sx={{ height: "auto", width: "48%", mb: 1 }}>
              <Typography variant="h2" sx={{ fontSize: 18, textAlign: "center", color: appTheme.palette.primary.space }}>De J. Lozada - Founder Of Soul Popped Gourmet Popcorn
                BiGAUSTIN delivers innovative solutions and creates financial strength for our clients. We are committed to building healthy, sustainable communities by providing high-quality training to job seekers and entrepreneurs to prepare them for the evolving economic landscape in the Central Texas area.
              </Typography>
            </Grid>
          </Grid>



          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appTheme.palette.primary.blue1,
            mt: 5
          }}>

            <Grid sx={{ height: "auto", width: "45%", paddingTop: 8 }}>
              <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 400, textAlign: "center", color: appTheme.palette.primary.white, mb: 2 }}>The lack of access to high-quality and affordable education is one of the primary reasons businesses fail!            </Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white, mb: 4 }}>Therefore, BiGAUSTIN takes an underserved business owner’s amazing talent and matches it with the resources needed to succeed and become a positive economic contributor.</Typography>
              <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 500, textAlign: "center", color: appTheme.palette.primary.white, mb: 2 }}>BiGAUSTIN’S MULTIMODAL APPROACH TO BUSINESS ED</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}>Seminars</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}>Industry-centric Courses</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}>Intensive Business Training</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}>Workshops</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}>Entrepreneurship</Typography>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white}}>Job Skills Development</Typography>





            </Grid>


            <Grid sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: 30,
                fontWeight: 500,
                padding: 0,
                mt: 5,
                mb: 8
              }}>
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
                  }}>
                  Upcoming Sessions
                </Button>
                <img width={40} src={require('../images/decor.png')} />
              </Grid>
          </Grid>




          <Grid item sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            margin: "auto",
            mt: 12,
            mb: 12
          }}>
            <Grid container spacing={5}>
            {items.map((items) => (
              <Grid item xs>
              <Card
                sx={{
                  backgroundColor: appTheme.palette.primary.white,
                  width: 250,
                  borderRadius: 1,
                  margin:"auto",
                  display: "flex",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  flexDirection: "column",
                }}
              >

                <div style={{ "margin-bottom": "10px"}}>
                  <img height={20} src={require('../images/money.jpeg')} />
                </div>


                <div style={{ "padding": "10px"}}>
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
                    sx={{fontSize: 17, mb: 1,  width: 220 }}
                  >
                    We tailor our free consultations to meet your specific needs related to business startup, business plan development, expansion, marketing, and management assistance. We are here to help you figure it out.
                  </Typography>
                </div>
                </div>

                <Grid item sx={{ textAlign: 'right', paddingRight: 0, mt: 1}}>
                        <img width={35} src={require('../images/decor.png')} />
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
