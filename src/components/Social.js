import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";



const Social = () => {
  return (
    <div className="md: flex gap-20 text-xl">
      <a href="https://www.instagram.com/imdeepakvermaa/" target="_blank ">
        <button className="w-24 md:w-40 h-10 bg-orange-600 text-white font-bold rounded-2xl">
          Hey👋
        </button>
      </a>

      <button className="w-24 md:w-40 h-10 bg-white text-black font-bold rounded-2xl">
        My Repo
        <FontAwesomeIcon icon={faGithub} />
      </button>

      <button className="w-24 md:w-40 h-10 bg-green-600 text-white font-bold rounded-2xl">
        TweetChat
        <FontAwesomeIcon icon={faTwitter} />
      </button>
    </div>
  );
};

export default Social;
