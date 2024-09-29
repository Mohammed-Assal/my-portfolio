import React from 'react'
import Header from '../component/Headers/Header'
import Hero from '../component/hero/Hero'
import ProjectsSection from '../component/projects/projects'
import Skills from '../component/skills/Skills'
import Contact from '../component/contact/contact'
import Footer from '../component/footer/Footer'

function Home() {
  return (
    <div className=" md:px-6 px-4 bg-[#07071f] ">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div className="mb-[150px]" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home
