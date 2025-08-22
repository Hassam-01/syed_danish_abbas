import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import ProjectPath from "./pages/projects";
import bg from "./assets/background.svg";
import Education from "./pages/education";
import TechStack from "./pages/techstack";
import Contact from "./pages/contact";
import Experience from "./pages/experience";

// import Three from "./components/three";
function App() {
  return( 
  <div>
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-90 -z-10"
        style={{
          backgroundImage: `url("https://i.ibb.co/hxZQjtHJ/bg.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}></div>

    <Navbar />
    <section id="Home"> 
    <LandingPage/>
    </section>
    <section id="Projects">
    <ProjectPath/>
    </section>
    <section id="Experience">
      <Experience/>
    </section>
    <section id="TechStack"> 
      <TechStack/>
    </section>
    <section id="Education">
      <Education/>
    </section>
    <section id="Contact"> 
      <Contact/>
    </section>
    <footer className="text-gray-200 text-center text-sm p-4">
    Developed by Syed Danish Abbas
  </footer>
  </div>);
}

export default App;
