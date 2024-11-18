import React, { useState, useEffect } from "react";

const CheckoutPage = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Trigger the smooth page load effect by updating the state after a brief delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay to allow the page to 'load' before transitioning in (adjust as needed)
    
    window.scrollTo(0, 0); // Ensure page scrolls to the top

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <main className={`main-content ${isLoaded ? "fade-in" : ""}`}>
    <section className="relative py-28 bg-gray-900">
      <div className="relative max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Checkout</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Complete Your Purchase
          </p>
          <p className="text-gray-300">
            Please fill out the form below to complete your purchase.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-xl md:max-w-3xl lg:max-w-4xl sm:px-8 sm:rounded-xl">
          {/* Order Summary */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="bg-gray-100 py-10 px-6 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">
                The Frontend Development Bootcamp with React 2024
              </p>
              <p className="text-gray-600">
                This course is designed to take you from a beginner to an
                advanced level in Frontend Development with React, one of the
                most popular JavaScript libraries for building user interfaces.
                Learn how to build dynamic web applications, manage state
                effectively, and leverage React's ecosystem to become a
                proficient developer.
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Created by{" "}
                <span className="font-semibold text-black">Tom Holland</span>
              </p>
              <div className="flex justify-between mt-4 px-6">
                <span className="text-gray-800 font-bold">Price</span>
                <span className="text-gray-800 font-bold">$49.99</span>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Shipping Information
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-medium">Address</label>
                <input
                  type="text"
                  required
                  placeholder="123 Main St"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-medium">City</label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">ZIP Code</label>
                  <input
                    type="text"
                    required
                    placeholder="12345"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-medium">Country</label>
                <input
                  type="text"
                  required
                  placeholder="Country"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </form>
          </div>

          {/* Payment Information */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Payment Information
            </h2>
            <form>
              <div className="mb-4">
                <label className="font-medium">Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-medium">Expiry Date</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">CVV</label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2">
              Cancel
            </button>
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default CheckoutPage;
