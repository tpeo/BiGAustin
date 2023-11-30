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



export default function SkillsDev(props) {

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
                                <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.blue1 }}>Job Skills Development</Typography>
                                <Typography variant="h2" sx={{ fontSize: 23, fontWeight: 300, color: appTheme.palette.primary.space }}>BiGAUSTIN is offering classes in two of the fastest growing industries</Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "auto", mt: 5, mb: 14 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%", margin: "auto" }}>
                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Grid sx={{ textAlign: 'center' }}>
                                    <img className="squareImage1"
                                        src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                        alt="Logo"
                                        style={{
                                            top: 0,
                                            width: 280,
                                            height: 280,
                                            margin: "auto",
                                            borderRadius: '15px',
                                            boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                        }}
                                    ></img>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        padding: 0,
                                        mb: 2,
                                        mt: 2
                                    }}>
                                        <span style={{textAlign:"left"}}>Technology Training</span>
                                        <img width={42} src={require('../images/decor.png')} />
                                    </Typography>

                                    <Typography variant="h2" sx={{ textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{ textAlign:"left",mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>

                                </Grid>
                            </Grid>

                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Grid sx={{ textAlign: 'center' }}>
                                    <img className="squareImage"
                                        src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                        alt="Logo"
                                        style={{
                                            top: 0,
                                            width: 280,
                                            height: 280,
                                            margin: "auto",
                                            borderRadius: '15px',
                                            boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                        }}
                                    ></img>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        padding: 0,
                                        mb: 2,
                                        mt: 2
                                    }}>
                                        <span style={{}}>Construction Training</span>
                                        <img width={42} src={require('../images/decor.png')} />
                                    </Typography>

                                    
                                    <Typography variant="h2" sx={{ textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{ textAlign:"left",mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>
                                    <Typography variant="h2" sx={{textAlign:"left", mb: .3, fontSize: 20, fontWeight: 300, color: appTheme.palette.primary.space }}>Computer Fundamentals </Typography>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: appTheme.palette.primary.blue1,
                        mt: 5,
                        paddingBottom: 10
                    }}>

                        <Grid sx={{ height: "auto", width: "45%", paddingTop: 8 }}>
                            <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 400, textAlign: "center", color: appTheme.palette.primary.white, mb: 4 }}>BiGAUSTIN is offering this opportunity to qualified students at no cost! In addition to these courses, we are offering assistance with job placement with our extensive group of partner companies, which are ready and willing to hire graduates of the program. </Typography>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "left", color: appTheme.palette.primary.white, mb: 3 }}>Tuition assistance is available for those who qualify & reside in the City of Austin.</Typography>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "left", color: appTheme.palette.primary.white, mb: 1 }}>Pre-qualifications:</Typography>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "left", color: appTheme.palette.primary.white }}>1. Must reside in Austin city limits</Typography>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "left", color: appTheme.palette.primary.white }}>2. Meet income guidelines. Example if you are in a household of 3 making less than $56,050 would pre-qualify for a scholarship.</Typography>
                        </Grid>



                    </Grid>




                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5
                    }}>

                        <Typography variant="h1" sx={{ fontSize: 25, textAlign: "center", color: appTheme.palette.primary.space }}>Classes begin soon! Seating is limited. Register below now and change your future!</Typography>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            fontSize: 30,
                            fontWeight: 500,
                            padding: 0,
                            mt: 2,
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
                                Register Here
                            </Button>
                            <img width={40} src={require('../images/decor.png')} />
                        </Grid>
                    </Grid>







                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
