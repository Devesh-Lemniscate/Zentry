import About from "./components/About"
import Hero from "./components/Hero"
import Features from "./components/Features"
import NavBar from "./components/Navbar"


const App = () => {
  return (
    <div className="relative min-w-screen w-screen overflow-x-hidden bg-sky-400">
      <NavBar/>
      <Hero />
      <About/>
      <Features/>
    </div>
)
}

export default App
