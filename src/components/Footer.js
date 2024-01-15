import "./FooterStyles.css"
import React from "react";

const Footer = () => {
return(
    <div className="footer">
        <div className="top">
            <div>
                <h1>exploreGradačac</h1>
                <p>Grad Zmaja od Bosne</p>
                
            </div>
            <div>
                <a href ="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href ="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                
                
            </div>
        </div>

        <div className="bottom">
            <div>
            <h4>exploreGradačac</h4>
           
        </div>
        <div>
            <h4>Links</h4>
            <a href="/">Home</a>
            <a href="/locations">Locations</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>

        </div>
    </div>
    </div>
) 

}

export default Footer;