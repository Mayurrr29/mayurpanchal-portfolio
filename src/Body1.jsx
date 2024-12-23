import "./Body1.css"; 
import React from "react";
import SecondScreen from "./SecondScreen";
import SkillsScreen from "./SkillsScreen";
import Contact from "./Contact";
import Footer from "./Footer";
import Typical from "react-typical";
function Body1(){
    return (
     <>
     <body>
     <section id="home" className="hero-section">
      <div className="hero-content">
      <div className="typicalclasses">
      <Typical
      steps={['HELLO,', 2000, 'Welcome to My Portfolio!', 1500]}
      loop={Infinity}
      wrapper="div"
    />
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
    </body>
     </>
    );
}

export default Body1