import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="relative min-w-screen w-screen overflow-x-hidden bg-gray-900">
      <Hero />
      
      <section className="z-0 min-h-screen bg-blue-500"></section>
    </div>
)
}

export default App
