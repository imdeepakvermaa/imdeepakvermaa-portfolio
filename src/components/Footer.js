import React from "react";
import SocialLogo from "./SocialLogo";
import footerimg from "../images/indianfooter.JPG";

const Footer = () => {
  return (
    <div className="h-[1000px] md:h-[400px]">
      <div className="font-bold text-black  text-xl  md:text-4xl flex justify-center items-center md:pt-8">
        <h1>ThankYou 🙏 for visiting my portfolio !</h1>
      </div>
      <div className="md:flex md:flex-row flex flex-col justify-center items-center md:justify-between md:items-center md:plf-[200px] pl-[100px] md:pr-[200px] pr-[200px] gap-4 md:pt-[80px] pt-[20px]">
        <div className="">
          <h4 className="md:text-medium text-sm font-bold text-gray-600">
            No ©️ copyright issues.
          </h4>
          <h4 className="text-medium text-gray-500">
            Feel free to copy. If you need any help,
            <br /> ping me !
          </h4>
        </div>

        <div className="md:flex md:flex-col justify-center items-center gap-10 mt-4 ">
          <h1 className=" md:text-3xl font-name text-orange-500">
            Deepak Verma
          </h1>
          <h5 className=" md:text-medium text-sm font-bold text-gray-600">
            Made with ❤️ in India
          </h5>
        </div>

        <div className="mt-4">
          <h4 className="text-medium font-bold text-gray-600">
            You can find me everywhere
          </h4>
          <SocialLogo />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img className="" src={footerimg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
