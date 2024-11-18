import React, { useEffect, useState } from "react";

import Testimonial from "../sections/Testimonial";
import PopularCourse from "../sections/PopularCourse";
import Newsletter from "../sections/Newsletter";
import WhyUs from "../sections/WhyUs";
import Faqs from "../sections/Faqs";
import Hero from "../sections/Hero";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the smooth page load effect by updating the state after a brief delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay to allow the page to 'load' before transitioning in (adjust as needed)
    
    window.scrollTo(0, 0); // Ensure page scrolls to the top

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
      <Hero />
      <WhyUs />
      <PopularCourse />
      <Testimonial />
      <Faqs />
      <Newsletter />
    </main>
  );
};

export default Home;
