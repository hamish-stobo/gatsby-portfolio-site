import React from 'react'
import ParticlesContainer from './ParticlesContainer'
import About from './About'
import CTA from './CTA'
import Footer from './Footer'
import Projects from './Projects'
import Hero from './Hero'

const App = () => {
  return (
    <div className="mx-auto text-center w-full">
      <ParticlesContainer />
      <div className="z-10 relative -top-full">
        <Hero />
        <About />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App

