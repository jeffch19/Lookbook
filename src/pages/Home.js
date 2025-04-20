import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div>

      <Header />

      <div className='introduction flex-with-center' style={{ backgroundImage: `url('./assets/introbg.svg')` }}>

        <div>
          <h1 data-aos='fade-up'>Jeff Cummings</h1>

          <div className='intro-content d-flex justify-content-between' >
            <p>Software Engineer <br /> MERN Stack , <br /> Cloud Enthusiast</p>
            <button className='primary-button font-bold' ><a href='#carousel'>Get Started</a>  </button>
          </div>

        </div>

      </div>
      <Carousel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,128L21.8,144C43.6,160,87,192,131,213.3C174.5,235,218,245,262,208C305.5,171,349,85,393,69.3C436.4,53,480,107,524,160C567.3,213,611,267,655,240C698.2,213,742,107,785,96C829.1,85,873,171,916,181.3C960,192,1004,128,1047,133.3C1090.9,139,1135,213,1178,213.3C1221.8,213,1265,139,1309,133.3C1352.7,128,1396,192,1418,224L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
      </div>

      <div className='container'>
        <div className='row justify-content-start'>
          <div className='col-md-4'>

            <div className='n-box2 p-5 font-bold' data-aos='fade-right'> 
              <h1> Yes you are right...</h1>
              <br />
              <p>I am a Full Stack enthusiast...</p>
            </div>

          </div>

        </div>
      </div>


      <div className='container'>
        <div className='row pt-5 justify-content-center'>
          <div className='col-md-4'>

            <div>
              <img src="./assets/jsbuff.svg" alt="" height="200" className='w-100' data-aos='fade-up'/>

            </div>

          </div>

        </div>
      </div>


      <div className='container'>
        <div className='row pt-5 justify-content-end'>
          <div className='col-md-4'>

            <div className='n-box2 p-5 font-bold' data-aos='fade-left'>
              <p>JavaScript is one of the most top-ranked programming languages because of
                its ubiquitous use on all platforms and mass adoption. Main Use Cases: Web Development.
              </p>

            </div>

          </div>

        </div>
      </div>


    <div className='devstack container my-5 n-box2 py-5'>

      <div className='text-center'>
    <h3 className='font-bold text-center'> My Development Stack</h3>
    <hr />
    <img src="./assets/developer.svg" alt="" height='200' width="200" className='text-center'/>
    
    </div>

    

    <div className='row'>
      <div className='col-md-4'>
        <div className='font-bold'>
          <h3 className='font-bold'> Front End Technologies</h3>
          <hr />
          <p>HTML</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>jQuery</p>
          <p>Progressive Web Applications (PWA)</p>
          <p>CSS</p>

        </div>

      </div>

      <div className='col-md-4'>
        <div className='font-bold text-center'>
          <h3 className='font-bold'> UI/Styling</h3>
          <hr />
          <p>Tailwind CSS</p>
          <p>Bootstrap</p>
          <p>AntDesign</p>
          <p>Semantic UI</p>
          <p>Material UI</p>


        </div>

      </div>

      <div className='col-md-4'>
        <div className='font-bold text-end'>
          <h3 className='font-bold'> Back End/DB</h3>
          <hr />
          <p>Python</p>
          <p>NodeJs</p>
          <p>Express</p>
          <p>SQL</p>
          <p>MongoDB</p>
          <p>Quality Assurance (Unit Testing, Linting, Continuous Integration)</p>
          <p>APIs (REST, JSON, AJAX, GraphQL, HTTP, Client-Server)</p>
          <p>PyTorch</p>
          

        </div>

      </div>
    </div>

    </div>


    <div>

    <h3 className='font-bold text-center'>Who is Jeff?</h3>
    <div className='who-is-jeff flex-with-center' style={{backgroundImage:`url('/assets/whoisjeff.svg')`}}>

<div>
  <h3>Hi , Hello , Namaste ...</h3>
  <hr />
  <p><pre>{JSON.stringify({
    name: "Jeff Cummings",
    from: "Philadelphia, PA",
    age: 26,
    gender: "Male"
  } , null , 2)}</pre></p>
</div>

</div>
    </div>


    </div>
  )
}

export default Home