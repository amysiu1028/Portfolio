import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ThemeProvider } from '../../contexts/ThemeContext.jsx';
import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Intro from '../Intro/Intro.jsx';
import Projects from '../Projects/Projects.jsx'
import Contact from '../Contact/Contact.jsx';
// import { useTheme } from '../../contexts/ThemeContext';

function App() {
  // const [count, setCount] = useState(0)
  // const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
      <main>
        <Routes>
          <Route 
          path='/'
          element={
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
          }></Route>
          <Route path='/projects' element={<> <Projects/> </>} ></Route>
          {/* <Route path='/testimonials' element={<> <Testimonials/> </>} ></Route> */}
          <Route path='/contact' element={<> <Contact/> </>} ></Route>
        </Routes>
      </main>
  )
}

export default App
