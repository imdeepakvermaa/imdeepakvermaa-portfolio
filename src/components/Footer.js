import React from "react";
import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <div className="h-[400px] md:h-[600px] bg-gray-100 ">
      <div className="font-bold text-black  text-xl  md:text-4xl flex justify-center items-center pt-8">
        <h1>ThankYou 🙏 for visiting my portfolio !</h1>
      </div>
      <div className="flex justify-between items-center pl-[200px] pr-[200px] pt-[80px]">
        <div className="">
          <h4 className="text-medium font-bold text-gray-600">No ©️ copyright issues.</h4>
          <h4 className="text-medium text-gray-500">Feel free to copy. If you need any help,
          <br /> ping me !</h4>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-4">
          <h1 className="text-3xl font-name text-orange-500">Deepak Verma</h1>
          <h5>Made with ❤️ in India</h5>
        </div>

        <div className="">
          <h4 className="text-medium font-bold text-gray-600">You can find me everywhere</h4>
          <SocialLogo/>
        </div>
      </div>

    </div>
  );
};

export default Footer;
