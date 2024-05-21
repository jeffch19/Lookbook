import React from 'react'
import Header from '../components/Header'

function About() {
  return (
    <div>
      <Header />
      <div className='courses-intro' style={{ backgroundImage: `url('./assets/courses.svg')` }}>

        <div className='courses-intro-content'>
          <h1>Resume / Bio</h1>
          <div>
            <p> "Turning challenges into opportunities through creativity and perseverance."</p>
            <button className='primary-button'>DOWNLOAD RESUME</button>
          </div>
        </div>

      </div>


      <div className='why-jeff-parent'>
        <div className='why-jeff n-box1 flex-with-center'>
          {/* <h1></h1> */}
          
          <div className='why-jeff-content'>
          <img src="./assets/me.jpg" alt="" />
            <p>Greetings! I'm Jeff Cummings. With JavaScript, Python, and caffeine, I navigate the tech landscape. When I'm not coding, I'm exploring new tech, playing soccer, or walking my dogs. Welcome to my portfolio, where creativity meets functionality.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default About