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



export default function Volunteer(props) {

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
                        justifyContent: "center"
                    }}>
                        <Grid sx={{ height: "auto", width: "60%", mt: 10, mb: 4 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.blue1 }}>Youth Entrepreneurship</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 10, color: "#444444" }}>Women-owned businesses generate $5.3B in sales, employ over 43K workers, and makeup 26 percent of privately held companies in the greater Austin area. BiGAUSTIN stands ready to equip you with the tools needed to start and grow your business through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>


                            <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <img src={require('../images/services.png')} />
                            </div>

                        </Grid>
                    </Grid>



                    <Grid sx={{backgroundColor: appTheme.palette.primary.blue1}}>
                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "80%",
                        margin: "auto",
                        paddingTop: 10,
                        paddingBottom: 10,
                        mt: 12,
                        mb: 12
                    }}>
                        <Grid container spacing={3}>
                            {items.map((items) => (
                                <Grid item xs sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "78%",
                                    margin: "auto",
                                    mb: 5
                                }}>
                                    <Card
                                        style={{ border: "2px solid white", boxShadow: "5px 5px 0 rgb(182, 245, 153)" }}
                                        sx={{
                                            backgroundColor: appTheme.palette.primary.blue1,
                                            boxShadow: "none",
                                            height: 300,
                                            width: 340,
                                            borderRadius: 3,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >

                                        <Grid container direction="row" sx={{ textAlign: "left" }}>
                                            <Typography variant="h1" sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                padding: 2,
                                                mt: 1,
                                                mb: 4
                                            }}>
                                                <span style={{ paddingRight: 10, width: "70%", fontSize: 27, color: appTheme.palette.primary.white }}>Impactful Contribution</span>
                                                <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                                                    <img width={85} src={require('../images/helpicon.png')} />
                                                </div>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ textAlign: "left", fontSize: 18, mt: 1, mb: 1, color: appTheme.palette.primary.white }}
                                                >
                                                    As a volunteer instructor, you have the opportunity to make a significant and positive impact on the community. By sharing your expertise and knowledge, you can help aspiring entrepreneurs achieve their goals.                                                        </Typography>
                                            </Typography>
                                        </Grid>
                                    </Card>
                                </Grid>

                            ))}

                        </Grid>
                    </Grid>
                    </Grid>











                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 4
                    }}>
                        <Typography variant="h2" sx={{ width: "60%", fontSize: 23, mt: 4, textAlign: "center", color: appTheme.palette.primary.space }}>This is your opportunity to express your needs and suggest any additional services or resources that would benefit you. Together, we can shape a program that truly meets your expectations.</Typography>
                        <Typography variant="h2" sx={{ width: "60%", fontSize: 23, mt: 4, textAlign: "center", color: appTheme.palette.primary.space }}>We invite you to take a few moments to complete the Needs Assessment Survey and make your voice heard. Your feedback is invaluable to us, and we deeply appreciate your participation in this important endeavor.</Typography>



                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            fontSize: 30,
                            fontWeight: 500,
                            padding: 0,
                            mb: 4
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
                                    mt: 5,
                                    mb: 3
                                }}>
                                Volunteer Now!
                            </Button>
                            <img width={45} src={require('../images/decor.png')} />
                        </Grid>
                    </Grid>














                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
