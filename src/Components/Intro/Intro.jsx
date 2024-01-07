import '../../index.css'
// import { Switch } from '../Switch/Switch'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

function Intro() {
  return (
    <div>
        <section class='intro-toggle-container'>
          <h1>Hi, I'm Amy</h1>
          <DarkModeToggle/>
        </section>
        <p>Click the sun or the moon to see what it does!</p>
        <h2><b>Front-End Software Engineer</b> learning to be Full Stack</h2>
        <p>I'm a creative problem solver with 10+ years of healthcare, research, and educational experience. I have a passion for improving the lives of others, continous learning, and collaboration</p>
    </div>
  )
}

export default Intro
