import React from "react";
import SiteNav, { ContentGroup } from "react-site-nav";
// import {
//   Switch,
//   Link,
//   Route,
//   BrowserRouter,
//   withRouter
// } from "react-router-dom";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import MenuIcon from '@mui/icons-material/Menu';

import Link from "../../components/Link";
import { appTheme } from "../Theme.js";
import { ThemeProvider } from "@mui/material/styles";

import Route from "../../components/Route";

import "./navBar.css";

export default function NavBar() {
  const [showModal, setShowModal] = React.useState(false);
  const pages = ['ABOUT', 'HOW WE HELP', 'GET INVOLVED', 'ASPIRE', 'DONATE', 'CONTACT'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <AppBar position="static" elevation={0}  sx={{ backgroundColor: 'transparent' }}>
      <div className="container-fluid">
        <header>
          <div className="logo">
            <Link href="/">
              <img
                alt={"logo"}
                src={require('../images/bigaustinlogo.png')}
              />
            </Link>
          </div>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <div className="menubutton">
              <IconButton className="icon"  
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>

            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>



          <SiteNav color="white" fontWeight="bold" background="transparent" align="right" fontFamily="League Spartan, sans-serif" rowHeight="100">
            <ContentGroup className="link-class" title="ABOUT" width="170" height="125">
              <ul>
                <li>
                  <Link href="/about">
                    About BiGAUSTIN
                  </Link>
                </li>
                <li>
                  <Link href="/ourimpact">
                    Our Impact
                  </Link>

                </li>
                <li>
                  {/* <Link to="/link-2">Our Team</Link> */}
                  <Link href="/dreamteam">
                    Our Team
                  </Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="HOW WE HELP" width="170" height="240">
              <ul>
                <li>
                  {/* <Link to="/link-2">Services</Link> */}
                  <Link href="/services">
                    Services
                  </Link>
                </li>
                <li>
                  {/* <Link to="/link-2">Services</Link> */}
                  <Link href="/programs">
                    Programs
                  </Link>
                </li>
        
                <li>
                  {/* <Link to="/link-2">Workshops</Link> */}
                  <Link href="/consulting">
                    Consulting
                  </Link>
                </li>
                <li>
                  {/* <Link to="/link-2">Workshops</Link> */}
                  <Link href="/lending">
                    Lending
                  </Link>
                </li>
                <li>
                  {/* <Link to="/link-2">Workshops</Link> */}
                  <Link href="/education">
                    Education
                  </Link>
                </li>
                <li>
                  {/* <Link to="/link-2">Workshops</Link> */}
                  <Link href="/womensbiz">
                    Women's Biz Inc
                  </Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="GET INVOLVED" width="170" height="130">
              <ul>
                <li>
                  {/* <Link to="/link-2">Volunteer</Link> */}
                  <Link href="/volunteer">
                    Volunteer
                  </Link>
                </li>
                <li>
                  {/* <Link to="/link-2">Partner</Link> */}
                  <Link href="/partner">
                    Partner
                  </Link>
                </li>
                <li>
                  {/* <Link to="/link-2">Contact Us</Link> */}
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </ContentGroup>
            <ContentGroup title="ASPIRE" rootURL="/" />
            <ContentGroup title="DONATE" rootURL="/" background="white" />

            <ContentGroup title="CONTACT" rootURL="/contactus" background="appTheme.palette.primary.white" />

          </SiteNav>
        </header>
      </div>
      </AppBar>
    </ThemeProvider>
  );
}
