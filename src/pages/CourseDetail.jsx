import React, { useEffect, useState } from "react";
import course2 from "../assets/course2.png";
import { syllabus } from "../constants/courseCardDetail";
import { Link } from "react-router-dom";

const CourseDetailPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleOpenSection = (title) => {
    // if clicked section is already opened then close and vice-versa
    setOpenSection(openSection === title ? null : title);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between p-6 lg:p-12 bg-white">
      {/* Main Content */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-black my-4">
          The <span className="text-orange-600">Frontend Development</span>{" "}
          Bootcamp with React 2024
        </h1>
        <p className="text-lg text-gray-800 mb-2">
          Created by{" "}
          <span className="font-semibold text-black">Tom Holland</span>
        </p>
        <p className="text-gray-800 mb-8">
          Last updated: August 2024 · Language: English · Duration: 12 Weeks
        </p>

        {/* Course Description */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            Course Description
          </h2>
          <p className="text-gray-800 md:w-2/3 mb-4">
            This course is designed to take you from a beginner to an advanced
            level in Frontend Development with React, one of the most popular
            JavaScript libraries for building user interfaces. Learn how to
            build dynamic web applications, manage state effectively, and
            leverage React's ecosystem to become a proficient developer.
          </p>
        </div>

        {/* What you'll learn */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            What you'll learn
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Basics of HTML5, CSS3 and Modern Javascript</li>
            <li>Basics of Framework & Libraries</li>
            <li>Understand component-based architecture</li>
            <li>Build modern web applications using React</li>
            <li>Deploy applications with modern tools and workflows</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            Course Syllabus
          </h2>
          {syllabus.map((data) => (
            <div key={data.title} className="">
              <h3
                className="font-bold border p-1 md:w-2/3 cursor-pointer"
                onClick={() => handleOpenSection(data.title)}
              >
                {data.title}
              </h3>
              <div
                className={`font-normal p-1 text-gray-800 overflow-hidden 
                  ${openSection === data.title ? "h-auto" : "h-0"} 
                `}
              >
                <p>{data.child1}</p>
                <p>{data.child2}</p>
                <p>{data.child3}</p>
                <p>{data.child4}</p>
                <p>{data.child5}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>A strong will to learn new things</li>
            <li>A computer with internet access</li>
            <li>IDE or text editor</li>
            <li>Modern Browser with Dev Tools Extensions</li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 lg:ml-10 mt-8 lg:mt-0 lg:sticky lg:top-40 lg:self-start">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <img
            src={course2}
            alt="Course Cover"
            className="w-full mb-4 rounded-lg"
          />
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-red-600">$49.99</span>
            <span className="line-through text-gray-800">$99.99</span>
          </div>

          <Link
            to="/checkout"
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-base px-10 py-4 text-center mr-2 mb-2 w-full flex justify-center items-center"
          >
            Enroll Now
          </Link>
          <p className="text-gray-800 text-center mt-6">
            30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Course includes */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">This course includes:</h3>
          <ul className="list-none text-gray-800 space-y-2 ">
            <li>15 hours of video content</li>
            <li>10 downloadable resources</li>
            <li>Full lifetime access</li>
            <li>Access on mobile and TV</li>
            <li>Certificate of completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
