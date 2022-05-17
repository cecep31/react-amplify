import React, { Component } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <div className="grid justify-items-center ">
        
          
          <div className="mt-4 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
