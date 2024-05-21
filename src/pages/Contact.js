// Import necessary hooks and components
import React, { useState, useCallback } from 'react';
import Header from '../components/Header';

// Define the useForm hook
const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({...prevValues, [name]: value }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      window.location.href = `mailto:17jcummings@gmail.com?subject=${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message)}`;
      setValues(initialState);
    }
  }, [initialState, validate]);

  return { values, errors, handleChange, handleSubmit };
};

// Define the validateForm function
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

// Define the validateEmail function
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Modify the Contact component to use the useForm hook
function Contact() {
  const initialState = {
    name: '',
    email: '',
    message: ''
  };

  const { values, errors, handleChange, handleSubmit } = useForm(initialState, validateForm);

  return (
    <div>
      <Header />
      <div className='container contact mt-5'>
        <div className='row pt-5'>
          <div className='col-md-6 p-5'>
            <img src="./assets/contactus.svg" alt="" />
          </div>
          <div className='col-md-6'>
            <div className='contact-form m-2 p-5 n-box2'>
              <h3 className='font-bold'>Contact Me</h3>
              <hr />
              <input
                type="text"
                name="name"
                className='form-control'
                placeholder='Name'
                value={values.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p>{errors.name}</p>}
              <input
                type="email"
                name="email"
                className='form-control'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p>{errors.email}</p>}
              <textarea
                name="message"
                className='form-control'
                rows={3}
                defaultValue={""}
                placeholder='Message...'
                value={values.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p>{errors.message}</p>}
              <button className='primary-button mt-3' onClick={handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;