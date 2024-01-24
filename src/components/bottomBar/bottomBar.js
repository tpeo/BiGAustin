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
  Link,
  Paper,
  TextField,
  Toolbar,
  Avatar,
  Button,
  Box,
  Grid,
  InputAdornment,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import "../styles.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


export default function BottomBar() {


  return (
    <ThemeProvider theme={appTheme}>



      <Grid sx={{
        backgroundColor:"#252A34",
      }}>
        <Grid item sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#252A34",
          margin: "auto",
          paddingBottom: 5,
          paddingTop: 12
        }}>

          <Grid container sx={{ width: "80%" }}>
            <Grid item xs>
              <Card
                sx={{
                  width: 250,
                  display: "flex",
                  backgroundColor: "#252A34",
                  boxShadow: "none",
                  flexDirection: "column",
                }}
              >
                <div className="links" style={{"padding-right":"10px", "margin-top": "50px" }}>
                  <ul>
                    <li>
                      <Link href="/education">
                      <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                          <LocationOnIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocationOnIcon>
                          <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>8000 Centre Park Drive, Suite 200 Austin TX 78754</Typography></span>
                        </div>
                       
                      </Link>
                    </li>
                    <li>
                      <Link href="/education">
                        <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                          <LocalPhoneIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></LocalPhoneIcon>
                          <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>(512) 928-8010</Typography></span>
                        </div>

                      </Link>
                    </li>
                    <li>
                      <Link href="/education">

                        <div style={{ display: 'flex', alignItems: 'center', width: "100%", margin: "0 auto" }}>
                          <EmailIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></EmailIcon>
                          <span><Typography variant="h2" sx={{ fontSize: 18, fontWeight: 300, color: appTheme.palette.primary.platinum, }}>info@bigaustin.org</Typography></span>
                          </div>
                          
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>
            <Grid item xs>
              <Card
                sx={{
                  width: 140,
                  display: "flex",
                  backgroundColor: "#252A34",
                  boxShadow: "none",
                  flexDirection: "column",
                }}
              >
                <div className="links" style={{ "padding": "10px" }}>
                  <div>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                    >
                      Quick Links
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      <Link href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        How We Help
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer">
                        Get Involved
                      </Link>
                    </li>
                    <li className="aspire">
                      <Link href="/aspire">
                        Aspire
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>

            <Grid item xs>
              <Card
                sx={{
                  width: 140,
                  display: "flex",
                  backgroundColor: "#252A34",
                  boxShadow: "none",
                  flexDirection: "column",
                }}
              >
                <div className="links" style={{ "padding": "10px" }}>
                  <div>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                    >
                      About
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about">
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link href="/ourimpact">
                        Our Impact
                      </Link>
                    </li>
                    <li>
                      <Link href="/dreamteam">
                        Dream Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>

            <Grid item xs>
              <Card
                sx={{
                  width: 140,
                  display: "flex",
                  backgroundColor: "#252A34",
                  boxShadow: "none",
                  flexDirection: "column",
                }}
              >
                <div className="links" style={{ "padding": "10px" }}>
                  <div>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                    >
                      How We Help
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      <Link href="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs">
                        Programs
                      </Link>
                    </li>
                    <li>
                      <Link href="/workshops">
                        Workshops
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>

            <Grid item xs>
              <Card
                sx={{
                  width: 140,
                  display: "flex",
                  backgroundColor:"#252A34",
                  boxShadow: "none",
                  flexDirection: "column",
                }}
              >
                <div className="links" style={{ "padding": "10px" }}>
                  <div>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                    >
                      Get Involved
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      <Link href="/volunteer">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link href="/partner">
                        Partner
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>



            <Grid item xs>
              <Card
                sx={{
                  width: 280,
                  display: "flex",
                  backgroundColor:"#252A34",
                  boxShadow: "none",
                  flexDirection: "column",
                }}
              >
                <div className="links" style={{ "padding": "10px" }}>
                  <div>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 17, mb: 3, color: appTheme.palette.primary.white }}
                    >
                      Newsletter
                    </Typography>
                  </div>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 1000,
                      maxWidth: '100%',
                    }}
                  >
                    {/* <TextField variant="filled" sx={{ color: appTheme.palette.primary.white }} label="Enter Your Email" id="fullWidth" /> */}
                    <input className="input" type="text" placeholder="Enter your email" id="fname" name="fname"></input>
                    <Button sx={{ color: appTheme.palette.primary.white, height: "45px", fontSize: 17, backgroundColor: appTheme.palette.primary.green2, fontWeight: 350, borderRadius: 0, paddingLeft: 4, paddingRight: 4 }}>Subscribe</Button>
                  </Box>
                  <Typography variant="h2" sx={{ fontSize: 15, mt: 1, color: appTheme.palette.primary.platinum }}>Your email is safe with us, we don’t spam.</Typography>



                  <div>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: 550, padding: 0, fontSize: 17, mt: 3, mb: 2, color: appTheme.palette.primary.white }}
                    >
                      Follow Us
                    </Typography>
                  </div>

                  <TwitterIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></TwitterIcon>
                  <InstagramIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></InstagramIcon>
                  <PinterestIcon style={{ border: '4px solid #B6F599', width: 30, height: 30, marginRight: 10 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></PinterestIcon>
                  <YouTubeIcon style={{ border: '4px solid #B6F599', width: 30, height: 30 }} sx={{ borderRadius: 5, backgroundColor: appTheme.palette.primary.green3, color: appTheme.palette.primary.footer }}></YouTubeIcon>

                </div>
              </Card>
            </Grid>
          </Grid>


          {/* 
            <img width={200} style={{
            position: "relative",
            bottom: 0,
            left: 0
        }} src='../images/decor.png'/> */}


        </Grid>

        <div className="wrapperLeft">
          <img width={150} src={require('../images/leftfooter.png')} />
        </div>

        <div className="wrapperRight">
          <img width={150} src={require('../images/leftfooter.png')} />
        </div>



      </Grid>






    </ThemeProvider>



  )
}


// import React from "react";
// import "./bottomBar.css";


// export default function BottomBar() {
//   return (
//     <div className="bottomBarContainer">
//       <div className="rectangle">
//       <div className="flex-container-1">
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-1">
//           <span className="quick-link">Quick Link</span>
//           <span className="home">Home</span>
//           <span className="about-us">About us</span>
//           <span className="blog-post">Blog post</span>
//           <span className="photo-gallery">Photo gallery</span>
//         </div>
//         <div className="flex-container-2">
//           <span className="get-in-touch">Get In Touch</span>
//           <span className="contact-us">Contact us</span>
//           <span className="our-services">Our services</span>
//         </div>
//         <div className="flex-container-2">
//           <span className="get-in-touch">Get In Touch</span>
//           <span className="contact-us">Contact us</span>
//           <span className="our-services">Our services</span>
//         </div>
//         <div className="flex-container-4">
//           <span className="newsletter">Newsletter</span>
//           <div className="flex-container-5">
//             <div className="email-box">
//               <span className="enter-your-email">Enter your email</span>
//             </div>
//             <div className="subscribe-frame">
//               <span className="subscribe">Subscribe</span>
//             </div>
//           </div>
//           <span className="email-frame">
//             Your email is safe with us,we don’t spam.
//           </span>
//           <span className="follow-me">Follow Me</span>
//           {/* <img className="group-3251" src={group3251} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };
