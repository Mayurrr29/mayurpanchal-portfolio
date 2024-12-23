import React, { useEffect, useState } from 'react';
import "./SkillsScreen.css"
function SkillsScreen(){
  const [isVisible, setIsVisible] = useState(false);
    const images = [
        'reactimg.png',
        'nodejsimg.png',
        'images.jpg',
        'mongodbimg.png',
        'javaimg.png',
        'pythonimg.png',
        'mysqlimg.png',
        'htmlimg.png',
        'cssimg.png',
        'jsimg.png',
        'angularlogo.png',
        'flutterimg.png',
      ];

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              setIsVisible(true); // Set visible when section comes into view
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the section is in view
        );
    
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          observer.observe(gallerySection); // Observe the gallery section
        }
    
        return () => {
          if (gallerySection) {
            observer.unobserve(gallerySection); // Clean up observer on unmount
          }
        };
      }, []);
    
      
return(
    <>
    <div id="services" className="skills-section" >
    <h1 className="Skills">SKILLS KNOWN</h1>
   
    <div  id="gallery"  className={`gallery-container ${isVisible ? 'fadeIn' : ''}`}>
      
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`image-${index}`} />
        </div>
      ))}
    </div>
    </div>
    </>
);
}
export default SkillsScreen