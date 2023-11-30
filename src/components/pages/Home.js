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
  Link,
  TextField,
  Toolbar,
  Avatar,
  Button,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material";
import { Col, Row, Image, Carousel } from 'antd';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BottomBar from "../bottomBar/bottomBar.js";
// import NavBar from "../navBar/navBar.js";
import NavBar from "../navBar/navBar.js";

import "./Pages.css"
import headerBackgroundImage from "../images/backgroundheader.png"
import { ThemeProvider } from "@mui/material/styles";
// import Carousel from "react-material-ui-carousel";
import "../styles.css";
import { appTheme } from "../Theme.js";
import createClient from "/Users/aarushichitagi/Desktop/BiGAustin/src/client.js";
import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
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



function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

function Arrow1(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}



export default function Home(props) {
  console.log('in home screen');

  const [homeData, setHome] = useState(null);

  const items = [1, 2, 3, 4, 5, 6]
  const images = [1, 2, 3, 4]



  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [sliderRef1, instanceRef1] = useKeenSlider({
    initial: 0,
    // slides: {
    //   perView: 4,
    // },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })



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


  // When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:
  // In order for the item to stay within the container you need to set min-width: 0. In practice, you can set the zeroMinWidth prop:


  return (
    <ThemeProvider theme={appTheme}>
      {homeData && (
        <div style={{ position: "relative", height: "100vh" }}>

          <Grid component="main" sx={{ paddingBottom: 10, backgroundImage: `url(${headerBackgroundImage})`, backgroundSize: 'cover' }}>

            <NavBar />

            <Grid container justifyContent="center">
              <CssBaseline />
              <Grid container direction="row" sx={{ mt: 15, textAlign: "center", width: 800 }}>
                <Typography variant="h1" sx={{ fontSize: 50, fontWeight: 500, lineHeight: 1, color: appTheme.palette.primary.white }}>{homeData[0].mainHeading}</Typography>
                <Typography variant="h2" sx={{ font: 'League Spartan', fontSize: 30, fontWeight: 500, color: appTheme.palette.primary.white }}>{homeData[0].mainBlurb}</Typography>
              </Grid>

              <Grid container direction="column" alignItems="center">
                <Button
                  width="200"
                  variant="contained"
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=DWC8VDWDJJXX8&source=url&ssrt=1700339794757"
                  target="_blank"
                  disableElevation
                  sx={{
                    mt: 1.5, color: appTheme.palette.primary.white, backgroundColor: appTheme.palette.primary.green2, fontSize: 20, mb: 2, fontWeight: 500,
                    '&:hover': {
                      fontWeight: 700
                    },
                  }}>
                  Donate Now
                </Button>
                <Button
                  width="200"
                  variant="contained"
                  disableElevation
                  sx={{
                    color: appTheme.palette.primary.white, fontSize: 20, mb: 2, fontWeight: 500,
                    backgroundColor: appTheme.palette.primary.green2,
                    '&:hover': {
                      fontWeight: 700
                    },
                  }}>
                  Schedule an Appointment
                </Button>
              </Grid>

            </Grid>
          </Grid>



          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mt: 13, mb: 10 }}>
            <Grid container justifyContent="center" sx={{ width: "65%" }}>
            <Grid container direction="row" sx={{ mb: 5 }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 40,
                  fontWeight: 500,
                  padding: 0,
                  mb: 2
                }}>
                  <span style={{ paddingRight: 17 }}>About Us</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
              </Grid>

              <Grid container spacing={2} sx={{ }}>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/helpicon.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, fontSize: 28, mb: 1, letterSpacing: 2, padding: 0, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].peopleRised}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mt: 0, mb: 1, padding: 0, color: appTheme.palette.primary.white }}
                      >
                        People Rised
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/volunteers.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].volunteers}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        Volunteers
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      margin: "auto",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/peopleSaved.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].poorPeopleSaved}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        Poor People Saved
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card
                    sx={{
                      backgroundColor: appTheme.palette.primary.main,
                      height: 230,
                      width: 180,
                      borderRadius: 3,
                      display: "flex",
                      flexDirection: "column",
                      margin: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <div className="image-container1" style={{ "margin-bottom": "10px" }}>
                      <img width={90} src={require('../images/country.png')} />
                    </div>

                    <div >
                      <Typography
                        variant="h1"
                        sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2, color: appTheme.palette.primary.white }}
                      >
                        {homeData[0].countryMembers}+
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="h2"
                        sx={{ fontWeight: 500, fontSize: 18, mb: 1, color: appTheme.palette.primary.white }}
                      >
                        Country Members
                      </Typography>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ textAlign: "left" }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 40,
                  fontWeight: 500,
                  padding: 0,
                  mb: 4
                }}>
                  <span style={{ paddingRight: 17 }}>Ways We Help</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
                <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 200 }}>{homeData[0].about}</Typography>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid item xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <div style={{ "textAlign": "center" }}>
                    <img width={200} src='https://cdn.sanity.io/images/39eecjq4/production/0eb2b7460963715242d27a616177f5102d446b9e-429x429.png' />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 300, fontSize: 28, letterSpacing: 2, textAlign: "center" }}
                    >
                      Funding
                    </Typography>
                  </div>

                  <div style={{ "width": 280 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 300, fontSize: 19, mb: 1, letterSpacing: 2, textAlign: "center" }}
                    >
                      Micro-loans of up to $50,000 to help grow your business
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <div style={{ "textAlign": "center" }}>
                    <img width={200} src='https://cdn.sanity.io/images/39eecjq4/production/61afd543d19860f9a9066dea7a006a8713ce09f1-428x428.png' />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 300, fontSize: 28, letterSpacing: 2, textAlign: "center" }}
                    >
                      Consulting
                    </Typography>
                  </div>

                  <div style={{ "width": 280 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 300, fontSize: 19, mb: 1, letterSpacing: 2, textAlign: "center" }}
                    >
                      One-on-one consultations with experienced professionals to help address your business needs
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                  <div style={{ "textAlign": "center" }}>
                    <img width={200} src='https://cdn.sanity.io/images/39eecjq4/production/220968489c85d6cb12619d0c07d5f6e245869d9b-428x429.png' />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 300, fontSize: 28, letterSpacing: 2, textAlign: "center" }}
                    >
                      Education
                    </Typography>
                  </div>

                  <div style={{ "width": 280 }}>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 300, fontSize: 19, mb: 1, letterSpacing: 2, textAlign: "center" }}
                    >
                      Classes instructed by industry experts catered to specific business needs
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" sx={{ mb: 15 }}>
            <Button
              width="200"
              variant="contained"
              disableElevation
              sx={{
                mt: 1.5, height: 60, backgroundColor: appTheme.palette.primary.green2, color: appTheme.palette.primary.white, fontSize: 20, mb: 2, fontWeight: 500,
                '&:hover': {
                  fontWeight: 700
                },
              }}>
              Schedule an Appointment
            </Button>
          </Grid>






          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.blue1, textAlign: "center", color: "white", marginTop: 100, marginBottom: 90 }}>
            <h2 style={{ color: "white", paddingTop: 50, paddingBottom: 20 }}>Testimonials</h2>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                {items.map((items) => (
                  <div className="keen-slider__slide number-slide1">
                    <Grid container justifyContent="center" alignItems="center" sx={{ mb: 10, backgroundColor: appTheme.palette.primary.blue1 }}>
                      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "95%" }}>
                        <Grid item md={4} xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Grid sx={{ textAlign: "center" }}>
                            <div className="circular-image" >
                              <img
                                src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                alt="Logo"
                              ></img>
                            </div>
                          </Grid>
                          <Grid>
                            <Typography variant="h1" sx={{ textAlign: "center", fontSize: 21, fontWeight: 500, color: appTheme.palette.primary.white, mb: -1 }}>Daniel Frunza</Typography>
                            <Typography variant="h2" sx={{ textAlign: "center", fontSize: 18, fontWeight: 400, color: appTheme.palette.primary.white }}>Business Plan Maestro</Typography>
                          </Grid>
                        </Grid>


                        <Grid item md={5} xs={12} >
                          <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left" }}>
                            <Typography variant="h2" sx={{ fontSize: 21, fontWeight: 200, color: appTheme.palette.primary.white, width: "90%" }}>BiGAUSTIN was a huge help to Medici when we first started.  The Start Smart course helped us put a feasibility plan together for our business as well as understand the hardships of small business.  The $15k loan was also a huge help.  When you are starting a new business it is very difficult to find financing and BIG was a very helpful resource.</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                  </div>
                ))}
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
            {loaded && instanceRef.current && (
              <div className="dots">
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                  )
                })}
              </div>
            )}
          </div>





          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ mb: 10 }}>
            <Grid container justifyContent="left" sx={{ width: "65%" }}>
              <CssBaseline />
              <Grid container direction="row" sx={{ textAlign: "left" }}>
                <Typography variant="h1" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: 40,
                  fontWeight: 500,
                  padding: 0,
                  mb: 2
                }}>
                  <span style={{ paddingRight: 17 }}>Our Partners</span>
                  <img width={45} src={require('../images/decor.png')} />
                </Typography>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 25, fontWeight: 200 }}>Trusted Partnerships with Leading Organizations</Typography>
            </Grid>
          </Grid>




          <div className="testimonials" style={{ textAlign: "center", color: "white", width: "100%" }}>
            <div className="navigation-wrapper">
              <div ref={sliderRef1} className="keen-slider">
                {items.map((items) => (
                  <div className="keen-slider__slide number-slide1">
                    <Grid container justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
                      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "70%"}}>
                        {/* Image 1 */}
                        {images.map((items) => (
                          <Grid item md={3} sm={6} xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Grid sx={{ textAlign: "center" }}>
                            <div className="circular-image2">
                              <img width={40}
                                src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                alt="Image 1"
                              />
                            </div>
                          </Grid>
                        </Grid>
                        ))}
                    
                      </Grid>
                    </Grid>

                  </div>
                ))}
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow1
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow1
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
          
          </div>



          <Grid container direction="column" alignItems="center">
            <Button
              width="200"
              variant="contained"
              disableElevation
              sx={{
                color: appTheme.palette.primary.white, fontSize: 20, mb: 12, fontWeight: 500,
                backgroundColor: appTheme.palette.primary.green2, height: 50,
                '&:hover': {
                  fontWeight: 700
                },
              }}>
              Partner With Us
            </Button>
          </Grid>








          <BottomBar />




        </div>
      )}
    </ThemeProvider>

  )
}
