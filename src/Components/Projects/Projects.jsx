// import React from 'react'
import '../../../index.css'
import { image1, image2, image3, image4, image5 } from '../../images'
//to import images in react, I have to install @vitejs/plugin-react and @vitejs/plugin-react-images plugins: npm install @vitejs/plugin-react @vitejs/plugin-react-images --save-dev

function Projects() {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0)
  const aerobitesImages = [ image1, image2, image3, image4, image5 ]

  useEffect(() => {
    //set interval
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex === (aerobitesImages.images.length - 1) ? 0 : prevIndex + 1)
    }, 3000)
    //clearInterval() function is a built-in JavaScript function that clears a timer set with the setInterval() function. It stops the interval specified by the interval ID, which is returned by setInterval()
    return () => clearInterval(intervalId);
  }, [aerobitesImages, currentImageIndex])
  
  const displayAerobites = aerobitesImages.map((image,index => {
    return (
      <li key={index}
      style={{display: index === currentIndex ? 'block' : 'none'}}
      >
        <img
        src={image}
        alt='Aerobites application'
        ></img>
      </li>
    )
  }))
  
  return (
    <div>
      <h2>Projects</h2>
      <section>
        <section className='aerobites-project'>{displayAerobites}</section>
      </section>
    </div>
  )
}

export default Projects
