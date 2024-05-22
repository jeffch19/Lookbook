import React from 'react'
import Header from '../components/Header'
import certdata from './certdata'

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





      <div className='container courses-list mb-5'>
        <h3 className='font-bold'>Certificates / Awards / Recommendations</h3>
        <hr />

        <div className='row mt-5'>
          {certdata.map(cert=>{
            return <div className='col-md-4 '>
              <div className='position-relative course'> 
              <img src={cert.image} alt='' className='w-100'/>
              <div className='course-content w-100'> 
                <h3>{cert.title}</h3>
                <hr />
                <p>{cert.description}</p>
                <button className='primary-button' onClick={() => window.open(cert.link, '_blank')}>DEMO</button>
              </div>
              </div> 
               </div>
          })}

        </div>

      </div>
    </div>
  )
}

export default About