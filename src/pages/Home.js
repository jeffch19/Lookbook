import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div>

      <Header />
      
      <div className='introduction flex-with-center' style={{backgroundImage: `url('./assets/introbg.svg')` }}>

        <div>
          <h1>Jeff Cummings</h1>

          <div className='intro-content d-flex justify-content-between' >
            <p>Software Engineer <br /> MERN Stack , <br /> Cloud Enthusiast</p>
            <button className='primary-button font-bold'> Get Started </button>
          </div>
          
        </div>
        
      </div>
      <Carousel />
    </div>
  )
}

export default Home