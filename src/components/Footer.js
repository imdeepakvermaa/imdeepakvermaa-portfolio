import React from "react";
import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-gray-300">
      <div className="font-bold text-xl md:text-4xl flex justify-center items-center md:pt-8">
        <h1>ThankYou 🙏 for visiting!</h1>
      </div>
      <div className="md:flex md:flex-row flex flex-col justify-center items-center md:justify-between md:items-center md:px-8 gap-4 md:pt-8 pt-4">
        <div className="text-center md:text-left">
          <h4 className="md:text-medium text-sm font-bold text-gray-300">
            No ©️ copyright issues.
          </h4>
          <h4 className="text-medium text-gray-300">
            Feel free to copy. If you need any help,
            <br /> ping me!
          </h4>
        </div>

        <div className="text-center md:text-left md:flex md:flex-col justify-center items-center gap-10 mt-4">
          <h1 className="md:text-3xl font-name text-orange-500">Deepak Verma</h1>
          <h5 className="md:text-medium text-sm font-bold text-gray-300">
            Made with ❤️ in India
          </h5>
        </div>

        <div className="mt-4 text-center md:text-left">
          <h4 className="text-medium font-bold text-gray-300">
            You can find me everywhere
          </h4>
          <SocialLogo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
