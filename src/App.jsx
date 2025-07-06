import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css'
import Resume from "./pages/Resume"
import Blog from "./pages/Blog"
import UnderstandingGitGitHub from "./pages/blogs/UnderstandingGitGitHub"
import ClientVsServerSideRendering from "./pages/blogs/ClientVsServerSideRendering"
import CoreConceptsReact from "./pages/blogs/CoreConceptsReact"
import UnderstandingPromises from "./pages/blogs/UnderstandingPromises"
import JavascriptConceptsPart1 from "./pages/blogs/JavascriptConceptsPart1"
import JavascriptConceptsPart2 from "./pages/blogs/JavascriptConceptsPart2"
import JavascriptEventLoopExplained from "./pages/blogs/JavascriptEventLoopExplained"
import PrototypeAndPrototypicalInheritance from "./pages/blogs/PrototypeAndPrototypicalInheritance"
import ReactLifecycleMethods from "./pages/blogs/ReactLifecycleMethods"




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/understandinggit" element={<UnderstandingGitGitHub />} />
        <Route path="/blogs/ClientVsServerSideRendering" element={<ClientVsServerSideRendering />} />
        <Route path="/blogs/CoreConceptsReact" element={<CoreConceptsReact />} />
        <Route path="/blogs/UnderstandingPromises" element={<UnderstandingPromises />} />
        <Route path="/blogs/JavascriptConceptsPart1" element={<JavascriptConceptsPart1 />} />
        <Route path="/blogs/JavascriptConceptsPart2" element={<JavascriptConceptsPart2 />} />
        <Route path="/blogs/JavascriptEventLoopExplained" element={<JavascriptEventLoopExplained />} />
        <Route path="/blogs/PrototypeAndPrototypicalInheritance" element={<PrototypeAndPrototypicalInheritance />} />
        <Route path="/blogs/ReactLifecycleMethods" element={<ReactLifecycleMethods />} />
      </Routes>
    </Router>
  )
}

export default App
