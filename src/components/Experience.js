import React from "react";
import python from "../images/python.png";
import sql from "../images/sql.png";
import git from "../images/git.png";
import github from "../images/github.png";
import mysql from "../images/mysql.png";
import pandas from "../images/pandas.jpg";
import numpy from "../images/numpy.png";
import matplotlib from "../images/matplotlib.png";
import seaborn from "../images/seaborn.png";
import machine_learning from "../images/machine_learning.png";
import excel from "../images/excel.jpg";
import powerBI from "../images/powerBI.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: sql,
      title: "SQL",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: python,
      title: "PYTHON",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: pandas,
      title: "PANDAS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: numpy,
      title: "NUMPY",
      style: "shadow-yellow-500 ",
    },
    {
      id: 5,
      src: matplotlib,
      title: "MATPLOTLIB",
      style: "shadow-blue-300",
    },
    {
      id: 6,
      src: seaborn,
      title: "SEABORN",
      style: "shadow-orange-300",
    },
    {
      id: 7,
      src: excel,
      title: "Excel",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: powerBI,
      title: "powerBI",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: git,
      title: "GIT",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500 ",
    },
    {
      id: 11,
      src: mysql,
      title: "MYSQl",
      style: "shadow-gray-500",
    },
    {
      id: 12,
      src: machine_learning,
      title: "ML",
      style: "shadow-gray-500",
    }
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full md:pt-0 pt-96"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Things I'm <span className="text-blue-500">Good</span> at
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
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
