import Hero from "./components/Landing/Hero"
import Projects from "./components/Landing/Projects"
import Services from "./components/Landing/Services"
import NavigationHeader from "./components/NavigationHeader"
import './index.css'

function App() {

  return (
    <>
      <NavigationHeader></NavigationHeader>
      <Hero></Hero>
      <Services></Services>
      <Projects></Projects>
    </>
  )
}

export default App
