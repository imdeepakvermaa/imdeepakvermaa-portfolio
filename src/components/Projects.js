import img1 from "../images/duoo.png";
import img2 from "../images/netflix.PNG";
import img3 from "../images/foodorder.PNG";
import img4 from "../images/Amazon.png";
import img5 from "../images/sidcupgolf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="h-920px md:h-[920px] bg-gray-700 md:pl-20">
      <div className="font-bold text-white  text-3xl  md:text-5xl pt-8 ">
        Transforming{" "}
        <span className="text-orange-500 font-bold "> Knowledge </span>into
        Impact
        <h3 className=" text-white text-lg font-medium md:text-3xl md:pl-2">
          my projects 🚀
        </h3>
      </div>

      <div className="flex justify-center items-center bg-gray-500 md:h-[550px] h-[300px] md:mt-8 ml-8 md:mr-20 mr-8 rounded-3xl shadow-2xl ">
        <div className="">
          <div className="md:w-full flex justify-center items-center flex-wrap gap-3 flex-row  md:gap-6">
            <img
              className=" h-[30px] rounded-lg md:mt-6 mt-2  md:h-[180px]"
              src={img4}
              alt=""
            />
            <img
              className=" h-[30px] rounded-lg md:mt-6 mt-2  md:h-[180px]"
              src={img5}
              alt=""
            />
            <img
              className="  h-[30px] rounded-lg md:mt-6 mt-2  md:h-[180px]"
              src={img1}
              alt=""
            />
            <img
              className=" h-[30px] rounded-lg md:mt-6 mt-2  md:h-[180px]"
              src={img2}
              alt=""
            />
            <img
              className=" h-[30px] rounded-lg md:mt-6 mt-2  md:h-[180px]"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="text-white  flex justify-center items-center gap-8 ">
        <FontAwesomeIcon className="text-7xl" icon={faArrowTrendDown} />
        <div className="">
          <h3 className="mt-[90px] font-bold text-2xl bg-black ">See All my work</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
