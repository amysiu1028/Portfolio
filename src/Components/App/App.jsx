import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import Header from '../Header/Header.jsx'
import Intro from '../Intro/Intro.jsx';
import Projects from '../Projects/Projects.jsx'

//create contact and link 


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <Intro/>
      </div>
      <main>
          <section>
              <Projects/> 
          </section>

          <section id="testimonials">
              <h2>Testimonials</h2>
          </section>

          <section id="contact">
              <h2>Contact Me</h2>
              <form id="contactForm">
              </form>
          </section>
      </main>
      <footer>
        <p>&copy; 2024 Amy Siu</p>
      </footer>
    </>
  )
}

export default App
