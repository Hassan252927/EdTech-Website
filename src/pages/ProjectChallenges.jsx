import React, { useEffect } from "react";
import img from "../assets/profile1.png";

const ProjectChallenges = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" bg-red-400 p-2 lg:px-40 lg:py-10 w-full">
      <h1 className="p-10 text-center text-5xl max-sm:text-4xl font-bold">
        My Profile
      </h1>
      {/* image, name, professions */}
      <div className="flex justify-start items-center rounded-2xl mx-10 bg-white shadow-xl max-sm:mx-1 max-sm:my-2">
        <img
          src={img}
          alt="profile"
          className="ml-10 w-[20%] max-sm:p-1 md:p-4 object-cover rounded-full
           "
        />
        <div className="p-2 text-left">
          <p className="pt-2 font-bold text-3xl max-md:text-2xl">Tom Holland</p>
          <p className="pb-2 font-semibold text-xl max-md:text-lg">
            Web Engineer
          </p>
        </div>
      </div>
      {/* personal information */}
      <div className="bg-white m-10 p-4 max-sm:m-1 rounded-xl shadow-xl ">
        <h1 className="py-10 px-4 text-left text-3xl font-bold">
          Personal Information
        </h1>
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          <div className="p-4">
            <p className="font-medium text-gray-700 text-base">First Name</p>
            <p className="font-semibold text-lg">Tom</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700 text-base">last Name</p>
            <p className="font-semibold text-lg">Holland</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700 text-base">Email address</p>
            <p className="font-semibold text-lg">tomholland@example.com</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700 text-base">Phone Number</p>
            <p className="font-semibold text-lg">+91 9876543210</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700 text-base">Bio</p>
            <p className="font-semibold text-lg">Student Mentor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectChallenges;
