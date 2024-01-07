import { useState } from 'react'
import '../../index.css';
import Header from '../Header/Header.jsx'
import Intro from '../Intro/Intro.jsx';
import Projects from '../Projects/Projects.jsx'
import Contact from '../Contact/Contact.jsx';
import ProfessionalLinks from '../ProfessionalLinks/ProfessionalLinks.jsx';
import Testimonials from '../Testimonials/Testimonials.jsx';
import { Routes, Route} from 'react-router-dom'
import NotFound from '../NotFound/NotFound.jsx';

function App() {
  const [ contacts, setContacts ] = useState([])
  
  function addContact(newContact) {
    setContacts([...contacts,newContact])
  }

  return (
    <>
      <Routes>
        <Route
        path='/'
        element={
          <main>
            <div>
              <Header/>
              <ProfessionalLinks/>
            </div>
            <div>
              <Intro/>
            </div>
            <main>
                <section id='projects'>
                    <Projects/> 
                </section>

                <section id="testimonials">
                    <Testimonials/>
                </section>

                <section id="contact">
                    <ProfessionalLinks/>
                    <Contact addContact={addContact}/>
                </section>
            </main>
            <footer>
              <p>&copy; 2024 Amy Siu</p>
            </footer>
          </main>
        }></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
