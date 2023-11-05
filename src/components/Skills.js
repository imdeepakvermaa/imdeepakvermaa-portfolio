import TechStack from "./TechStack";

const Skills = () => {
  return (
    <div className="h-[800px] bg-gray-800 md:pl-20">
      <div className="font-bold text-white  text-4xl  md:text-7xl pt-8">
        What I'm <span className="text-red-500 font-bold "> Skilled </span>In
        <h3 className=" text-white text-xl md:text-4xl md:pl-2">
          interests, passion and hobbies
        </h3>
      </div>
      <div>
        <button className="w-[100px] md:w-[210px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-6">
          development
        </button>
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <button className="w-[70px] md:w-[120px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-10">
          passion
        </button>
      </div>
    </div>
  );
};

export default Skills;
