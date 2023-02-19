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
import Services from './components/pages/Services.js';
import Workshops from './components/pages/Workshops.js';
import Partners from './components/pages/Partners.js';
import DreamTeam from './components/pages/DreamTeam.js';
import BizInc from './components/pages/BizInc.js';

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
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
