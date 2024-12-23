import "./SecondScreen.css"
import React from "react";
function SecondScreen(){
    return(
        <>
        <div id="about" className="Second-section">
            <h4>MEET MAYUR PANCHAL <br></br></h4>
            <br></br>
            <p className="title-intro">A PASSIONATE FULL-STACK DEVELOPER </p> 

            <div className="content">
    <p className="about-me">I am a passionate and dedicated Full Stack Developer with 
        expertise in the MERN (MongoDB, Express.js, React.js, and Node.js) stack. 
        I have a strong grasp of front-end and back-end development, enabling me to create dynamic,
         responsive, and user-friendly web applications. My ability to integrate APIs, optimize 
         performance, and focus on delivering seamless user experiences ensures that the 
         solutions I build meet modern industry standards.
<br></br>Beyond my full-stack expertise, I have a solid foundation in programming languages
 such as Java and Python, which allow me to solve complex problems efficiently and develop 
 versatile software solutions. I am also proficient in working with databases, especially MySQL, 
 where I have experience in designing, querying, and maintaining structured data systems to ensure 
 application efficiency and scalability.
 <br></br>
I am constantly eager to learn new technologies and frameworks to stay updated 
in this ever-evolving tech world. With a passion for problem-solving and a keen eye for detail,
 I am committed to delivering impactful projects that add value and make a difference.

</p>
<div className="mern">
     <img src="https://synergytop.com/blog/wp-content/uploads/2021/07/MERN-1-1.png" alt="Italian Trulli" className="mern-image"></img>
     </div>
  </div>
        </div>
        </>
    );
}

export default SecondScreen