import React, { useState, useEffect } from "react";
import {
  Typography,
  CssBaseline,
  Card,
  Button,
  Grid,
} from "@mui/material";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import BottomBar from "../bottomBar/bottomBar.js";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import NavBar from "../navBar/navBar.js";
import "../styles.css";
import moment from "moment";
import { Link } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "../Theme.js";
import createClient from "/Users/aarushichitagi/Desktop/BiGAustin/src/client.js";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(createClient)

function urlFor(source) {
  return builder.image(source)
}


export default function Workshops(props) {

  const [workData, setWork] = useState(null);
  const [toggleOn, setToggleOn] = useState(false);
  const [events, setEvents] = useState([]);

  const handleChange = () => {
    setToggleOn((prevToggle) => !prevToggle);
  };

  // const events = [
  //   { title: 'Meeting', start: new Date() }
  // ]

  useEffect(() => {
    createClient.fetch(
      `*[_type == "workshopsPage"]{
        backgroundImage,
        mainHeading,
        mainBlurb,
        workshops[]{
          workshops-> {
            image,
            description,
            title,
            name,
            dateTime,
            button
          }
        },
    }`
    )
      .then(
        (data) => setWork(data)
      )
      .catch(console.error);
  }, []//dependency array 
  )

  useEffect(() => {

    if (workData) {
      const newEvents = workData[0].workshops.map(item => ({
        title: item.workshops.title,
        date: new Date(item.workshops.dateTime),
      }));
  
      setEvents(newEvents);
      console.log(events);
    }
  }, [workData]); // Update events whenever workshopsData changes




  return (
    <ThemeProvider theme={appTheme}>
      {workData && (

        <div justifyContent="center" alignItems="center" style={{ position: "relative", height: "100vh", justifyContent: 'center', alignItems: 'center' }}>
          <Grid component="main" sx={{ height: "60vh", backgroundImage: `url(${urlFor(workData[0].backgroundImage).url()})`, backgroundSize: 'cover' }}>
            <NavBar />
          </Grid>

          <Grid item xs sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}>
            <Grid sx={{ height: "auto", width: "55%", mt: 10, mb: 7 }}>
              <Grid container justifyContent="center" alignItems="center">
                <CssBaseline />
                <Grid container direction="row" md={6.5} xs={9} sx={{ justifyContent: "center" }}>
                  <Typography variant="h1" sx={{ fontSize: 40, color: appTheme.palette.primary.green1 }}>{workData[0].mainHeading}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ fontSize: 20, color: appTheme.palette.primary.space, textAlign: "center", mb: 3 }}>{workData[0].mainBlurb}</Typography>
            </Grid>
          </Grid>




          <Grid container spacing={2} sx={{ width: "78%", margin: "0 auto", }} justifyContent="space-between">
            {/* First Grid Item */}
            <Grid item xs sx={{

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",  // Align text to the left
              justifyContent: "center",
              margin: "auto",
              paddingLeft: "0px",
              paddingBottom: 6,

            }}>
              <Grid sx={{ height: "auto", paddingLeft: "0px", }}>
                <Grid container justifyContent="center" alignItems="center">
                  <CssBaseline />
                  <Typography variant="h1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: 26,
                    color: "#252A34",
                    fontWeight: 500,
                    padding: 0,
                    mb: 0
                  }}>
                    <span style={{ paddingRight: 17, paddingLeft: 0, }}>Upcoming Workshops</span>
                    <img width={45} src={require('../images/decor.png')} alt="decor" />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Second Grid Item (Toggle) */}
            <Grid item xs sx={{ textAlign: 'right' }}> {/* Align the switch to the right */}
              <FormControlLabel
                value="start"
                control={<Switch color="primary" onChange={handleChange} />}
                label="Calendar View"
                labelPlacement="start"
              />
            </Grid>
          </Grid>

          {toggleOn ?

            <Grid sx={{
              width: "78%",
              margin: "0 auto",
              mb: 12
            }}>

              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                eventColor={appTheme.palette.primary.green1}
              />

            </Grid>



            :

            <Grid item sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "78%",
              margin: "auto",
              mb: 12
            }}>
              <Grid container spacing={5}>
                {workData[0].workshops.map((items) => (
              
                  <Grid item xs>
                    <Card
                      sx={{
                        backgroundColor: appTheme.palette.primary.white,
                        width: 340,
                        height: 520,
                        borderRadius: 1,
                        margin: "auto",
                        display: "flex",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <img height={20} style={{ "border-bottom": "7px solid #B6F599" }} src={urlFor(items.workshops.image).url()} />
                      </div>

                      <Grid sx={{ paddingLeft: 3 }}>
                        <Typography variant="h2" sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          fontSize: 17,
                          fontWeight: 500,
                          color: '#999999',
                          fontWeight: 350,
                          padding: 0,
                          mb: 2,
                          mt: 2
                        }}>
                          <PersonIcon sx={{ marginRight: 1 }}></PersonIcon>
                          <span style={{ paddingRight: 17 }}>{items.workshops.name}</span>
                          <CalendarMonthIcon sx={{ marginLeft: 3, marginRight: 1 }}></CalendarMonthIcon>
                          <span style={{ paddingRight: 17 }}> {moment(items.workshops.dateTime).format('YYYY-MM-DD')}</span>
                        </Typography>
                      </Grid>

                      <div style={{ "padding-left": "30px" }}>
                        <div>
                          <Typography
                            variant="h1"
                            sx={{ fontWeight: 550, padding: 0, fontSize: 22, mb: 2 }}
                          >
                            {items.workshops.title}
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h2"
                            sx={{ fontSize: 17, mb: 1, width: "90%" }}
                          >
                            {items.workshops.description}
                          </Typography>
                        </div>
                      </div>

                      <Grid>
                      <Link to={items.workshops.button} style={{ textDecoration: 'none' }}>
                        <Button
                          width="150"
                          height="20"
                          variant="contained"
                          disableElevation
                          sx={{
                            ml: 3, mb: 4, mt: 2, color: appTheme.palette.primary.white, fontSize: 15, fontWeight: 500,
                            backgroundColor: appTheme.palette.primary.green2, borderRadius: .7, height: 35,
                            '&:hover': {
                              fontWeight: 700
                            },
                          }}>
                          Learn More
                        </Button>
                        </Link>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>



          }














          <BottomBar />
        </div>
      )}
    </ThemeProvider>



  )
}
