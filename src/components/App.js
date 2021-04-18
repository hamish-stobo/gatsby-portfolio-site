import React from 'react'
import { Helmet } from "react-helmet"
import ParticlesContainer from './ParticlesContainer'
import About from './About'
import CTA from './CTA'
import Footer from './Footer'
import Projects from './Projects'
import Hero from './Hero'

const App = () => {
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

