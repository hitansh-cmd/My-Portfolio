import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import ApiDemo from "./components/ApiDemo.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// TEMPLATE: only the structure (empty tags + CSS classes).
// TODO (class): fetch the data, then pass it to each component using props.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ApiDemo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
