import React from "react";
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import heroImg from "../assets/hazna3.JPEG"
import Footer from "../components/Footer";

function Home () {
    return(
       <>
       <Navbar/>
      <Hero

      cName="hero"
      heroImg={heroImg}
      title="Welcome to Gradačac"
      text="Grad Zmaja od Bosne"
      buttonText="What to visit?"
      url="/"
      btnClass="show"
      
      
      
      />
       <Footer/>
       </>
    )
   }
   
   export default Home;