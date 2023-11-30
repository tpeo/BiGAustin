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



export default function CoffeeTalk(props) {

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

                    <Grid sx={{ height: "auto", mt: 10 }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <CssBaseline />
                            <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>Women's Coffee Talk Series</Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 5, mb: 14 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "95%" }}>
                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
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

                            <Grid item md={4} xs={12} >
                                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                                    <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.black }}>“Coffee Talk” is a series of events that ignites the spirit of women over conversation and coffee. Women learn how to cultivate meaningful relationships that are vital to successful lifestyles and prosperous businesses.</Typography>
                                    <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, mb: 3, color: appTheme.palette.primary.black }}>BiGAUSTIN is set to provide the necessary tools to initiate and grow these businesses. We accomplish this together through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>

                                    <Button
                                        width="150"
                                        height="20"
                                        variant="contained"
                                        disableElevation
                                        sx={{
                                            color: appTheme.palette.primary.white, fontSize: 17, fontWeight: 500,
                                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 40,
                                            '&:hover': {
                                                fontWeight: 700
                                            },
                                        }}>
                                        Join Our Coffee Talks
                                    </Button>

                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>



                    <Grid item xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: appTheme.palette.primary.green4
                    }}>
                        <Grid sx={{ height: "auto", width: "60%", mb: 7 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        padding: 0,
                                        mt: 6,
                                        mb: 4
                                    }}>
                                        <span style={{ paddingRight: 17, fontSize: 37, color: appTheme.palette.primary.white }}>WBI Speakers</span>
                                        <img width={40} src={require('../images/decor.png')} />
                                    </Typography>                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", color: appTheme.palette.primary.white }}>BiGAUSTIN has been committed to meeting the unique financial needs of new and existing entrepreneurs since its inception in 1995. As a local non-profit and micro-lender, BiGAUSTIN provides a streamlined loan process that allows for rapid loan decisions.</Typography>
                        </Grid>




                        <Grid item sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "50%",
                            margin: "auto",
                            mb: 12
                        }}>
                            <Grid container spacing={5}>
                                {items.map((items) => (
                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.white,
                                                width: 200,
                                                borderRadius: 0,
                                                display: "flex",
                                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.02)",
                                                flexDirection: "column",
                                            }}
                                        >

                                            <img width={800} src={require('../images/coffeetalk/chelleneff.png')} />


                                        </Card>
                                    </Grid>



                                ))}
                            </Grid>


                        </Grid>









                    </Grid>







                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
