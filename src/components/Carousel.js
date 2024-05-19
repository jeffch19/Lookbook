import React from 'react'
import {FaAws, FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact} from 'react-icons/fa'

function Carousel() {
  return (
    <div>
      
      <div className='carousel-parent position-relative'>
      <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies I Use</h1>

      <div className='gallery'>

        <span style={{'--i' : 1}}>
          <FaReact color='cyan'/>
        </span>

        <span style={{'--i' : 2}}>
          <FaHtml5 color='orange'/>
        </span>

        <span style={{'--i' : 3}}>
          <FaAws color='#FF990'/>
        </span>

        <span style={{'--i' : 4}}>
          <FaNodeJs color='green'/>
        </span>

        <span style={{'--i' : 5}}>
          <FaJsSquare color='yellow'/>
        </span>

        <span style={{'--i' : 6}}>
          <FaBootstrap color='blue'/>
        </span>

        <span style={{'--i' : 7}}>
          <FaCss3 color='blue'/>
        </span>

        <span style={{'--i' : 8}}>
          <FaPython color='#306998'/>
        </span>

      </div>


      </div>
    </div>
  )
}

export default Carousel