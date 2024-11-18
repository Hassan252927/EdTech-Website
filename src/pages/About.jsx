import React, { useEffect } from "react";
import AboutUs from "../sections/AboutUs";
import Faqs from "../sections/Faqs";
import TeamSection from "../sections/TeamSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <AboutUs />
      <TeamSection />
      <Faqs />
    </>
  );
};

export default About;
