import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialLogo = () => {
  return (
    <div className="flex flex-wrap  items-center md:flex-row gap-10 md:gap-20 text-xl">
      <a href="https://www.linkedin.com/in/deepak-verma-2229651a0/" target="_blank ">
        <div className="">
          <button className=" text-center  h-10 text-white font-bold  rounded-2xl">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl" />
          </button>
        </div>
      </a>

      <a href="https://github.com/imdeepakvermaa" target="_blank ">
        <button className="text-white text-xl font-bold rounded-2xl">
          <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl" />
        </button>
      </a>

      <a href="https://twitter.com/imdeepakvermaa" target="_blank ">
        <button className="  text-white font-bold ">
          <FontAwesomeIcon icon={faXTwitter} className="text-xl md:text-2xl" />
        </button>
      </a>

      <a href="https://www.instagram.com/imdeepakvermaa/" target="_blank ">
        <button className=" text-white font-bold rounded-2xl">
          <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl" />
        </button>
      </a>
    </div>
  );
};

export default SocialLogo;
