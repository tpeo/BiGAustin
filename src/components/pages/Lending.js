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
    List,
    ListItem,
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



export default function Lending(props) {

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
                        <Grid sx={{ height: "auto", width: "48%", mt: 10, mb: 7 }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <CssBaseline />
                                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                                    <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.green1 }}>Lending</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>BiGAUSTIN has been committed to meeting the unique financial needs of new and existing entrepreneurs since its inception in 1995. As a local non-profit and micro-lender, BiGAUSTIN provides a streamlined loan process that allows for rapid loan decisions.</Typography>


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
                                <Button
                                    width="150"
                                    height="20"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                                        backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35, mr: 2,
                                        '&:hover': {
                                            fontWeight: 700
                                        },
                                    }}>
                                    Schedule an Appointment
                                </Button>

                                <Button
                                    width="150"
                                    height="20"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                                        backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                                        '&:hover': {
                                            fontWeight: 700
                                        },
                                    }}>
                                    Start your Application
                                </Button>

                            </Grid>


                        </Grid>
                    </Grid>



                    <Grid container justifyContent="center" alignItems="center" style={{ height: "auto", mt: 3, backgroundColor: appTheme.palette.primary.blue1 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "90%", mt: 7 }}>
                            <Grid item md={4} xs={12}>
                                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        fontWeight: 500,
                                        color: appTheme.palette.primary.white,
                                        padding: 0,
                                        mb: 4
                                    }}>
                                        <span style={{ paddingRight: 17 }}>Our Mission</span>
                                        <img width={45} src={require('../images/decor.png')} />
                                    </Typography>
                                    <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white, }}>Business Investment Growth (BIG AUSTIN) is a technical assistance provider and impact lender that supports small business owners and their communities in the fight for economic, racial, and social justice. We work side-by-side with growing small business leaders and solopreneurs through our integrated model: combining impact-first Restorative Capital and Pro Bono Business Advising with our Good Jobs Innovation Lab that propels thriving communities with equitable jobs.</Typography>
                                </Grid>
                            </Grid>

                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                <img
                                    className="squareImage"
                                    src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                    alt="Logo"
                                    style={{
                                        width: 350,
                                        height: 350,
                                        borderRadius: '15px',
                                        boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid container justifyContent="center" alignItems="center" style={{ paddingTop: 30, paddingBottom: 100, backgroundColor: appTheme.palette.primary.blue1 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>


                            <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left', padding: 5 }}>
                                <img
                                    className="squareImage"
                                    src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                    alt="Logo"
                                    style={{
                                        width: 400,
                                        height: 400,
                                        borderRadius: '15px',
                                        boxShadow: "5px 5px 0 rgb(182, 245, 153)"
                                    }}
                                />
                            </Grid>

                            <Grid item md={4} xs={12} sx={{ paddingLeft: 5, paddingRight: 5 }} >
                                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left", }}>
                                    <Typography variant="h1" sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontSize: 30,
                                        color: appTheme.palette.primary.white,
                                        fontWeight: 500,
                                        padding: 0,
                                        mb: 4
                                    }}>
                                        <span style={{ paddingRight: 17 }}>Our History</span>
                                        <img width={45} src={require('../images/decor.png')} />
                                    </Typography>
                                    <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200, mb: 3, color: appTheme.palette.primary.white }}>
                                        • Be at least 21 years of age,<br />
                                        • Have more than 51% interest in your business,<br />
                                        • Be a for-profit business,<br />
                                        • Be unable to qualify for / afford a conventional bank loan,<br />
                                        • Have a written business plan,<br />
                                        • Be a U.S. citizen / legal resident / "Stateside" foreign-owned business,<br />
                                        • Be in good standing on federal, state, county, and municipal taxes,<br />
                                        • Carry full auto and liability insurance,<br />
                                        • Have no active bankruptcy.<br />
                                        • Location in one of the following counties: Bastrop, Bell, Blanco, Burnet, Gillespie, Hays, Lampasas, Lee, Llano, Mason, McCulloch, Milam, San Saba, Travis, Williamson
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>




                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 10 }}
                    >
                        <Typography variant="h1" sx={{
                            fontSize: 35,
                            color: appTheme.palette.primary.blue1,
                            fontWeight: 500,
                        }}>
                            Our Five C’s — what we look for
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
                                                height: 350,
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
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
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
                                                height: 350,
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
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
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
                                                height: 350,
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
                                                    sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
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
                                                    height: 350,
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
                                                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
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
                                                    height: 350,
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
                                                        sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 1, mt: 2 }}
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











                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ backgroundColor: appTheme.palette.primary.green4 }}

                    >
                        <Grid sx={{ mb: 10, mt: 10 }}>

                            <Grid container justifyContent="left" sx={{ justifyContent: "center", width: "100%" }}>
                                <Typography variant="h1" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    fontSize: 30,
                                    fontWeight: 500,
                                    padding: 0,
                                    mb: 4
                                }}>
                                    <span style={{ paddingRight: 17 }}>Our Process</span>
                                    <img width={45} src={require('../images/decor.png')} />
                                </Typography>
                                <CssBaseline />


                                <Grid container spacing={2}>

                                    <Grid item xs>
                                        <Card
                                            sx={{
                                                backgroundColor: appTheme.palette.primary.green5,
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
                                            <div >
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
                                                backgroundColor: appTheme.palette.primary.green5,
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
                                            <div >
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
                                                backgroundColor: appTheme.palette.primary.green5,
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
                                            <div >
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
                    </Grid>






                    <BottomBar />
                </div>
            )}
        </ThemeProvider>



    )
}
