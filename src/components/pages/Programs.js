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



export default function Programs(props) {

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

                    <Grid sx={{ height: "auto", mt: 7, mb: 7 }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <CssBaseline />
                            <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                <Typography variant="h1" sx={{ fontSize: 40, mb: 3 }}>Programs</Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Card
                            sx={{
                                height: "auto",
                                width: "70%",
                                borderRadius: 1,
                                display: "flex",
                                paddingTop: 5,
                                paddingBottom: 5,
                                flexDirection: "column",
                                mb: 9,
                                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 0px 25px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 0px 20px rgba(0, 0, 0, 0.02)",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    {/* Adjust the image size and alignment */}
                                    <div className="programs-image-container" style={{ width: "90%", display: "flex", justifyContent: "center", marginLeft: 30 }}>
                                        <img width={"100%"} src={require('../images/coffee.jpg')} alt="Coffee Talk" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    {/* Adjust the text content and button placement */}
                                    <div style={{ marginLeft: 25, width: "92%" }}>
                                        <Typography
                                            variant="h1"
                                            sx={{ fontWeight: 550, fontSize: 28, mb: 2, padding: 0 }}
                                        >
                                            WBI Coffee Talk Series
                                        </Typography>
                                        <Typography
                                            variant="h2"
                                            sx={{ fontSize: 20, mb: 1, padding: 0 }}
                                        >
                                            “Coffee Talk” is a series of events that ignites the spirit of women over conversation and coffee. Women learn how to cultivate meaningful relationships that are vital to successful lifestyles and prosperous businesses.

                                        </Typography>

                                        <Grid container justifyContent="flex-start" alignItems="center" spacing={2} sx={{ mt: 5 }}>
                                            <Grid item xs={6} md={4}>
                                                {/* Adjust the button width */}
                                                <Button
                                                    width="100%"
                                                    variant="contained"
                                                    disableElevation
                                                    sx={{
                                                        color: appTheme.palette.primary.white,
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        backgroundColor: appTheme.palette.primary.green2,
                                                        '&:hover': {
                                                            fontWeight: 700
                                                        },
                                                    }}
                                                >
                                                    Learn More
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6} md={8} sx={{ textAlign: 'right' }}>
                                                {/* Adjust the image width */}
                                                <img width={45} src={require('../images/decor.png')} alt="Decor" />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Card
                            sx={{
                                height: "auto",
                                width: "70%",
                                borderRadius: 1,
                                display: "flex",
                                paddingTop: 5,
                                paddingBottom: 5,
                                flexDirection: "column",
                                mb: 9,
                                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 0px 25px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 0px 20px rgba(0, 0, 0, 0.02)",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    {/* Adjust the image size and alignment */}
                                    <div className="programs-image-container" style={{ width: "90%", display: "flex", justifyContent: "center", marginLeft: 30 }}>
                                        <img width={"100%"} src={require('../images/coffee.jpg')} alt="Coffee Talk" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    {/* Adjust the text content and button placement */}
                                    <div style={{ marginLeft: 25, width: "92%" }}>
                                        <Typography
                                            variant="h1"
                                            sx={{ fontWeight: 550, fontSize: 28, mb: 2, padding: 0 }}
                                        >
                                            WBI Coffee Talk Series
                                        </Typography>
                                        <Typography
                                            variant="h2"
                                            sx={{ fontSize: 20, mb: 1, padding: 0 }}
                                        >
                                            “Coffee Talk” is a series of events that ignites the spirit of women over conversation and coffee. Women learn how to cultivate meaningful relationships that are vital to successful lifestyles and prosperous businesses.

                                        </Typography>

                                        <Grid container justifyContent="flex-start" alignItems="center" spacing={2} sx={{ mt: 5 }}>
                                            <Grid item xs={6} md={4}>
                                                {/* Adjust the button width */}
                                                <Button
                                                    width="100%"
                                                    variant="contained"
                                                    disableElevation
                                                    sx={{
                                                        color: appTheme.palette.primary.white,
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        backgroundColor: appTheme.palette.primary.green2,
                                                        '&:hover': {
                                                            fontWeight: 700
                                                        },
                                                    }}
                                                >
                                                    Learn More
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6} md={8} sx={{ textAlign: 'right' }}>
                                                {/* Adjust the image width */}
                                                <img width={45} src={require('../images/decor.png')} alt="Decor" />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>









                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
