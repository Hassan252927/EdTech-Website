import React, { useState, useEffect } from "react";
import { FaTrophy, FaClock, FaRocket, FaStar, FaPlus } from "react-icons/fa"; // For cool icons

const challenges = [
  {
    id: 1,
    title: "AI Chatbot Development Challenge",
    description:
      "Develop a smart AI-powered chatbot for customer service. Compete with participants globally to create the best bot!",
    startDate: "Nov 20, 2024",
    endDate: "Dec 5, 2024",
    rewards: "Certificate + $500",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Frontend Design Mastery",
    description:
      "Showcase your frontend design skills by creating an intuitive and stunning user interface for a mobile app.",
    startDate: "Nov 25, 2024",
    endDate: "Dec 10, 2024",
    rewards: "Recognition + Internship Opportunity",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Data Science Marathon",
    description:
      "Analyze and visualize datasets to uncover insights and create impactful stories using Python or R.",
    startDate: "Dec 1, 2024",
    endDate: "Dec 15, 2024",
    rewards: "Top 3: Paid Projects + Mentorship",
    difficulty: "Beginner",
  },
];

const ProjectChallenges = () => {
  const [showChallengeInput, setShowChallengeInput] = useState(false);
  const [challengeIdea, setChallengeIdea] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // State to trigger fade-in effect for the page

  useEffect(() => {
    // Trigger the fade-in effect after 0.5 seconds delay when the page is loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const handleSubmitIdea = () => {
    if (challengeIdea.trim()) {
      alert("Challenge Idea Submitted: " + challengeIdea);
      setChallengeIdea(""); // Clear the input field after submission
      setShowChallengeInput(false); // Close the textarea
    } else {
      alert("Please write a challenge idea before submitting.");
    }
  };

  return (
    // Main content container
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
    <div
      style={{
        background:
          "linear-gradient(170.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
      }}
      className={`py-16 px-8 text-white ${isLoaded ? "fade-in" : ""}`}
    >
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl text-black font-extrabold">
          Take On <span className="text-orange-400">Live Challenges</span>
        </h1>
        <p className="mt-4 text-black max-w-2xl mx-auto">
          Participate in exciting challenges, solve real-world problems, and win amazing rewards! Check out the live challenges below and make your mark.
        </p>
      </header>

      {/* Challenges Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge, index) => (
          <div
            key={challenge.id}
            className={`bg-white text-black shadow-xl rounded-3xl p-6 transform transition duration-300 hover:scale-105 hover:bg-orange-100 hover:shadow-2xl ${
              isLoaded ? "card-fade-in" : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }} // Stagger the fade-in delay for cards
          >
            <div className="flex items-center justify-between">
              <span className="text-orange-600 text-sm font-bold uppercase">
                {challenge.difficulty} Level
              </span>
              <span className="text-gray-500 text-xs flex items-center gap-1">
                <FaClock /> {challenge.startDate} - {challenge.endDate}
              </span>
            </div>
            <h2 className="text-2xl font-bold mt-4">{challenge.title}</h2>
            <p className="text-gray-600 mt-2">{challenge.description}</p>
            <div className="mt-4">
              <p className="text-gray-700 font-bold">
                Rewards: <span className="text-orange-500">{challenge.rewards}</span>
              </p>
            </div>

            {/* Progress Bar (time remaining) */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">Time Remaining</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            <button className="mt-6 w-full text-white bg-gradient-to-r from-orange-500 to-orange-700 py-2 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-br hover:shadow-xl transition-all">
              Participate Now
            </button>
          </div>
        ))}
      </div>

      {/* Call-to-Action for Challenge Idea */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-black">Have an idea for a challenge?</h2>
        <p className="mt-2 text-black">
          Submit your ideas and see them turned into live challenges for others to participate in.
        </p>
        <button
          onClick={() => setShowChallengeInput(!showChallengeInput)}
          className="mt-4 text-sm px-6 py-2.5 text-center mr-2 mb-2 text-white bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 hover:bg-gradient-to-br shadow-lg font-bold rounded-lg transition-all"
        >
          {showChallengeInput ? "Close" : "Submit Challenge Idea"}
        </button>

        {/* Challenge Idea Input */}
        {showChallengeInput && (
          <div className="mt-6 max-w-xl mx-auto">
            <textarea
              value={challengeIdea}
              onChange={(e) => setChallengeIdea(e.target.value)}
              placeholder="Write your challenge idea here..."
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
              rows="5"
            ></textarea>
            <button
              onClick={handleSubmitIdea}
              className="mt-4 text-white bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-br hover:shadow-xl transition-all"
            >
              Submit
            </button>
          </div>
        )}
      </div>
      </div>
    </main>
  );
};

export default ProjectChallenges;
