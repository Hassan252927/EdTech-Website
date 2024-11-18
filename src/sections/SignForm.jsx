
// NOT IN USE< IGNORE THIS


import React, { useState } from "react";
import ed from "../assets/ed.png";

const SignForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState(''); //here
  const [password, setPassword] = useState(''); //here
  const [name, setName] = useState(''); //here

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = async (e) => { //here
    e.preventDefault();
    const url = isSignInForm ? '/api/auth/login' : 'api/auth/register';
    const requestBody = isSignInForm 
      ? {email, password}
      : {name, email, password};

    try {
      const response = await fetch(`http:/localhost:5173${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }

  }

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2 bg-gray-100">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-5xl font-bold">
            {" "}
            {isSignInForm ? "Welcome back!" : "Hi there!"}
          </p>
          <p className="mt-2 text-left text-gray-500">
            please enter your details.
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
            <img
              className="mr-2 h-5"
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              alt="Google Icon"
            />
            {isSignInForm ? "Log in with Google" : "Sign up with Google"}
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 text-center text-xl text-gray-500">
              or
            </div>
          </div>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div
                className={`${
                  isSignInForm ? "hidden" : ""
                } focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition`}
              >
                <input
                  type="text"
                  id="name"
                  value={name} //here
                  onChange={(e) => setName(e.target.value)} //here
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  id="email"
                  value={email} //here
                  onChange={(e) => setEmail(e.target.value)} //here
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  id="password"
                  value={password} //here
                  onChange={(e) => setPassword(e.target.value)} //here
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
            >
              {isSignInForm ? "Sign in" : "Sign up"}
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600" onClick={toggleForm}>
              {isSignInForm ? "Don't" : "Already"} have an account?
              <span className="cursor-pointer underline-offset-4 font-semibold text-gray-900 underline">
                {isSignInForm ? "Sign up for free" : "Click here for login"}.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src={ed}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default SignForm;
