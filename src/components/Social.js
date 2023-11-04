import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="md: flex gap-20 text-xl">
      <a
        href="https://www.linkedin.com/in/deepak-verma-2229651a0/"
        target="_blank "
      >
        <div className="bg-blue-600 rounded-2xl gap-4">
          <button className="w-24 md:w-40 h-10  text-white font-bold ">
            L
            <FontAwesomeIcon icon={faLinkedin} />
            kdin
          </button>
        </div>
      </a>

      <a href="https://github.com/imdeepakvermaa" target="_blank ">
        <button className="w-24 md:w-40 h-10 bg-white text-black font-bold rounded-2xl">
          Git
          <FontAwesomeIcon icon={faGithub} />
          Hub
        </button>
      </a>

      <a href="https://twitter.com/imdeepakvermaa" target="_blank ">
        <button className="w-24 md:w-40 h-10 bg-black border-2 border-white text-white font-bold rounded-2xl">
          Twit
          <FontAwesomeIcon icon={faXTwitter} />
          Ter
        </button>
      </a>

      <a href="https://www.instagram.com/imdeepakvermaa/" target="_blank ">
        <button className="w-24 md:w-40 h-10 bg-orange-900 text-white font-bold rounded-2xl">
          Insta
          <FontAwesomeIcon icon={faInstagram} />
          Gram
        </button>
      </a>
    </div>
  );
};

export default Social;
