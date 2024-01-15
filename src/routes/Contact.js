import React from "react";
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import heroImg from "../assets/kula.JPEG"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact () {
    return(
       <>
       <Navbar/>
      <Hero

      cName="hero-mid"
      heroImg={heroImg}
      title="Contact"
      btnClass="hide"
      
      
      />
      <ContactForm/>
       <Footer/>
       </>
    )
   }
   
   export default Contact;