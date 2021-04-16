import React from 'react'
import About from './About'
import CTA from './CTA'
import Footer from './Footer'
import Projects from './Projects'
import Hero from './Hero'

const App = () => {
  return (
    <div className="mx-auto text-center w-full">
      <Hero />
      <About />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

