import React, { useEffect, useState } from 'react';
import '../../index.css';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from './index.jsx';

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
    // Clear the interval when the component unmounts or when the projectImages array changes
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
        <section className='aerobites-project'>{displayAerobites}</section>
        <section className='rancid-project'>{displayRancid}</section>
        <section className='rancid-project'>{displayVenture}</section>
      </section>
    </div>
  );
}

export default Projects;


// // import React from 'react'
// import '../../index.css'
// import { useState } from 'react'
// // import { image1, image2, image3, image4, image5 } from '../../assets/aerobites'
// import { useEffect } from 'react'
// import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from './index.jsx';

// function Projects() {
//   const [ currentImageIndex, setCurrentImageIndex ] = useState(0)

//   const projects = {
//     aerobites: [image1, image2, image3],
//     rancidtomatillos: [image4, image5, image6],
//     ventures: [image7, image8, image9]
//   }

//   useEffect(() => {
//     const aerobitesIntervalId = startInterval(projects.aerobites);
//     const rancidtomatillosIntervalId = startInterval(projects.rancidtomatillos);
//     const venturesIntervalId = startInterval(projects.ventures);

//     return () => {
//       clearInterval(aerobitesIntervalId);
//       clearInterval(rancidtomatillosIntervalId);
//       clearInterval(venturesIntervalId);
//     };
//   }, [projects]);

//   function startInterval(imageArray) {
//     return setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1));
//     }, 3000);
//   }
 
//   // useEffect(() => {
//   //   const projectKeys = Object.keys(projects);

//   //   const intervalIds = projectKeys.map((projectKeyName) => {
//   //     const intervalId = setInterval(() => {
//   //       setCurrentImageIndex((prevIndex) => (prevIndex === projects[projectKeyName].length - 1 ? 0 : prevIndex + 1));
//   //     }, 3000);

//   //     // Return an object with projectKeyName and intervalId
//   //     return { projectKeyName, intervalId };
//   //   });

//   //   return () => {
//   //     // Clear all intervalIds when the component unmounts
//   //     intervalIds.forEach(({ intervalId }) => clearInterval(intervalId));
//   //   };
//   // }, [projects]);

//   // useEffect(() => {
//   //  Object.keys(projects).forEach((projectKeyName) => {
//   //   handleImageArray(projects[projectKeyName])
//   //  })
//   //  return () => {
//   //   Object.keys(projects).forEach((projectKeyName) => {
//   //     clearInterval(projects[projectKeyName].intervalId)
//   //   })
//   //  }
//   // }, [projects])
//   // //clearInterval() function is a built-in JavaScript function that clears a timer set with the setInterval() function. It stops the interval specified by the interval ID,

//   // function handleImageArray(imageArray) {
//   //   const intervalId = setInterval(() => {
//   //     setCurrentImageIndex((prevIndex) => (prevIndex === imageArray.length - 1) ? 0: prevIndex + 1)
//   //   }, 3000)
//   //   //add another key value to the imageArray so we can use dot notation
//   //   imageArray.intervalId = intervalId
//   // }

//   function displayImageArrays(imageArray) {
//     const displayImages = imageArray.map((image,index) => {
//       return (
//         <li key={index} style={{display: index === currentImageIndex ? 'block' : 'none'}}
//         >
//           <img className='image-size' src={image}
//           alt={`${imageArray} application`}
//           ></img>
//         </li>
//       )
//     })
//     return displayImages
//   }
  
//   return (
//     <div>
//       <h2>Projects</h2>
//       <section className="projects-container">
//         {Object.keys(projects).map((projectKeyName) => {
//           return (
//             <section key={projectKeyName} className={`${projectKeyName}-project`}>{displayImageArrays(projects[projectKeyName])}</section>
//           )
//         })}
//       </section>
//     </div>
//   )
// }

// export default Projects
