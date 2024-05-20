import React from 'react'

function Contact() {
  return (
    <div>
      
    <div className='container contact mt-5'>
      <div className='row pt-5'>
        <div className='col-md-6 p-5'>
          <img src="./assets/contactus.svg" alt="" />
        </div>
        <div className='col-md-6'>
          <div className='contact-form m-2 p-5 n-box2'>
            <h3 className='font-bold'>Contact Me</h3>
            <hr />
            <input type="text" className='form-control' placeholder='Name'/>
            <input type="text" className='form-control' placeholder='Email'/>
            <textarea className='form-control' rows={3} defaultValue={""} placeholder='Message . . .'/>
            <button className='primary-button mt-3'>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact