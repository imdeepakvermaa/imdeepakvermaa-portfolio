import React from "react";
// import SocialLogo from "./SocialLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className="md:h-[920px] bg-gray-600  md:pl-10">
      <div className="font-bold text-white  text-4xl  md:text-7xl pt-8">
        Let's <span className="text-yellow-400 font-bold "> Connect </span> and{" "}
        <span className="text-yellow-400 font-bold "> Create </span>Something{" "}
        <span className="text-yellow-400 font-bold "> Great </span>
        Together!
      </div>
      <div className="mt-8">
        <button className="w-32 md:w-36 h-10 bg-gradient-to-r from-red-500 to-red-700 hover:from-pink-400 hover:to-yellow-500 text-black font-bold rounded-2xl">
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          My Resume
        </button>
      </div>

      <div className="flex items-center justify-center mt-[120px]">
        <div className="font-bold text-orange-400  text-3xl  md:text-5xl pt-8">
          Feel free to contact me through
          <span className="text-yellow-300 font-bold ">
            {" "}
            email, Instagram, or LinkedIn.{" "}
          </span>
          I'm always here to connect and engage with you.
        </div>
        <div className="h-[400px] w-3/4 ">
          <div className="bg-gray-400 p-8 rounded shadow-md w-3/4">
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-xl font-bold text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xl font-bold text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Your Email"
              />
            </div>
            <button className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
