import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Projects />
          <Contact />
        </main>
        {/* <BackToTopButton /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
