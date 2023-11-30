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

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



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
      className={`arrow1 ${props.left ? "arrow1--left" : "arrow1--right"
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

export default function Youth(props) {

  const [homeData, setHome] = useState(null);
  const items = [1, 2, 3, 4, 5, 6]


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
                  <Typography variant="h1" sx={{ fontSize: 40, mb: 3, color: appTheme.palette.primary.green1 }}>Youth Entrepreneurship</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, textAlign: "center", mb: 3 }}>Women-owned businesses generate $5.3B in sales, employ over 43K workers, and makeup 26 percent of privately held companies in the greater Austin area. BiGAUSTIN stands ready to equip you with the tools needed to start and grow your business through education, consulting, round-table discussions, innovative networking opportunities, and lending programs.</Typography>


              <div className="programs-image-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={require('../images/services.png')} />
              </div>

            </Grid>
          </Grid>






          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.green4, textAlign: "center", color: "white", marginTop: 100}}>
            <h2 style={{ color: appTheme.palette.primary.white, paddingTop: 50, paddingBottom: 40 }}>Photo Gallery</h2>
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                {items.map((items) => (
                  <div className="keen-slider__slide number-slide1">
                    <Grid container justifyContent="center" alignItems="center" sx={{ mb: 3, backgroundColor: appTheme.palette.primary.green4 }}>
                   
                            <div>
                              <img width={"20%"}
                                src={"https://cdn.sanity.io/images/39eecjq4/production/54bfa5a4214c355ec6a31c57407e505126fad7b9-1288x1564.jpg"}
                                alt="Logo"
                              ></img>
                            </div>
                        
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






       

          <BottomBar />
        </div>
      )}
    </ThemeProvider>




  )
}
