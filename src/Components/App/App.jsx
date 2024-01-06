import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import '../../../index.css'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      <main>
        <section id="projects">
              <h2>Projects</h2>
              <Projects/>
              {/* <!-- Projects will be loaded here --> */}
          </section>

          <section id="testimonials">
              <h2>Testimonials</h2>
              {/* <!-- Testimonials will be loaded here --> */}
          </section>

          <section id="contact">
              <h2>Contact Me</h2>
              <form id="contactForm">
                  {/* <!-- Contact form will go here --> */}
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
