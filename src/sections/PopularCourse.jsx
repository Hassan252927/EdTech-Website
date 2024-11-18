import React, { useState } from "react";
import { courseCardDetail } from "../constants/courseCardDetail";
import { Link } from "react-router-dom";
import CardCourse from "../components/CardCourse";

const PopularCourse = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null); // State to track hovered course

  return (
    <section className="px-20 pt-6 pb-10 max-sm:p-2">
      <h1 className="font-extrabold text-6xl text-center py-20 max-sm:text-3xl max-sm:p-2 max-md:text-5xl">
        Popular <span className="text-orange-600">Courses</span>
      </h1>
      <div className="grid gap-4 xl:gap-8 rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courseCardDetail.map((detail) => (
          <div
            key={detail.key}
            className="relative overflow-hidden transition-transform duration-300 border shadow-md rounded-lg hover:scale-105 hover:bg-orange-100 hover:shadow-2xl transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setHoveredCourse(detail.id)} // Set hovered course
            onMouseLeave={() => setHoveredCourse(null)} // Reset when mouse leaves
          >
            <CardCourse
              id={detail.id}
              courseBanner={detail.courseBanner}
              courseTitle={detail.courseTitle}
              author={detail.author}
              hovered={hoveredCourse === detail.id} // Pass hovered state to CardCourse
            />
          </div>
        ))}
      </div>
      <div className="p-10 flex justify-center items-center max-sm:p-6">
        <Link
          to="/courses"
          className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
        >
          Browse More Courses
        </Link>
      </div>
    </section>
  );
};

export default PopularCourse;
