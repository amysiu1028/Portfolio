import React, { useEffect, useState } from 'react';
import '../../index.css';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from './index.jsx';
import NavigateIcon from '../../assets/icons/NavigateIcon.png'

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aerobites = [image1, image2, image3];
  const rancidtomatillos = [image4, image5, image6];
  const ventures = [image7, image8, image9];

  useEffect(() => {
    const aerobitesIntervalId = handleImageArray(aerobites);
    const rancidtomatillosIntervalId = handleImageArray(rancidtomatillos);
    const venturesIntervalId = handleImageArray(ventures);

    return () => {
      clearInterval(aerobitesIntervalId);
      clearInterval(rancidtomatillosIntervalId);
      clearInterval(venturesIntervalId);
    };
  }, []);

  function handleImageArray(projectImages) {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === projectImages.length - 1) ? 0 : prevIndex + 1);
    }, 3000);
    // Clear interval is react method to clean interval the image changes
    return () => clearInterval(intervalId);
  }

  function displayImageArrays(imageArray) {
    const displayImages = imageArray.map((image, index) => (
      <li key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
        <img className='image-size' src={image} alt='Aerobites application' />
      </li>
    ));
    return displayImages;
  }

  const displayAerobites = displayImageArrays(aerobites);
  const displayRancid = displayImageArrays(rancidtomatillos);
  const displayVenture = displayImageArrays(ventures);

  return (
    <div>
        <h2>Projects</h2>
        <section className="projects-container">
          <div className='single-project-container'>
            <section className='project'>{displayAerobites}</section>
            <div className='professional-links'>
              <a class='prof-link-design' rel='noopener noreferrer' href='https://github.com/amysiu1028/AeroBites' target='_blank'>
              <p>GitHub Repo</p>
              <img className='icon' src={NavigateIcon} alt='Resume icon image'></img>
              </a>
              <a class='prof-link-design' rel='noopener noreferrer' href='https://aerobites-ioh3ctq6t-amy-sius-projects.vercel.app/' target='_blank'>
              <p>Deployed Site</p>
              <img className='icon' src={NavigateIcon} alt='Resume icon image'></img>
              </a>
            </div>
            <section class-Name='single-description-container'>
              <h2>Summary</h2>
              <p>For this project, my team and I developed a database containing authentic terminal restaurant data from fourteen airports. The frontend application we created enables users to choose an airport, explore terminals, and view restaurants within each terminal, allowing them to mark favorite airports. This application showcases a cohesive synergy between a user-friendly front end and a robust back end. Whether exploring and favoriting airports, navigating terminals, or discovering restaurants, users can enjoy a seamless and engaging experience facilitated by the application.</p>
              <h2>Tech Stack</h2>
              <p> Knex, Express, PostgreSQL, React, React Router, HTML, CSS, Cypress E2E Testing, Heroku, Vercel</p>
            </section>
          </div>
          <div className='single-project-container'>

            <section className='project'>{displayRancid}</section>
            <div className='professional-links'>
              <a class='prof-link-design' rel='noopener noreferrer' href='https://github.com/amysiu1028/rancid-tomatillos' target='_blank'>
              <p>GitHub Repo</p>
              <img className='icon' src={NavigateIcon} alt='Resume icon image'></img>
              </a>
              <a class='prof-link-design' rel='noopener noreferrer' href='https://rancid-tomatillos-seven-tan.vercel.app/' target='_blank'>
              <p>Deployed Site</p>
              <img className='icon' src={NavigateIcon} alt='Resume icon image'></img>
              </a>
            </div>
            <section class-Name='single-description-container'>
              <h2>Summary</h2>
              <p>This application is designed to provide users with a comprehensive movie exploration experience, similar to popular platforms like Rotten Tomatoes. The application allows users to browse through a curated collection of movies, view detailed information about each movie, watch trailers or clips, and access reviews to make informed decisions about their movie choices.</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h2>Tech Stack</h2>
              <p>Tech Stack Used: React, React Router, HTML, CSS, GitHub, NPM, Cypress E2E Testing, Vercel</p>
            </section>
          </div>
          <div className='single-project-container'>
            <section className='project'>{displayVenture}</section>
            <div className='professional-links'>
                <a class='prof-link-design' rel='noopener noreferrer' href='https://github.com/amysiu1028/Ventures' target='_blank'>
                <p>GitHub Repo</p>
                <img className='icon' src={NavigateIcon} alt='Resume icon image'></img>
                </a>
                <a class='prof-link-design' rel='noopener noreferrer' href='https://amysiu1028.github.io/Ventures/' target='_blank'>
                <p>Deployed Site</p>
                <img className='icon' src={NavigateIcon} alt='Resume icon image'></img>
                </a>
              </div>
            <section class-Name='single-description-container'>
              <h2>Summary</h2>
              <p>This project creates a user-friendly travel dashboard where users can log in and view their trip history, check their trip expenses for a selected year, add new trips by inputting required input fields, reveal that trip's estimated cost, and update upcoming and pending trips. The platform ensures accessibility with navigable tabs and is screen reader-friendly for users with visual impairments to effectively engage with the application's content and functionality.</p>
              <br></br>
              <br></br>
              <h2>Tech Stack</h2>
              HTML, CSS, JavaScript, Webpack, Mocha, GitHub, NPM,js-datepicker, Figma
          </section>
          </div>
      </section>
    </div>
  );
}

export default Projects;

