import heroimage from "../images/heroimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="h-full bg-black">
      <div className="md:pt-[40px] flex flex-col justify-center items-center text-white">
        <FontAwesomeIcon icon={faCircleDown} className="text-8xl mb-8 bg-orange-500" />
        <h1 className=" font-head text-4xl">Who is Deepak Verma</h1>

        <div className="md: h-[620px] mt-4 w-3/4">
          <img src={heroimage} alt="hero" />
        </div>
        <h1 className=" font-bold text-9xl"> ? </h1>
        <span className="w-2/4">
            Hey ! I'm Deepak Verma, a passionate frontend developer, currently exploring the endless possibilities of full-stack development.Currently in my fourth year pursuing a Bachelor of Technology (B.Tech) degree at NIET Greater Noida, I'm on a continuous journey of growth and discovery. While my focus has been on frontend development, I'm now enthusiastically exploring the vast landscape of full-stack development, eager to leverage my skills to build robust and dynamic web applications. With a solid foundation in web technologies and a commitment to staying on the cutting edge of industry trends, I'm excited to contribute to the ever-evolving world of web development."
        </span>
      </div>
    </div>
  );
};

export default About;
