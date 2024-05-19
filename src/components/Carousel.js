import React from 'react'
import {FaAws, FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact} from 'react-icons/fa'

function Carousel() {
  return (
    <div>
      
      <div className='carousel-parent position-relative'>
      <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies I Use</h1>

      <div className='gallery'>

        <span>
          <FaReact color='cyan'/>
        </span>

        <span>
          <FaHtml5 color='orange'/>
        </span>

        <span>
          <FaAws color='#FF990'/>
        </span>

        <span>
          <FaNodeJs color='green'/>
        </span>

        <span>
          <FaJsSquare color='yellow'/>
        </span>

        <span>
          <FaBootstrap color='blue'/>
        </span>

        <span>
          <FaCss3 color='blue'/>
        </span>

        <span>
          <FaPython color='#306998'/>
        </span>

      </div>


      </div>
    </div>
  )
}

export default Carousel