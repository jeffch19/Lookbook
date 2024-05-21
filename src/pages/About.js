import React from 'react'

function About() {
  return (
    <div>
      <div className='courses-intro' style={{backgroundImage: `url('./assets/courses.svg')`}}>

        <div className='courses-intro-content'>
          <h1>Resume / Bio</h1>
          <div>
          <p> "Turning challenges into opportunities through creativity and perseverance."</p>
          <button className='primary-button'>DOWNLOAD RESUME</button>
          </div>
        </div>

        </div>
    </div>
  )
}

export default About