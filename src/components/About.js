const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
        Hey there! I'm Deepak Verma, a passionate frontend developer👨‍💻, currently immersed in the boundless realm of full-stack development. My journey includes mastering a variety of Data Structures and Algorithms challenges on platforms like <span className="text-orange-500 font-bold hover:underline"><a href="https://leetcode.com/imdeepakvermaa/" target="_blank ">Leetcode</a></span>  and <span className="text-green-400 font-bold hover:underline"><a href="https://auth.geeksforgeeks.org/user/imdeepakvermaa/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank ">GeeksForGeeks</a></span>.
        
        </p>
        
        <br />
        <p className="text-xl">
        Currently in my fourth year pursuing a Bachelor of Technology (B.Tech) degree🎓 at NIET Greater Noida🏫, I'm on a continuous path of growth and discovery.
        </p>
        <br />
        <p className="text-xl">Although my primary focus has been on Frontend Development, I'm now wholeheartedly delving into the expansive landscape of Full-Stack Development. Eager to leverage my honed skills, I'm ready to embark on creating robust and dynamic web applications. 🚀</p>
      </div>
    </div>
  );
};

export default About;
