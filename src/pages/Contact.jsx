import React, { useEffect, useState } from "react";

import ContactUs from "../sections/ContactUs";

const Contact = () => {
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
    <div className="contact-page">
      <ContactUs />
    </div>
    </main>
  );
};

export default Contact;
