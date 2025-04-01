import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <Projects />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Contact Section */}
      <Contact />
      {/* Contact Section */}
      <Footer />
    </>
  );
};

export default App;
