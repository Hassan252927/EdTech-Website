import React from "react";
import { Link } from "react-router-dom";

const CardCourse = ({ courseBanner, courseTitle, author }) => {
  return (
    <div className="flex flex-col justify-between shadow-lg hover:shadow-2xl border w-full rounded-3xl">
      {/* image */}
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={courseBanner}
          alt="course image"
          className="w-full h-full object-cover rounded-t-3xl hover:scale-105 transition"
        />
      </div>
      {/* content */}
      <div className="p-6">
        {/* text */}
        <div className="p-4">
          <p className="overflow-hidden text-2xl font-semibold">{courseTitle}</p>
          <p className="overflow-hidden text-sm">
            A Course Made with love and affection for you so you can 
            master any field of your choice !!
          </p>
          <p className="py-2 text-sm font-semibold text-gray-500 hover:text-gray-700">{author}</p>
        </div>
        {/* buttons, tags */}
        <div className=" ">
          <div className="text-center text-sm flex max-md:flex-col p-2 w-full max-md:w-1/2">
            <p className="rounded-full bg-green-100 m-1 px-2 py-0.5 text-green-700">
              Advance level
            </p>
            <p className="rounded-full bg-blue-100 m-1 px-2 py-0.5 text-blue-700">
              160 Enrolled
            </p>
          </div>
          <Link
              to="/detail"
              className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-bold rounded-lg text-sm px-8 py-2.5 text-center m-4"
            >
              Enroll Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
