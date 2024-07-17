import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../images/HeroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:pt-0 gap-11 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8  md:flex-row">
        <div className="flex flex-col justify-center h-full gap-4 mt-40 ">
          <p className="text-gray-400  max-w-md font-bold text-xl">
            Heya, I'm Deepak Verma - a data science Enthuthiast from India. Data
            nerd. Learning. Creativity.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img src={HeroImage} style={{"height":"25rem","margin":"8rem 0rem 0rem 0rem"}} alt="Alternative" />
        </div>
      </div>
    </div>
  );
};

export default Home;
