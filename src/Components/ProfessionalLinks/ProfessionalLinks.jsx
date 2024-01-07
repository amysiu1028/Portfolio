import '../../index.css';
import LinkedinIcon from '../../assets/icons/Linkedin.png'
import Resume from '../../assets/icons/Resume.png'

function ProfessionalLinks() {
  return (
    <div className='professional-links'>
        <a class='prof-link-design' id='minor' rel='noopener noreferrer' href='https://docs.google.com/document/d/1Nrl-EO1l4c7cPDUEQQxxhvy4XWRsKcEPwr1gDc-GTh4/edit' target='_blank'>
          <p>Resume</p>
          <img className='icon' src={Resume} alt='Resume icon image'></img>
        </a>
        <a class='prof-link-design' id='minor' rel='noopener noreferrer' href='https://www.linkedin.com/in/amy-siu-206a71a8/' target='_blank'>
          <p>Linkedin</p>
          <img className='icon' src={LinkedinIcon} alt='Linkedin icon'></img>
        </a>
    </div>
  )
}

export default ProfessionalLinks
