import "./Footer.css";
import React from "react";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
function Footer(){
    return (
        <footer>
           <div className="footer-content">
           <div className="footer-part1">MAYUR PANCHAL PORTFOLIO</div>
           <div className="footer-part2">
            <p style={{color:"white"}}>Location</p>
            <a
          href="https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India/"
          target="_blank"
          rel="noopener noreferrer"
         className="footer-link"

        >
          Ahmedabad, GJ IN
        </a>
           </div>
            <div className="f3">
            <p style={{color:"white"}}>Reach out</p> <br></br>
            <a href="tel:+6355446829"   className="footer-link" >635-544-6829</a><br></br>
            <a href="mailto:mayurrrp29@gmail.com"   className="footer-link" ><br></br>
          mayurrrp29@gmail.com
        </a>
        </div>
           </div>
         <div className="footer-bottom">
           <p className="footer-bottom-text">
           © {new Date().getFullYear()} mayurpanchal. All rights reserved.
           </p>
           </div>
        </footer>
    )
}
export default Footer;