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



export default function WomensBiz(props) {

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
                        <Grid sx={{ height: "auto", width: "48%", mt: 10, mb: 10 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.blue1 }}>Women's Biz Inc</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>BiGAUSTIN offers confidential business consulting services tailored to meet your needs. We’ve got you covered whether you are just getting started or if you are already in business.</Typography>


                            <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <img src={require('../images/services.png')} />
                            </div>
                            <Typography variant="h1" sx={{ fontSize: 22, textAlign: "center", color: appTheme.palette.primary.blue1 }}>De J. Lozada - Founder Of Soul Popped Gourmet Popcorn
                                “One Day I Just Decided To Do It…”
                            </Typography>
                            <Typography variant="h2" sx={{ fontSize: 18, textAlign: "center", color: appTheme.palette.primary.green1 }}>De J. Lozada - Founder Of Soul Popped Gourmet Popcorn
                                Whether you are just beginning to explore the idea of starting a business, or you already have sales under your belt, BiGAUSTIN has a solution designed to provide the tools to Start Smart and grow strong.
                            </Typography>

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
                                    <span style={{ paddingRight: 17 }}>Services</span>
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


                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Grid sx={{ height: "auto", width: "100%", mb: 7 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.green1 }}>No matter where you are in your entrepreneurial journey, we provide Individual Business Consulting services!</Typography>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent="center" alignItems="center">
                                <Button
                                    width="150"
                                    height="20"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: appTheme.palette.primary.white, fontSize: 17, fontWeight: 500, mt: 2,
                                        backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                                        '&:hover': {
                                            fontWeight: 700
                                        },
                                    }}>
                                    Schedule an Appointment
                                </Button>

                            </Grid>


                        </Grid>
                    </Grid>




                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 3 }}
                    >
                        <Typography variant="h1" sx={{
                            fontSize: 35,
                            color: appTheme.palette.primary.blue1,
                            fontWeight: 500,
                        }}>
                            What we offer
                        </Typography>
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



                                </Grid>
                            </Grid>







                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"

                            >
                                <Grid container sx={{ width: "70%" }}>
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
