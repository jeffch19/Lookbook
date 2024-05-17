import React from 'react'

function Home() {
  return (
    <div>
      
      <div className='introduction flex-with-center' style={{backgroundImage: `url('./assets/introbg.svg')` }}>

        <div>
          <h1>Jeffrey Cummings</h1>

          <div className='intro-content d-flex justify-content-between' >
            <p>Software Engineer <br /> MERN Stack, Cloud Enthusiast</p>
            <button className='primary-button font-bold w-50'> Get Started </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home