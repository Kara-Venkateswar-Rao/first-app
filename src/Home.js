import React from "react";
import home from './home.png'
import Common from "./Common";
const Home = () => {
    return (
     <>
        <Common
            name=" Grow your business with "
            imgsrc={home}
            visit='/service'
            btname='Get started'
        />
     </>
    );
  };
  
  export default Home;