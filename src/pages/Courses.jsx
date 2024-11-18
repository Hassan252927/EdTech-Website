import React, { useEffect, useState } from "react";
import { courseCardDetail } from "../constants/courseCardDetail";
import CardCourse from "../components/CardCourse";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search input
  const [filteredCourses, setFilteredCourses] = useState(courseCardDetail); // State for filtered courses
  const [hoveredCourse, setHoveredCourse] = useState(null); // State to track hovered course
  const [isLoaded, setIsLoaded] = useState(false); // State to trigger fade-in animation

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate page load delay and apply fade-in effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay before the fade-in effect

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Function to handle search and filter courses
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the courses based on the search query
    const filtered = courseCardDetail.filter((course) =>
      course.courseTitle.toLowerCase().includes(query)
    );
    setFilteredCourses(filtered);
  };

  return (
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
    <section className={`w-full p-20 max-sm:p-2 ${isLoaded ? "fade-in" : ""}`}>
      <div className="pb-10">
        {/* Category Title */}
        <h1 className="font-extrabold text-5xl text-center pb-6 max-sm:text-3xl max-sm:p-2 max-md:text-4xl">
          Category
        </h1>

        {/* Centered Search Box */}
        <div className="flex justify-center pb-10">
          <div className="flex justify-between items-center w-full md:w-1/2 border-2 border-black rounded-3xl">
            <input
              className="p-4 rounded-3xl outline-none flex-1"
              type="text"
              placeholder="Search Course"
              value={searchQuery} // Bind the input value to the state
              onChange={handleSearch} // Handle input changes
            />
            <i
              className="fa-solid fa-magnifying-glass p-4 cursor-pointer"
              onClick={() => alert("search")}
            ></i>
          </div>
        </div>
      </div>

      <div>
        {/* All Courses Title */}
        <h1 className="font-extrabold text-5xl text-center pt-20 pb-6 max-sm:text-3xl max-sm:p-2 max-md:text-4xl">
          All <span className="text-orange-600">Courses</span>
        </h1>

        {/* Display filtered courses */}
        <div className="grid gap-2 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((detail) => (
            <div
              key={detail.key}
              className="border shadow-md rounded-3xl transition duration-300 transform hover:scale-105 hover:bg-orange-100 hover:shadow-2xl" // Hover effect applied here
              onMouseEnter={() => setHoveredCourse(detail.id)} // Set hovered course
              onMouseLeave={() => setHoveredCourse(null)} // Reset when mouse leaves
            >
              <CardCourse
                id={detail.id}
                courseBanner={detail.courseBanner}
                courseTitle={
                  <span
                    className={`${
                      searchQuery &&
                      detail.courseTitle
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                        ? "border-2 border-orange-600"
                        : ""
                    }`}
                  >
                    {detail.courseTitle}
                  </span>
                }
                author={detail.author}
                hovered={hoveredCourse === detail.id} // Pass hovered state to CardCourse
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Most Popular Title */}
        <h1 className="font-extrabold text-5xl text-center pt-20 pb-6 max-sm:text-3xl max-sm:p-2 max-md:text-4xl">
          Most <span className="text-orange-600">Popular</span>
        </h1>

        {/* Display filtered courses */}
        <div className="grid gap-2 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((detail) => (
            <div
              key={detail.key}
              className="border shadow-md rounded-3xl transition duration-300 transform hover:scale-105 hover:bg-orange-100 hover:shadow-2xl" // Hover effect applied here
              onMouseEnter={() => setHoveredCourse(detail.id)} // Set hovered course
              onMouseLeave={() => setHoveredCourse(null)} // Reset when mouse leaves
            >
              <CardCourse
                id={detail.id}
                courseBanner={detail.courseBanner}
                courseTitle={
                  <span
                    className={`${
                      searchQuery &&
                      detail.courseTitle
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                        ? "border-2 border-orange-600"
                        : ""
                    }`}
                  >
                    {detail.courseTitle}
                  </span>
                }
                author={detail.author}
                hovered={hoveredCourse === detail.id} // Pass hovered state to CardCourse
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};


export default Courses;
