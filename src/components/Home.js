import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import BookingAd from "./BookingAd";
import Pricing from "./Pricing";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BookingAd />
      <Pricing />
      <ScrollToTop />
    </>
  );
};

export default Home;
