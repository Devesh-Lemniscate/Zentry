import About from "./components/About"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import NavBar from "./components/Navbar"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="relative min-w-screen w-screen overflow-x-hidden bg-gray-350">
      <NavBar/>
      <Hero />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
)
}

export default App
