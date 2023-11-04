import TechStack from "./TechStack";

const Skills = () => {
  return (
    <div className="h-[800px] bg-gray-800 pl-20">
      <div className="md:font-bold text-white text-7xl  pt-8 ">
        What I'm <span className="text-red-500 "> Skilled </span>In
        <h3 className="md:flex font-bold text-white text-4xl pl-2 ">
          interests, passion and hobbies
        </h3>
      </div>
      <div>
        <button className="w-24 md:w-[210px] flex justify-center items-center h-12 text-3xl font-medium  bg-gray-800 border-2 border-white text-white  rounded-xl mt-20">
          development
        </button>
      </div>
      <div>
        <TechStack/>
      </div>
      <div>
        <button className="w-24 md:w-[130px] flex justify-center items-center h-12 text-3xl font-medium  bg-gray-800 border-2 border-white text-white  rounded-xl mt-20">
          passion
        </button>
      </div>
    </div>
  );
};

export default Skills;
