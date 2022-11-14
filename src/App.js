/*import logo from './logo.svg';*/
import './App.css';
import "antd/dist/antd.css";
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";


import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Impact from './components/pages/Impact.js';
import DreamTeam from './components/pages/DreamTeam.js';
import Partners from './components/pages/Partners.js';
import Services from './components/pages/Services.js';
import Workshops from './components/pages/Workshops.js';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                console.log("going to home");
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/about"} element={<About />} />
                  <Route path={"/ourimpact"} element={<Impact />} />
                  <Route path={"/dreamteam"} element={<DreamTeam />} />
                  <Route path={"/partners"} element={<Partners />} />
                  <Route path={"/services"} element={<Services />} />
                  <Route path={"/workshops"} element={<Workshops />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
