import React, {useState, useEffect} from 'react'
import { Helmet } from "react-helmet"
import ParticlesContainer from './ParticlesContainer'
import About from './About'
import CTA from './CTA'
import Footer from './Footer'
import Projects from './Projects'
import Hero from './Hero'

const App = () => {
  const [isTouchscreen, setIsTouchscreen] = useState(false)
  useEffect(() => {
    setIsTouchscreen(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
  }, [])
  return (
    <div className="mx-auto text-center w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="web developer, software developer, react, javascript" />
        <meta name="description" content="Hamish Stobo's portfolio website" />
        <meta name="author" content="Hamish Stobo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hamish Stobo Portfolio</title>
      </Helmet>
      <ParticlesContainer />
      <div className="z-10 relative -top-full">
        <Hero isTouchscreen={isTouchscreen} />
        <About />
        <Projects />
        <CTA isTouchscreen={isTouchscreen} />
        <Footer />
      </div>
    </div>
  )
}

export default App

