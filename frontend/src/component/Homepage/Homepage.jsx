import React from "react";
import Navbar from "../Navbar/Navbar";
import Background from "../Images/Background";
import Section2 from "../Section/Section2";
import Section3 from "../Section/Section3";
import Section4 from "../Section/Section4";
import Footer from "../Footer/Footer";
import Section1 from "../Section/Section1";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Homepage;