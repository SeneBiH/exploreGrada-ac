import React from "react";
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import heroImg from "../assets/hazna4.JPEG"
import Footer from "../components/Footer";
import MapboxMap from "../components/MapboxMap";


function Locations () {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={heroImg}
        title="Locations"
        btnClass="hide"
      />
      {/* Render the MapboxMap component here */}
      <MapboxMap />
      <Footer />
    </>
  );
}


export default Locations;
