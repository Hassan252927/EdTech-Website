import React from "react";
import image from "../assets/course2.png";
import { stats } from "../constants/courseCardDetail";

const AboutUs = () => {
  return (
    <section className="relative w-full flex flex-col py-20 px-10 bg-gray-100 rounded-3xl max-sm:p-0">
      {/* Background Gradient with Blur */}
      <div
        className="absolute inset-0 blur-xl h-full"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(255, 105, 180, 0) 20.79%, rgba(123, 104, 238, 0.26) 40.92%, rgba(72, 61, 139, 0) 70.35%)", // Custom Gradient Colors
        }}
      ></div>

      {/* Upper content */}
      <div className="flex justify-center items-center max-lg:flex-col relative z-10">
        {/* Image */}
        <div>
          <img
            src={image}
            alt="image"
            width={700}
            height={700}
            className="object-cover rounded-2xl relative z-0"
          />
        </div>
        {/* Content */}
        <div className="w-[80%] m-10 max-sm:m-4 sm:w-[80%]">
          <h1 className="font-extrabold text-center text-6xl m-10 max-sm:text-4xl max-sm:m-0">
            About <span className="text-orange-600">Us</span>
          </h1>
          <p className="pt-4 text-center text-xl max-sm:text-lg">
            We are a proud EdTech company dedicated to transforming education through innovative
            technology and engaging learning experiences. Our mission is to empower learners and educators
            worldwide by making quality education accessible, personalized, and impactful.
          </p>
        </div>
      </div>

      {/* Lower content */}
      <div className="flex justify-center items-center max-lg:flex-wrap relative z-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex justify-center items-center bg-white flex-col rounded-2xl mt-10 m-2 px-6 py-2 lg:px-8 lg:py-4"
          >
            <h1 className="font-extrabold text-4xl text-orange-600 max-sm:text-3xl">
              {stat.title}
            </h1>
            <h2 className="text-lg lg:text-xl">{stat.subtitle}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
