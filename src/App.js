import React, { Component } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid justify-items-center bg-purple-100">
          <h1>React SPA</h1>
          <div className="flex">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-900" : "text-blue-300"
              }
              to={`/`}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-900" : "text-blue-300"
              }
              to={`/about`}
            >
              About
            </NavLink>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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
    );
  }
}

export default App;
