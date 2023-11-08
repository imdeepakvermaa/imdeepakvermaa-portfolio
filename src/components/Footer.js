import React from "react";
import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <div className="h-[400px] md:h-[600px] bg-gray-300 ">
      <div className="font-bold text-black  text-xl  md:text-4xl flex justify-center items-center pt-8">
        <h1>ThankYou 🙏 for visiting my portfolio !</h1>
      </div>
      <div className="flex justify-between items-center pl-[200px] pr-[200px] pt-[80px]">
        <div className="">
          <h4 className="font-medium text-gray-600">No ©️ copyright issues.</h4>
          <h5>Feel free to copy. If you need any help, ping me !</h5>
        </div>

        <div className="">
          <h4>Deepak Verma</h4>
          <h5>Made with ❤️ in India</h5>
        </div>

        <div className="">
          <h4>You can find me everywhere</h4>
          <SocialLogo/>
        </div>
      </div>

    </div>
  );
};

export default Footer;
