import React, { useEffect, useState } from "react";
import AboutUs from "../sections/AboutUs";
import Faqs from "../sections/Faqs";
import TeamSection from "../sections/TeamSection";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);

    // Simulate a page load delay and trigger the animation after 500ms
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
      <AboutUs />
      <TeamSection />
      <Faqs />
    </main>
  );
};

export default About;
