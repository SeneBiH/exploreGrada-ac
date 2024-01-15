import React from "react";
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import heroImg from "../assets/hazna2.JPEG"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About () {
    return (
       <>
         <Navbar/>
      <Hero

      cName="hero-mid"
      heroImg={heroImg}
      title="History of Gradačac"
      btnClass="hide"
      
      
      />
      <AboutUs/>
      <Footer/>
       
       </>
    )
   }
   
   export default About;