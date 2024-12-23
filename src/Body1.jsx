import "./Body1.css"; 
import React from "react";
import SecondScreen from "./SecondScreen";
import SkillsScreen from "./SkillsScreen";
import Contact from "./Contact";
import Footer from "./Footer";

function Body1(){
    return (
     <>
     <div className="main-container">
     <section id="home" className="hero-section">
      <div className="hero-content">
      <div className="typicalclasses">
      <h1>Hello, I'm Mayur</h1>
    </div>
        <p style={{color:"white"}}>Discover my skills and projects.</p>
        <a href="#services" className="btn">View Services</a>
      </div>
     <div className="image-mayur">
     <img src="mayurimage1.jpg" alt="Italian Trulli" className="round-image"></img>
     </div>
    </section>
    <SecondScreen></SecondScreen>
    <SkillsScreen></SkillsScreen>
    <Contact></Contact>
    <Footer></Footer>
    </div>
     </>
    );
}

export default Body1