import React from "react";
import python from "../images/python.png";
import js from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import git from "../images/git.png";
import github from "../images/github.png";
import mysql from "../images/mysql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: python,
      title: "PYTHON",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: mysql,
      title: "MYSQL",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: git,
      title: "GIT",
      style: "shadow-orange-600",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
