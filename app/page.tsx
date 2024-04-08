import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Info from './Components/Info/Info'
import Projects from "./Components/Projects/Projects"
import Contact from './Components/Contact/Contact'
import Footer from "./Components/Footer/Footer"

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home