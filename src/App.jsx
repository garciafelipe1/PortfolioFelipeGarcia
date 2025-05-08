import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import ShowcaseSection from "./sections/ShowcaseSection"


const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ExperienceSection/>
        <Projects />
        <ShowcaseSection />
        
    </main>
  )
}

export default App