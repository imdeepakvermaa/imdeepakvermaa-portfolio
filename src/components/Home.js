
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../images/HeroImage.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:pt-0 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8  md:flex-row">
        <div className="flex flex-col justify-center h-full gap-4 mt-40">
          <h2 className="flex-xl sm:text-5xl font-bold textwhite">
          Data-driven professional.
          </h2>
          <p className="text-gray-400  max-w-md">
          Hi! I'm Deepak Verma, a dedicated data science enthusiast who loves Data and Technologies such as : 
          <pre className=" text-red-500">
          Python 
          </pre> 
          <pre className=" text-red-500">
          EDA 
          </pre> 
          <pre className=" text-red-500">
          ETL 
          </pre>
          <pre className=" text-red-500">
          SQL 
          </pre>
          <pre className=" text-red-500">
          Statistics And Probability
          </pre>
          <pre className=" text-red-500">
          Numpy
          </pre>
          <pre className=" text-red-500">
          Pandas 
          </pre>
          <pre className=" text-red-500">
          Matplotlib 
          </pre>
          <pre className=" text-red-500">
          Seaborn 
          </pre>
          <pre className=" text-red-500">
          Excel 
          </pre>
          <pre className=" text-red-500">
          PowerBI 
          </pre>
          <pre className=" text-red-500">
          Machine Learning 
          </pre>
          <pre className=" text-red-500">
          Deep Learning 
          </pre>
          <pre className=" text-red-500">
          Artificial Intelligence 
          </pre>
          <pre className=" text-red-500">
          NLP 
          </pre>


          
          
          

          </p>
          <div>
            <Link to="projects" smooth duration={500} className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Projects
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
            className="rounded-2xl mx-auto w-2/3 md:2/3 m-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
