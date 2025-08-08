import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="relative min-w-screen w-screen overflow-x-hidden bg-sky-400">
      <Navbar/>
      <Hero />
      <About/>
    </div>
)
}

export default App
