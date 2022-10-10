/*import logo from './logo.svg';*/
import './App.css';
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";


import Home from './components/pages/Home.js';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                console.log("going to home");
                  <Route path={"/"} element={<Home />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
