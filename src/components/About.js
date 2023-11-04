import React, { useEffect, useState } from "react";
import heroimage from "../images/heroimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";

const About = () => {
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    <div className="h-full bg-black">
      <div className="md:pt-[40px] flex flex-col justify-center items-center text-white">
        <FontAwesomeIcon
          icon={faCircleDown}
          className={`text-8xl mt-[90px] mb-10 rounded-full text-black bg-orange-500 border-4 border-orange-500 transform transition-transform ${
            isRotated ? "rotate-180" : "rotate-0"
          }`}
        />

        <h1 className="font-head text-4xl">Who is Deepak Verma</h1>

        <div className="w-3/4 md:h-[620px] mt-4">
          <img src={heroimage} alt="hero" />
        </div>
        <span className="font-bold text-4xl md:text-7xl"> ? </span>
        <span className="w-11/12 md:w-2/4 font-about text-2xl text-center leading-relaxed font-bold tracking-widest">
          Hey! I'm{" "}
          <a
            href="https://www.linkedin.com/in/deepak-verma-2229651a0/"
            target="_blank "
            className="font-bold text-orange-500 hover:underline decoration-white
          "
          >
            {" "}
            Deepak Verma
          </a>
          , a passionate frontend developer👨‍💻, currently exploring the endless
          possibilities of full-stack development.
          <br />
          <br />→ Currently in my fourth year persuing a Bachelor of Technology
          (B.Tech) degree🎓 at{" "}
          <a
            href="https://www.niet.co.in/"
            target="_blank "
            className="font-bold text-orange-500 hover:underline decoration-white
          "
          >
            NIET Greater Noida🏫
          </a>{" "}
          , I'm on a continuous journey of growth and discovery.🚀
          <br />
          <br /> → While my focus has been on{" "}
          <a
            href="https://imdeepakvermaa.github.io/sidcupfamilygolf/"
            target="_blank "
            className="font-bold text-orange-500 hover:underline decoration-white
          "
          >
            Frontend Development
          </a>
          , I'm now enthusiastically exploring the vast landscape of
          <a
            href="# "
            className="font-bold text-orange-500 hover:underline decoration-white
          "
          >
            {" "}
            Full-Stack Development
          </a>
          , eager to leverage my skills to build robust and dynamic web
          applications.
        </span>

        <div className="mt-8" >
          <Social/>
          
        </div>
      </div>
    </div>
  );
};

export default About;
