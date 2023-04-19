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
import Consulting from './components/pages/Consulting.js';
import About from './components/pages/About.js';
import Impact from './components/pages/Impact.js';
import Services from './components/pages/Services.js';
import Workshops from './components/pages/Workshops.js';
import Partners from './components/pages/Partners.js';
import DreamTeam from './components/pages/DreamTeam.js';
import BizInc from './components/pages/BizInc.js';
import Education from './components/pages/Education.js';
import StartSmart from './components/pages/Programs/startSmart.js'
import Programs from './components/pages/Programs/Programs.js'
import CityOfAustinCreatives from './components/pages/Programs/cityOfAustinCreatives.js';
import JobSkills from './components/pages/Programs/jobSkills.js';
import WBI from './components/pages/Programs/wbi';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                console.log("going to home");
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/about"} element={<About />} />
                  <Route path={"/ourimpact"} element={<Impact />} />
                  <Route path={"/services"} element={<Services />} />
                  <Route path={"/workshops"} element={<Workshops />} />
                  <Route path={"/partners"} element={<Partners />} />
                  <Route path={"/dreamteam"} element={<DreamTeam />} />
                  <Route path={"/bizinc"} element={<BizInc />} />
                  <Route path={"/education"} element={<Education />} />
                  <Route path={"/consulting"} element={<Consulting />} />
                  <Route path={"/startSmart"} element={<StartSmart />} />
                  <Route path={"/cityOfAustinCreatives"} element={<CityOfAustinCreatives />} />
                  <Route path={"/jobSkills"} element={<JobSkills />} />
                  <Route path={"/wbi"} element={<WBI />} />
                  <Route path={"/programs"} element={<Programs />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
