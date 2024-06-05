const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:pt-0 pt-60 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="md:text-xl mt-1">
          Hey there! I'm Deepak Verma, a passionate data science enthusiast👨‍💻, dedicated to transforming raw data into valuable insights. My journey includes mastering problem-solving challenges on platforms like <span className="text-orange-500 font-bold hover:underline"><a href="https://leetcode.com/imdeepakvermaa/" target=" _blank">Leetcode</a></span> and <span className="text-green-400 font-bold hover:underline"><a href="https://auth.geeksforgeeks.org/user/imdeepakvermaa/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target=" _blank">GeeksForGeeks</a></span>.
        </p>
        
        <br />
        <p className="md:text-xl">
          Just Graduated(in June) in a Bachelor of Technology (B.Tech) degree🎓 at Noida Institue Engineering And Technology, Greater Noida🏫, I'm on a continuous path of growth and discovery.
        </p>
        <br />
        <p className="md:text-xl">
          Although my primary focus has been on data analysis and visualization, I'm now wholeheartedly delving into the expansive landscape of data science. Eager to leverage my honed skills in Python, SQL, Machine Learning, Artificial Intelligence, Deep Learning and key libraries like Pandas, Numpy, Matplotlib, and Seaborn, I'm ready to embark on creating robust and insightful data-driven solutions. 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
