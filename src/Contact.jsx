import "./Contact.css"
import React, { useState } from "react";
function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      // Handle input changes
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch("http://localhost:5000/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert("Your inquiry has been sent!");
            setFormData({ name: "", email: "", message: "" }); // Reset form
          } else {
            alert("Failed to send your inquiry.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while sending your inquiry.");
        }
      };
    
    return (   
        <>
        <div id="contact" className="Contact-Container">
           <div className="form-box">
             <p>
                GET IN TOUCH
             </p>
             <h1>
             I'm here to connect and collaborate!
             </h1>
            
      <form onSubmit={handleSubmit} >
        <label >
          Name: <span style={{ color: "red" }}> *</span>
          <br></br>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
           
            required
          />
        </label>
        <br></br>
        <label >
          Email:<span style={{ color: "red" }}> *</span>
          <br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          
            required
          />
           <br></br>
        </label>
        <label >
          Message: <span style={{ color: "red" }}> *</span>
          <br></br>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          
            required
          ></textarea>
        </label>
        <br></br>
        <label >
    <input className="abcd-bff"
      type="checkbox"
      
      required/>
    I allow this website to store my submission so they can respond to my inquiry. <span style={{ color: "red" }}> *</span>
  </label>
  <br></br>
        <button type="submit" >SUBMIT</button>
      </form>
           </div>



           <div className="details-box">
           <h2 className="txt-1">Get in touch</h2>
      <p>
        📞 <a href="tel:+6355446829" className="phn-box">635-544-6829</a>
      </p>
      <p>
        📧{" "}
        <a href="mailto:mayurrrp29@gmail.com" className="phn-box">
          mayurrrp29@gmail.com
        </a>
      </p>

      <h3 className="txt-1">Location</h3>
      <p>
        📍{" "}
        <a
          href="https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India/"
          target="_blank"
          rel="noopener noreferrer"
         className="phn-box"
        >
          Ahmedabad, GJ IN
        </a>
      </p>

      <h3 className="txt-1">Hours</h3>
    <p className="txt-2">
    Monday	9:00am	–	10:00pm <br></br>
Tuesday	9:00am	–	10:00pm <br></br>
Wednesday	9:00am	–	10:00pm<br></br>
Thursday	9:00am	–	10:00pm <br></br>
Friday	9:00am	–	10:00pm<br></br>
Saturday	9:00am	–	6:00pm<br></br>
Sunday	9:00am	–	12:00pm<br></br>
    </p>
           </div>
        </div>

        </>
    );
}
export default Contact