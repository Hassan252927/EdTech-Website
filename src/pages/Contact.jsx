import React, { useEffect } from "react";
import ContactUs from "../sections/ContactUs";
import Faqs from "../sections/Faqs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactUs />
      <Faqs />
    </>
  );
};

export default Contact;
