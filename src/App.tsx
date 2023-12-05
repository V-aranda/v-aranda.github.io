
import Navbar from "./components/navbar/Navbar"
import Ferramentas from "./pages/ferramentas/Ferramentas"
import { Hero } from "./pages/hero/Hero"
import Sobre from "./pages/sobre/Sobre"
import Linguagens from "./pages/linguagens/Linguagens"
import Footer from "./pages/footer/Footer"
import Projects from "./pages/projects/Projects"


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Sobre id={"sobre"}/>
      <Ferramentas id={"conhecimentos"}/>
      <Linguagens />
      <Projects id={"projetos"}/>
      <Footer/>
    </>
  )
}

export default App