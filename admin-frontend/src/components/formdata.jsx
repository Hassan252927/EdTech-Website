import React, { useState, useEffect } from "react";
import axios from "axios";

const FormTable = () => {
  const [forms, setForms] = useState([]);
  const [tableData, setTableData] = useState([]);

  const tableTitle = [
    "Full Name",
    "Email",
    "Phone Number",
    "Date of Birth",
    "Gender",
    "Current Role",
    "Organization",
    "Field of Study",
    "Graduation Year",
    "LinkedIn",
    "Team Name",
    "Team Members",
    "Skills",
    "Project Idea",
    "GitHub",
    "T-Shirt Size",
    "Portfolio",
    "Code of Conduct",
    "Photography Consent",
    "Data Privacy",
    "Referral Source",
    "Previous Hackathon",
    "Emergency Contact",
  ]

  useEffect(() => {
    const fetchForms = async () => {
      try {
        //PORT value should be same as the POST request done by the frontend of the hacathon form
        const response = await axios.get("http://localhost:5173/-forms"); 
        setForms(response.data);
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Submitted Forms</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-100 shadow-md">
          <thead>
            <tr className="bg-red-200">
              {tableTitle.map((header, index) => (
                <th
                  key={index}
                  className="text-left py-3 px-4 border-b border-gray-300 text-gray-700 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {forms.map((form, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.fullName}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.email}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.phoneNumber}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.dob}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.gender}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.currentRole}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.organization}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.fieldOfStudy}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.graduationYear}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.linkedin}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.teamName}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.teamMembers}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.skills}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.projectIdea}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.github}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.tShirtSize}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.portfolio}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.codeOfConduct ? "Yes" : "No"}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.photographyConsent ? "Yes" : "No"}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.dataPrivacy ? "Yes" : "No"}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.referralSource}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.previousHackathon}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">
                  {form.emergencyContact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormTable;
