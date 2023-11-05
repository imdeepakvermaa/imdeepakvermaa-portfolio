import Designing from "./Designing";
import Hobbies from "./Hobbies";
import TechStack from "./TechStack";

const Skills = () => {
  return (
    <div className=" md:h-[1000px] h-[500px] bg-gray-800 md:pl-20">
      <div className="font-bold text-white  text-4xl  md:text-7xl pt-8">
        What I'm <span className="text-red-500 font-bold "> Skilled </span>In
        <h3 className=" text-white text-xl md:text-3xl md:pl-2">
          interests, passion and hobbies 👨‍💻🏏🎥
        </h3>
      </div>
      <div>
        <div className="w-[100px] md:w-[210px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-14 mt-4 ">
          development
        </div>
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <div className="w-[70px] md:w-[160px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-4">
          designing
        </div>
      </div>
      <div>
        <Designing />
      </div>

      <div>
        <div className="w-[70px] md:w-[160px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-4">
          hobbies
        </div>
      </div>
      <div>
        <Hobbies />
      </div>

      </div>

  );
};

export default Skills;
