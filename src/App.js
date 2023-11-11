import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />

      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
