import '../../index.css'

function Header() {
  return (
    <section className='header'>
        <header className='header-nav-links'>
          <a className='header-link' href="#projects">Projects</a>
          <a className='header-link' href="#testimonials">Testimonials</a>
          <a className='header-link' href="#contact">Contact</a>
        </header>
    </section>
  )
}

export default Header
