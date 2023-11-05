import React, { useEffect, useState } from "react";
import heroimage from "../images/heroimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";

const About = () => {
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsRotated(true);
      } else {
        setIsRotated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="md:pt-10 flex flex-col justify-center items-center text-white">
        <FontAwesomeIcon
          icon={faCircleDown}
          className={`text-6xl md:text-8xl mt-10 mb-6 rounded-full text-black bg-orange-500 border-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform transition-transform ${
            isRotated ? "rotate-180" : "rotate-0"
          }`}
        />

        <h1 className="font-head text-3xl md:text-4xl text-center mb-4">
          Who is Deepak Verma
        </h1>

        <div className="w-full md:w-3/4 mt-2">
          <img src={heroimage} alt="hero" className="w-full h-auto" />
        </div>
        <span className="font-bold text-4xl md:text-6xl pt-2 md:pb-2"> ? </span>
        <span className="w-11/12 md:pt-10 pb-10 md:w-2/4 font-about text-lg md:text-xl text-center leading-relaxed font-bold tracking-widest mt-2">
          Hey! I'm{" "}
          <a
            href="https://www.linkedin.com/in/deepak-verma-2229651a0/"
            target="_blank "
            className="font-bold text-orange-500 hover:underline"
          >
            {" "}
            Deepak Verma
          </a>
          , a passionate frontend developer👨‍💻, currently exploring the endless
          possibilities of full-stack development.I've honed my skills by tackling a wide range of Data Structures and Algorithms challenges on platforms like <a href="https://leetcode.com/imdeepakvermaa/" target="_blank " className="font-bold text-yellow-500 hover:underline">LeetCode</a> and  <a href="https://auth.geeksforgeeks.org/user/imdeepakvermaa/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank " className="font-bold text-yellow-500 hover:underline">GeeksForGeeks</a>
          <br />
          <br />→ Currently in my fourth year pursuing a Bachelor of Technology
          (B.Tech) degree🎓 at{" "}
          <a
            href="https://www.niet.co.in/"
            target="_blank "
            className="font-bold text-orange-500 hover:underline"
          >
            NIET Greater Noida🏫
          </a>{" "}
          , I'm on a continuous journey of growth and discovery.🚀
          <br />
          <br /> → While my focus has been on{" "}
          <a
            href="https://imdeepakvermaa.github.io/sidcupfamilygolf/"
            target="_blank "
            className="font-bold text-orange-500 hover:underline"
          >
            Frontend Development
          </a>
          , I'm now enthusiastically exploring the vast landscape of
          <a href="# " className="font-bold text-orange-500 hover:underline">
            {" "}
            Full-Stack Development
          </a>
          , eager to leverage my skills to build robust and dynamic web
          applications.
        </span>

        <div className="pt-[8px] pb-[100px]">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default About;
