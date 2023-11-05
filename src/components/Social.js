import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="flex flex-wrap justify-center items-center md:flex-row gap-10 md:gap-20 text-xl ml-10 mr-10">
      <a href="https://www.linkedin.com/in/deepak-verma-2229651a0/" target="_blank ">
        <div className="">
          <button className="w-24 text-center md:w-40 h-10 text-white font-bold bg-blue-600 rounded-2xl">
            L
            <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl" />
            kdin
          </button>
        </div>
      </a>

      <a href="https://github.com/imdeepakvermaa" target="_blank ">
        <button className="w-24 md:w-40 h-10 bg-white text-black font-bold rounded-2xl">
          Git
          <FontAwesomeIcon icon={faGithub} className="text-xl md:text-2xl" />
          Hub
        </button>
      </a>

      <a href="https://twitter.com/imdeepakvermaa" target="_blank ">
        <button className="w-24 md:w-40 h-10 bg-black border-2 border-white text-white font-bold rounded-2xl">
          Twit
          <FontAwesomeIcon icon={faTwitter} className="text-xl md:text-2xl" />
          Ter
        </button>
      </a>

      <a href="https://www.instagram.com/imdeepakvermaa/" target="_blank ">
        <button className="w-30 md:w-40 h-10 bg-orange-900 text-white font-bold rounded-2xl">
          Insta
          <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl" />
          Gram
        </button>
      </a>
    </div>
  );
};

export default Social;
