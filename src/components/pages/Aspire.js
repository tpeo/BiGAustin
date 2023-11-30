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



export default function Aspire(props) {

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
                        <Grid sx={{ height: "auto", width: "50%", mt: 10, mb: 4 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.green1 }}>Introducing ASPIRE</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 22, textAlign: "center", mb: 7 }}>ASPIRE IS A Diversified, Multi-Use, Mixed-Income Development That Provides Underserved Residents An Environment To Survive And Thrive. The Project Advances Social And Economic Opportunities For Low-Income And Minority Individuals Through Entrepreneurship And Job-Skills Training, Access To Loans, Affordable Housing, And Community-Building Initiatives.</Typography>


                            <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <img src={require('../images/services.png')} />
                            </div>

                            <Grid container justifyContent="center" alignItems="center" sx={{ mb: 3, mt: 5 }}>
                                <Button
                                    width="200"
                                    height="40"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: appTheme.palette.primary.white, fontSize: 20, fontWeight: 500, mt: 2,
                                        backgroundColor: appTheme.palette.primary.green2, borderRadius: 1, height: 50, width: 220,
                                        '&:hover': {
                                            fontWeight: 700
                                        },
                                    }}>
                                    Sign up for Updates
                                </Button>

                            </Grid>

                        </Grid>
                    </Grid>






                   
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"

                        sx={{ mt: 25, paddingBottom: 10, margin: "auto" }}
                    >
                        <Grid container justifyContent="center" sx={{ width: "65%" }}>

                            <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                                <Typography variant="h1" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    fontSize: 30,
                                    fontWeight: 500,
                                    padding: 0,
                                    mb: 4
                                }}>
                                    <span style={{ paddingRight: 17 }}>3 Goals, Major Impact</span>
                                    <img width={45} src={require('../images/decor.png')} />
                                </Typography>
                            </Grid>
                            <CssBaseline />


                            <Grid container spacing={2}>

                                <Grid item xs>
                                    <Card
                                        sx={{
                                            backgroundColor: appTheme.palette.primary.white,
                                            height: 420,
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

                                        <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                            <img src={require('../images/money.jpeg')} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
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
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                We tailor our free consultations to meet your specific needs related to business startup, business plan development, expansion, marketing, and management assistance. We are here to help you figure it out.
                                            </Typography>
                                        </div>


                                    </Card>
                                </Grid>

                                <Grid item xs>
                                    <Card
                                        sx={{
                                            backgroundColor: appTheme.palette.primary.white,
                                            height: 420,
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

                                        <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                            <img src={require('../images/money.jpeg')} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
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
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                We tailor our free consultations to meet your specific needs related to business startup, business plan development, expansion, marketing, and management assistance. We are here to help you figure it out.
                                            </Typography>
                                        </div>


                                    </Card>
                                </Grid>

                                <Grid item xs>
                                    <Card
                                        sx={{
                                            backgroundColor: appTheme.palette.primary.white,
                                            height: 420,
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

                                        <div className="circular-image" style={{ "margin-bottom": "10px", "margin-top": "10px" }}>
                                            <img src={require('../images/money.jpeg')} />
                                        </div>

                                        <div style={{ "padding-top": "8px" }}>
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
                                                sx={{ textAlign: "center", fontSize: 17, mb: 1, width: 220 }}
                                            >
                                                We tailor our free consultations to meet your specific needs related to business startup, business plan development, expansion, marketing, and management assistance. We are here to help you figure it out.
                                            </Typography>
                                        </div>


                                    </Card>
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
