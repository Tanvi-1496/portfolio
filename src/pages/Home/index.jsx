import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import About from '../../views/About'
import Projects from '../../views/Projects'
import Contact from '../../views/Contact'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home