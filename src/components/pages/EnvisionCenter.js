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



export default function EnvisionCenter(props) {

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
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.green1 }}>Envision Center</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>Women-owned businesses generate $5.3B in sales, employ over 43K workers, and makeup 26 percent of privately held companies in the greater Austin area. BiGAUSTIN stands ready to equip you with the tools needed to start and grow your business through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={require('../images/services.png')} />
              </div>

            </Grid>
          </Grid>



          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid sx={{ height: "auto", width: "100%", mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h2" sx={{ fontSize: 22, color: appTheme.palette.primary.green1, textAlign: "center" }}>BiGAUSTIN is a Community Development Financial Institution (CDFI) certified by the U.S. Department of Treasury.</Typography>
                </Grid>
              </Grid>




              <Grid container justifyContent="center" alignItems="center">
                <Grid sx={{ mr: 10, width: "20%" }}>
                  <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.blue1 }}>Vision Statement</Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>Empower households to self-sufficiency</Typography>
                </Grid>
                <Grid sx={{ width: "20%" }}>
                  <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.blue1 }}>Mission Statement</Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>Provide communities with centralized support in the following four pllars</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid container
            justifyContent="center"
            alignItems="center">
            <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 500, letterSpacing: 1, mb: 6 }}>4 PILLARS</Typography>
          </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ mb: 20}}>
              <Grid container sx={{ justifyContent: "center", width: "100%", mb: -4 }}>

                <CssBaseline />


                <Grid container spacing={5}>
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 400,
                        width: 250,
                        margin:"auto",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={require('../images/helpicon.png')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          Economic Empowerment
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          The Economic Empowerment pillar is designed to improve the economic sustainability of individuals by empowering them with opportunities to improve their economic outlook.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 400,
                        width: 250,
                        borderRadius: 3,
                        display: "flex",
                        margin:"auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={require('../images/helpicon.png')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          Economic Empowerment
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          The Economic Empowerment pillar is designed to improve the economic sustainability of individuals by empowering them with opportunities to improve their economic outlook.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 400,
                        width: 250,
                        margin:"auto",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={require('../images/helpicon.png')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          Economic Empowerment
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          The Economic Empowerment pillar is designed to improve the economic sustainability of individuals by empowering them with opportunities to improve their economic outlook.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.main,
                        height: 400,
                        width: 250,
                        borderRadius: 3,
                        margin:"auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >

                      <div className="image-container" style={{ "margin-bottom": "10px" }}>
                        <img width={110} src={require('../images/helpicon.png')} />
                      </div>

                      <div >
                        <Typography
                          variant="h1"
                          sx={{ textAlign: "center", fontWeight: 550, fontSize: 28, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                        >
                          Economic Empowerment
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h2"
                          sx={{textAlign: "center", paddingLeft: 2, paddingRight: 2, fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                        >
                          The Economic Empowerment pillar is designed to improve the economic sustainability of individuals by empowering them with opportunities to improve their economic outlook.
                        </Typography>
                      </div>
                    </Card>
                  </Grid>

                  
                 
                </Grid>
                </Grid>
              </Grid>


              
            </Grid>













            <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
