import React, { useEffect } from "react";

import Testimonial from "../sections/Testimonial";
import PopularCourse from "../sections/PopularCourse";
import Newsletter from "../sections/Newsletter";
import WhyUs from "../sections/WhyUs";
import Faqs from "../sections/Faqs";
import Hero from "../sections/Hero";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main>
      <Hero />
      <WhyUs />
      <PopularCourse />
      <Testimonial />
      <Newsletter />
      <Faqs />
    </main>
  );
};

export default Home;
