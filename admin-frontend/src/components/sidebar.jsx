import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../assets/profile1.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const navlinks = [
    { title: "Form Data", link: "/sidebar/data-form" },
    { title: "Student Data", link: "/sidebar/student-data" },
    { title: "Teacher Data", link: "/teacher-data" },
    { title: "Billing", link: "/billing" },
    { title: "Help", link: "/help" },
    { title: "Settings", link: "/settings" },
  ];

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Remove the token from sessionStorage
    navigate("/admin"); // Redirect to the login page
  };

  return (
    <div className="w-64 h-screen bg-white p-6 fixed left-0 top-0 border-r border-gray-200 flex flex-col justify-between">
      {/* Admin Profile Section */}
      <div>
        <div className="flex items-center mb-6">
          <img
            src={profile}
            alt="Admin Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-lg font-bold">Admin Tom</h2>
            <p className="text-sm text-gray-500">admin@example.com</p>
          </div>
        </div>
        {/* Navigation Links */}
        <ul className="space-y-4">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <NavLink
                to={navlink.link}
                className={({ isActive }) =>
                  `text-gray-800 hover:bg-blue-200 rounded-md p-2 block ${
                    isActive ? "bg-blue-300" : ""
                  }`
                }
              >
                {navlink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
