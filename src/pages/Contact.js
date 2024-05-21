import React, { useState, useCallback } from 'react';

function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showThankYouPopup, setShowThankYouPopup] = useState(false); // New state for controlling the popup visibility
  const [initialState, setInitialState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value });
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Send email
      window.location.href = `mailto:17jcummings@gmail.com?subject=${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message)}`;

      // Show thank you popup
      setShowThankYouPopup(true);

      // Clear form after submission
      setValues(initialState);
    }
  }, [values, initialState]);

  const validateForm = (values) => {
    let errors = {};
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

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
              <input type="text" name="name" className='form-control' placeholder='Name' onChange={handleChange}/>
              <input type="text" name="email" className='form-control' placeholder='Email' onChange={handleChange}/>
              <textarea name="message" className='form-control' rows={3} defaultValue={""} placeholder='Message...' onChange={handleChange}/>
              <button className='primary-button mt-3' onClick={handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      {showThankYouPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
          Thank you for your email!
          <button onClick={() => setShowThankYouPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Contact;