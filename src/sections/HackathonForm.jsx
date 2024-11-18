import React, { useState } from "react";
import axios from "axios";
import hack from "../../src/assets/hac.jpg";

const HackathonForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    currentRole: "",
    organization: "",
    fieldOfStudy: "",
    graduationYear: "",
    linkedin: "",
    teamName: "",
    teamMembers: "",
    skills: "",
    projectIdea: "",
    github: "",
    tShirtSize: "",
    portfolio: "",
    codeOfConduct: false,
    photographyConsent: false,
    dataPrivacy: false,
    referralSource: "",
    previousHackathon: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5173/submit-form",
        formData
      );
      alert(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <section className="relative py-28 bg-gray-900">
      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-600 sm:px-4 md:px-8">
        {/* Left Column: Image and Details */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="bg-black p-6 h-auto lg:h-[120hv] rounded-lg shadow-lg flex flex-col justify-center">
            <h1 className="text-5xl p-10 text-cyan-400 font-extrabold text-center max-md:text-4xl">
              HACK-A-THON TITLE
            </h1>
            <img
              src={hack}
              alt="Hackathon"
              className="w-full max-lg:w-2/3 mx-auto rounded-lg mb-8"
            />
            <div className="text-center">
              <h3 className="text-cyan-400 font-semibold text-3xl">
                Hackathon Details
              </h3>
              <p className="text-white text-lg">Location: Johar Venue, Lahore</p>
              <p className="text-white text-lg">Date: November 17, 2024</p>
              <p className="text-white text-lg">Time: 10:00 AM - 6:00 PM</p>
              <p className="text-white text-lg">
                Join us for a day of innovation and creativity!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg px-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Fill the form to participate in the upcoming Hackathon
            </h2>
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Personal Information
              </h2>

              <div>
                <label className="font-medium text-black text-black">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                >
                  <option className = "text-black" value="">Select Gender</option>
                  <option className = "text-black" value="Male">Male</option>
                  <option className = "text-black" value="Female">Female</option>
                  <option className = "text-black" value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Professional/Academic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Professional/Academic Information
              </h2>

              <div>
                <label className="font-medium text-black">Current Role</label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">
                  Organization/University/School Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">Field of Study or Work</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">
                  Year of Graduation (if applicable)
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">
                  LinkedIn Profile (optional)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Hackathon-Specific Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Hackathon-Specific Information
              </h2>

              <div>
                <label className="font-medium text-black">
                  Team Name (if registering as part of a team)
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">
                  Team Members (Name, Email, Role in the team)
                </label>
                <textarea
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  rows="3"
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">Skills/Expertise</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">
                  Project Idea/Concept (Brief description)
                </label>
                <textarea
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  rows="4"
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium text-black">GitHub Profile (optional)</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Goodies & Notices */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Goodies & Notices
              </h2>

              <div>
                <label className="font-medium text-black">T-Shirt Size</label>
                <select
                  name="tShirtSize"
                  value={formData.tShirtSize}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                >
                  <option value="">Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>

              <div>
                <label className="font-medium text-black">Portfolio Website</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-gray-700 focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Legal and Consent */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Legal and Consent
              </h2>

              <div className="flex items-center text-black text-black">
                <input
                  type="checkbox"
                  name="codeOfConduct"
                  checked={formData.codeOfConduct}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-gray-700 font-medium">
                  Agreement to Code of Conduct
                </label>
              </div>

              <div className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="photographyConsent"
                  checked={formData.photographyConsent}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-gray-700 font-medium">
                  Consent for Photography/Videography
                </label>
              </div>

              <div className="flex items-center text-black">
                <input
                  type="checkbox"
                  name="dataPrivacy"
                  checked={formData.dataPrivacy}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-gray-700 font-medium">
                  Data Privacy Agreement
                </label>
              </div>
            </div>

            {/* Other Optional Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Other Optional Information
              </h2>

              <div>
                <label className="block text-black font-medium">
                  Referral Source (How did you hear about the hackathon?)
                </label>
                <input
                  type="text"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block flex text-black font-medium">
                  Previous Hackathon Experience
                </label>
                <select
                  name="previousHackathon"
                  value={formData.previousHackathon}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-700"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label className="block flex text-black font-medium">
                  Emergency Contact Information
                </label>
                <textarea
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  rows="2"
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-700 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 font-bold rounded-lg text-sm px-6 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HackathonForm;
