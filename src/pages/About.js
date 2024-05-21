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
          <img src="./assets/me.jpg" alt="" />
          <div className='why-jeff-content'>
          
            <p>Greetings, digital wanderer! I'm Jeff Cummings. With a keyboard as my wand 
              and caffeine as my elixer, I navigate the ever-evolving tech landscape using
              JavaScript, Python, and other tools of the trade. When I'm not debugging or developing
              innovative applications, you might find me exploring new technologies, playing soccer,
              or walking my dogs! Welcome to my portfolio, where creativity meets functionality and every project 
              tells a story.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default About