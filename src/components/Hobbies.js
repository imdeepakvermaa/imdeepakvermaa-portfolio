import videoimage from "../images/videography.JPG";

const Hobbies = () => {
  return (
    <div>
      <div className="md:w-full flex flex-wrap gap-3 flex-row  md:gap-6">
        <img
          className="h-[30px] rounded-lg md:mt-6 mt-2  md:h-[80px]"
          src={videoimage}
          alt=""
        />
        <img
          className="h-[30px] rounded-lg md:mt-6 mt-2  md:h-[80px]"
          src="https://imagevars.gulfnews.com/2023/03/13/Virat-Kohli-_186db67304d_medium.jpg"
          alt=""
        />

        <img
          className="h-[30px] rounded-lg md:mt-6 mt-2  md:h-[80px]"
          src="https://1.bp.blogspot.com/-DSs71-t6-HI/UoxY0j8IF6I/AAAAAAAAEgQ/IcgJax9Im5w/s1600/vlcsnap-2013-11-17-23h50m01s172.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hobbies;
