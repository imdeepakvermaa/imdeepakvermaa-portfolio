// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      
      <About/>
      <Portfolio/>

      <SocialLinks/>
       {/*
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>  */}
    </div>
  );
}

export default App;
