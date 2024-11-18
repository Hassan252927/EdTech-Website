import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Admin Panel!</h1>
      <p className="text-lg text-gray-600 mb-6">This is the main landing page of the application.</p>
      <Link to="/admin">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Go to Admin Panel
        </button>
      </Link>
    </div>
  );
};

export default Home;
