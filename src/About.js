import React from "react";
import about from './about.png'
import Common from "./Common";



const About = () => {
    return (
     <>
       <Common

         name="Welcome to about Page "
         imgsrc={about}
         visit='/contact'
         btname='Contact Us'
       
       />
     </>
    );
  };
  
  export default About;