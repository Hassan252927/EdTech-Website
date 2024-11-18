import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";




const Banner = () => {
  const [isVisible, setIsVisible] = useState("true");

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
    isVisible && (
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
      <div className="bg-orange-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8">
          <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
            <div className="flex-none p-1.5 px-4 rounded-full bg-gray-800 flex items-center justify-center font-medium text-lg">
              News
            </div>
            <p className="font-medium p-2">
              Get Registered for the upcoming Hackathon{" "}
              <Link
                to="/hack"
                className="font-semibold underline text-black duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </p>
          </div>
          <button className="p-2 rounded-lg duration-150 hover:bg-orange-500" onClick={() => setIsVisible(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
    )
  );
};

export default Banner;
