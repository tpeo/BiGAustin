//import "./NewEvent.css";
import { useEffect, useState, Fragment } from "react";

import NavBar from "../NavBar/NavBar.js";
//import Topbar from "../NavBar/Navbar.js/index.js";

export default function Home(props) {
  console.log('in new event');

  return (
    <Fragment>
      {/* <navBar/> */}
      <div id="new_event_container">
        {/* <h2 id= "New_Event_Header"> Meeting Manager</h2> */}
            {/* <NavBar/> */}
            <NavBar/>
        </div>
    </Fragment>
  )
}
