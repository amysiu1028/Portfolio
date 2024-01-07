import './Intro.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import profile from '../../assets/profile/profile.png';

function Intro() {
  return (
    <div>
      <section className='profile-and-intro-container'>
        <section className='all-intro-container'>
          <section className='intro-toggle-container'>
            <h1>Hi, I'm Amy</h1><DarkModeToggle/>
          </section>
          <p>Click the sun or the moon to see what it does!</p>
          <h2><b>Front-End Software Engineer</b> learning to be Full Stack</h2>
          <p>I'm a creative problem solver with 10+ years of healthcare, research, and educational experience. I have a passion for improving the lives of others, continous learning, and collaboration</p>
        </section>
        <section className='profile-container'>
          <img class='profile' src={profile} alt='photo of Amy Siu'></img>
        </section>
      </section>
    </div>
  )
}

export default Intro

