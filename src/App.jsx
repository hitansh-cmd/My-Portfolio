
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import ApiDemo from "./components/ApiDemo.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading portfolio:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="status">Loading Portfolio...</p>;
  }

  if (error) {
    return (
      <p className="status">
        Unable to load portfolio. Please check portfolio.json.
      </p>
    );
  }

  if (!data) {
    return <p className="status">No portfolio data found.</p>;
  }

  return (
    <>
      <Navbar name={data.name} />

      <main>
        <Hero data={data} />

        <About data={data} />

        <Skills skills={data.skills || []} />

        <Projects projects={data.projects || []} />

        <Education education={data.education || []} />

        <Contact
          email={data.email}
          socials={data.socials || {}}
        />
      </main>

      <Footer
        name={data.name}
        socials={data.socials || {}}
      />
    </>
  );
}

export default App;
