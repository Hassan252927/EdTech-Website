import React from "react";

const ContactUs = () => {
  return (
    <section className="relative py-28 bg-gray-900">
      {/* Hanging Light Bulb */}
  {/* Rope */}
  <div
    className="absolute bg-gray-500 w-1"
    style={{
      top: "0px", // Adjust the vertical position of the rope
      left: "50%", // Position the rope horizontally in the center
      transform: "translateX(-50%)", // Center the rope
      height: "80px", // Height of the rope
      width: "8px", // Start with a narrow width at the top
      background: "linear-gradient(to bottom, rgba(128, 128, 128, 0.7), rgba(128, 128, 128, 1))", // Gradual color change for visual effect
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" // Optional: slight shadow to give depth
    }}
  ></div>

  {/* Bulb */}
  <div
    className="absolute bg-yellow-400 rounded-full shadow-xl"
    style={{
      top: "40px", // Adjust the vertical position of the bulb
      left: "50%",   // Position the bulb horizontally in the center
      transform: "translateX(-50%)", // Center the bulb
      width: "64px",  // Size of the bulb
      height: "64px", // Size of the bulb
      borderRadius: "50% 50% 70% 70%",
      boxShadow: "0 0 80px rgba(255, 255, 0, 0.6)",
    }}
  ></div>
      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8 z-20">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>

        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-xl md:max-w-3xl lg:max-w-4xl sm:px-8 sm:rounded-xl z-10 relative">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="johndoe@example.com"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                placeholder="Your message here..."
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Background with blur effect and light coming from the bulb */}
      <div
        className="absolute top-0px inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px] z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 140.91%)",
        }}
      ></div>

      {/* Light Effect Below the Bulb */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-t from-yellow-200 to-transparent"
        style={{
          filter: "blur(90px)",
          opacity: 0.5,
        }}
      ></div>
    </section>
  );
};

export default ContactUs;
