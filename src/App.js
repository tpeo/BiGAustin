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
import Impact from './components/pages/Impact.js';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                console.log("going to home");
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/ourimpact"} element={<Impact />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
