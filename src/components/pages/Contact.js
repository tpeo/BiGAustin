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
import "./Pages.css"
import "../styles.css";
import headerBackgroundImage from "../images/backgroundheader2.png"
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from "/Users/aarushichitagi/Desktop/BiGAustin/src/client.js";

const { Title } = Typography;

export default function Contact(props) {

  const [aboutData, setAbout] = useState(null);

  useEffect(() => {
    createClient.fetch(
      `*[_type == "about"]{
        mainHeading,
        mainBlurb,
        mission1,
        mission2,
        missionImage,
        history1,
        history2,
        historyImage
    }`
    )
      .then(
        (data) => setAbout(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )



  return (
    <ThemeProvider theme={appTheme}>
      {aboutData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${headerBackgroundImage})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid sx={{ height: "auto", mt: 10, mb: 6 }}>
            <Grid container justifyContent="center" alignItems="center">
              <CssBaseline />
              <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                <Typography variant="h1" sx={{ fontSize: 40 }}>Contact Us</Typography>
                <Typography variant="h2" sx={{ color: "#444444", textAlign: "center", fontSize: 22, fontWeight: 350 }}>{aboutData[0].mainBlurb}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container
            justifyContent="center"
            alignItems="center">
            <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 500,  mb: 6 }}>USE THIS FORM, OR VISIT OUR OFFICE!</Typography>
          </Grid>



          <Grid container justifyContent="center" alignItems="center" style={{ height: "auto", mt: 3 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "75%" }}>
              <Grid item md={4} xs={12} >
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
                    <span style={{ paddingRight: 17 }}>Our Mission</span>
                    <img width={45} src={require('../images/decor.png')} />
                  </Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200, mb: 3 }}>{aboutData[0].mission1}</Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200 }}>{aboutData[0].mission2}</Typography>
                </Grid>
              </Grid>

              <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 9 }}>
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
            </Grid>
          </Grid>


          <Grid container justifyContent="center" alignItems="center" style={{ paddingTop: 50, paddingBottom: 50, height: "auto" }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "80%" }}>
              <Grid item md={4} xs={12} sx={{ ml: -3 }}>
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

              <Grid item md={4} xs={12}>
                <Grid container justifyContent="flex-start" alignItems="center" direction="row" sx={{ textAlign: "left", marginLeft: 9 }}>
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 30,
                    fontWeight: 500,
                    padding: 0,
                    mb: 4
                  }}>
                    <span style={{ paddingRight: 17 }}>Our History</span>
                    <img width={45} src={require('../images/decor.png')} />
                  </Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200, mb: 3 }}>{aboutData[0].history1}</Typography>
                  <Typography variant="h2" sx={{ fontSize: 20, fontWeight: 200 }}>{aboutData[0].history2}</Typography>
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
