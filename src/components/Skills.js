import Designing from "./Designing";
import TechStack from "./TechStack";
import videoimage from "../images/videography.JPG";

const Skills = () => {
  return (
    <div className="md:h-[920px] bg-gray-800 md:pl-20">
      <div className="font-bold text-white  text-4xl  md:text-7xl pt-8">
        What I'm <span className="text-red-500 font-bold "> Skilled </span>In
        <h3 className=" text-white text-xl md:text-3xl md:pl-2">
          interests, passion and hobbies 👨‍💻🏏🎥 
        </h3>
      </div>
      <div>
        <div className="w-[100px] md:w-[210px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-6">
          development
        </div>
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <div className="w-[70px] md:w-[160px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-10">
          designing
        </div>
      </div>
      <div>
        <Designing />
      </div>
      <div>
        <div className="w-[70px] md:w-[160px] text-center md:h-12  text-sm md:text-3xl font-medium bg-gray-800 border-2 border-white text-white rounded-xl md:mt-20 mt-10">
          hobbies
        </div>
      </div>
      <div className="md:w-full flex flex-wrap gap-3 flex-row  md:gap-6">
        <img
          className="h-[40px] rounded-lg mt-6  md:h-[80px]"
          src={videoimage}
          alt=""
        />

        <img
          className="h-[40px] rounded-lg mt-6  md:h-[80px]"
          src="https://imagevars.gulfnews.com/2023/03/13/Virat-Kohli-_186db67304d_medium.jpg"
          alt=""
        />

        <img
          className="h-[40px] rounded-lg mt-6  md:h-[80px]"
          src="https://1.bp.blogspot.com/-DSs71-t6-HI/UoxY0j8IF6I/AAAAAAAAEgQ/IcgJax9Im5w/s1600/vlcsnap-2013-11-17-23h50m01s172.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Skills;
