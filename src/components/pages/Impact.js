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
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from "/Users/aarushichitagi/Desktop/BiGAustin/src/client.js";
import imageUrlBuilder from '@sanity/image-url'

import ArrowLeftImage from '../images/arrow-left.png'; // Import the left arrow image
import ArrowRightImage from '../images/arrow-right.png'; // Import the right arrow image
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}


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
      className={`arrow2 ${props.left ? "arrow2--left" : "arrow2--right"
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




export default function About(props) {

  const [impactData, setImpact] = useState(null);

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
      `*[_type == "impact"]{
      mainHeading,
      backgroundImage,
      mainBlurb,
      stat1title,
      stat1subheading,
      stat1number,
      stat2title,
      stat2subheading,
      stat2number,
      stat3title,
      stat3subheading,
      stat3number,
      clientstories[]{
        clientstories-> {
          name,
          blurb,
          image,
          videoURL
        }
      },
    }`
    )
      .then(
        (data) => setImpact(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )




  return (
    <ThemeProvider theme={appTheme}>
      {impactData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(impactData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid sx={{ height: "auto", mt: 10, mb: 7 }}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                <Typography variant="h1" sx={{ fontSize: 40, mb: 3 }}>Impact we create</Typography>
              </Grid>
            </Grid>
            <Typography variant="h2" sx={{ fontSize: 23, textAlign: "center" }}>Demographical Description</Typography>
          </Grid>



          <div style={{ marginBottom: 50 }}>
            <Row gutter={[0, 25]}>
              <Col span={3} offset={5}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 400 }}> Annual Education <br></br> Hours </Typography>
              </Col>
              <Col span={11}>
                <Progress percent={97} format={() => '5343'} style={{ fontFamily: "League Spartan" }} strokeColor={{ '0%': appTheme.palette.primary.green1, '100%': appTheme.palette.primary.green1 }} trailColor="transparent" />
              </Col>


              <Col span={3} offset={5}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 400 }}> Annual Clients <br></br> Served </Typography>
              </Col>
              <Col span={10}>
                <Progress percent={65} format={() => '4212'} style={{ fontFamily: "League Spartan" }} strokeColor={{ '0%': appTheme.palette.primary.green1, '100%': appTheme.palette.primary.green1 }} trailColor="transparent" />
              </Col>

              <Col span={3} offset={5}>
                <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 400 }}> Total Consulting <br></br> Hours </Typography>
              </Col>
              <Col span={10}>
                <Progress percent={92} format={() => '5092'} style={{ fontFamily: "League Spartan" }} strokeColor={{ '0%': appTheme.palette.primary.green1, '100%': appTheme.palette.primary.green1 }} trailColor="transparent" />
              </Col>
            </Row>
          </div>

          <Grid sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Grid container spacing={2} sx={{ mt: 5, width: "80%", justifyContent: "center", alignItems: "center" }}>
              <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Card
                  sx={{
                    height: 230,
                    width: 180,
                    borderRadius: 3,
                    display: "flex",
                    boxShadow: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <div style={{ "margin-bottom": "10px" }}>
                    <img width={200} src={require('../images/piechart.png')} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2 }}
                    >
                      Ethnicity
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 500, fontSize: 18, mb: 1 }}
                    >
                      volunteer
                    </Typography>
                  </div>
                </Card>
              </Grid>

              <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Card
                  sx={{
                    height: 230,
                    width: 180,
                    borderRadius: 3,
                    display: "flex",
                    boxShadow: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <div style={{ "margin-bottom": "10px" }}>
                    <img width={200} src={require('../images/piechart.png')} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2 }}
                    >
                      Ethnicity
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 500, fontSize: 18, mb: 1 }}
                    >
                      volunteer
                    </Typography>
                  </div>
                </Card>
              </Grid>


              <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Card
                  sx={{
                    height: 230,
                    width: 180,
                    borderRadius: 3,
                    display: "flex",
                    boxShadow: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <div style={{ "margin-bottom": "10px" }}>
                    <img width={200} src={require('../images/piechart.png')} />
                  </div>

                  <div >
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 28, mb: 1, letterSpacing: 2 }}
                    >
                      Ethnicity
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h2"
                      sx={{ fontWeight: 500, fontSize: 18, mb: 1 }}
                    >
                      volunteer
                    </Typography>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>




          <div className="testimonials" style={{ backgroundColor: appTheme.palette.primary.platinum, textAlign: "center", color: "white", marginTop: 100}}>

            <div style={{ paddingTop: "40px" }}>
              <div className="arrow-wrapper">
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
                <div className="dots1">
                  {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot1" + (currentSlide === idx ? " active" : "")}
                      ></button>
                    )
                  })}
                </div>
              )}
            </div>


            <Typography variant="h2" style={{ color: appTheme.palette.primary.green1, paddingTop: 50, fontSize: "30px", textAlign: "left", width: "60%", margin: "0 auto", paddingBottom: 20, fontWeight: 500 }}>CLIENT SUCCESS STORIES</Typography>
            <div className="navigation-wrapper">




              <div ref={sliderRef} className="keen-slider">
                {impactData[0].clientstories.map((item) => (
                  <div className="keen-slider__slide number-slide1">
                    {console.log("impact", item.clientstories)}
                    <Grid container justifyContent="center" alignItems="center" sx={{ width: "72%", paddingTop: "40px", margin: "0 auto", mb: 10, backgroundColor: appTheme.palette.primary.platinum }}>
                      <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{ width: "100%" }}>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                          <Grid sx={{ textAlign: 'center' }}>
                            <Typography variant="h1" sx={{ textAlign: "left", padding: "0px", paddingBottom: "20px", fontSize: 30, fontWeight: 500, color: appTheme.palette.primary.blue1 }}>{item.clientstories.name}</Typography>
                            <Typography variant="h2" sx={{ textAlign: "left", fontSize: 20, fontWeight: 200, color: appTheme.palette.primary.space, whiteSpace: 'pre-line', wordWrap: 'break-word' }}>
                              {item.clientstories.blurb.replace(/<\s*\/?br\s*\/?>/g, '\n').replace(/\n{2,}/g, '\n')}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ textAlign: "center" }}>
                            <div className="square-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <img
                                src={urlFor(item.clientstories.image).url()}
                                alt="Logo"
                                style={{ maxWidth: '100%', height: 'auto' }}
                              />
                            </div>
                          </Grid>
                        </Grid>

                        {/* YouTube Video */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: "50px" }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/N_prLS-aTqU?si=cjiCqqsFF9fPy8S_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Grid>
                      </Grid>
                    </Grid>




                  </div>

                ))}
              </div>

            </div>

          </div>








          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
