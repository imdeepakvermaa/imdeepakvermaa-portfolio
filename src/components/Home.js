import HeroImage from "../images/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-full gap-4">
          <h2 className="flex-xl sm:text-7xl font-bold textwhite">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500  max-w-md">
          Hello! I'm Deepak Verma, a dedicated frontend developer👨‍💻 with a passion for creating seamless user experiences. Currently, I'm on an exciting journey exploring the endless possibilities of full-stack development. With a solid foundation in HTML, CSS, JavaScript, and React. I bring creativity and attention to detail to every project. Let's build something extraordinary together!"
          </p>
          <div>
            <Link to="projects" smooth duration={500} className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
