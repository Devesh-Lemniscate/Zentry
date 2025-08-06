import About from "./components/About"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="relative min-w-screen w-screen overflow-x-hidden bg-sky-400">
      <Hero />
      <About/>
    </div>
)
}

export default App
