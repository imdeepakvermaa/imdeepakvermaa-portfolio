import React from "react";
import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black p-4 text-gray-300 md:pb-0 pb-56 md:pt-0 pt-72">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="font-bold text-md md:text-4xl flex justify-center items-center ">
          <h1>ThankYou for visiting!</h1>
        </div>
        <div className="md:flex md:flex-row flex flex-col  md:justify-between md:items-center md:px-8 gap-4 md:pt-14 pt-2">
          <div className="text-center md:text-left">
            <h4 className="md:text-medium text-sm font-bold text-gray-300">
              No ©️ copyright issues.
            </h4>
            <h4 className="text-medium text-gray-300">
              Feel free to copy. If you need any help,
              <br /> ping me!
            </h4>
          </div>

          <div className="text-center md:text-left md:flex md:flex-col justify-center items-center gap-10 mt-2">
            <h1 className="md:text-3xl font-name text-blue-400">
              Deepak Verma
            </h1>
            <h5 className="md:text-medium text-sm font-bold text-gray-300">
              Made with ❤️ in India
            </h5>
          </div>

          <div className="mt-2 text-center md:text-left">
            <h4 className="text-medium font-bold text-gray-300">
              You can find me everywhere
            </h4>
            <div className="flex item-center justify-center">
              
            <SocialLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
