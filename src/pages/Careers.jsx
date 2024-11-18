import React, { useState, useEffect } from "react";

const Careers = () => {
  const [hoveredJob, setHoveredJob] = useState(null); // State to track hovered job
  const [isLoaded, setIsLoaded] = useState(false); // State to trigger fade-in effect

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      location: "Remote",
      type: "Internship",
      description: "Join our dynamic team to build stunning user interfaces.",
      applyLink: "mailto:careers@edtech.com",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "San Francisco, CA",
      type: "Full-Time",
      description: "Work on scalable server-side applications and APIs.",
      applyLink: "mailto:careers@edtech.com",
    },
    {
      id: 3,
      title: "Content Creator",
      location: "Remote",
      type: "Part-Time",
      description: "Create engaging content to help students master digital skills.",
      applyLink: "mailto:careers@edtech.com",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top

    // Simulate a page load delay and trigger the fade-in effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay before fade-in effect

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
    <div className={`relative py-16 px-8 bg-gray-50 ${isLoaded ? "fade-in" : ""}`}>
      {/* Background gradient and blur */}
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(170.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>

      {/* Page Header */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Join Our <span className="text-orange-600">Team</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Explore our current job openings and help shape the future of EdTech.
        </p>
      </div>

      {/* Job Openings List */}
      <div className="max-w-screen-lg mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {jobOpenings.map((job, index) => (
          <div
            key={job.id}
            className={`bg-white p-6 border shadow-md rounded-3xl transition duration-300 transform hover:scale-105 hover:bg-orange-100 hover:shadow-2xl ${
              isLoaded ? "card-fade-in" : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }} // Staggered fade-in delay for cards
            onMouseEnter={() => setHoveredJob(job.id)} // Set hovered job on hover
            onMouseLeave={() => setHoveredJob(null)} // Reset when mouse leaves
          >
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{job.type}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="text-gray-600 mt-4">{job.description}</p>
            <a
              href={job.applyLink}
              className="mt-6 inline-block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded-lg"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default Careers;
