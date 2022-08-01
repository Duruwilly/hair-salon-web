import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dropdown from "./components/Dropdown";
import Booking from "./components/page/Booking";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Dropdown />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route
            path="*"
            element={
              <main className="p-4 text-white">
                <p>sorry you seems to have entered an invalid url</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
