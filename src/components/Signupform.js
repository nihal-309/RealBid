import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../styles/Signupform.css';

function Signupform() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    nationality: '',
    phone: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle phone change
  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone
    });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Check if any field is empty
    for (let key in formData) {
      if (!formData[key]) {
        isValid = false;
        newErrors[key] = 'This field is required';
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, proceed with form submission
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <div className='form-wrappergovernmentsignup'>
      <div className='formcontainergovernmentsignup'>
        <div className='inlinesectionformgovernmentsignup'>
          <div className='inputdetgovernmentsignup'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className='error'>{errors.firstName}</span>}
          </div>
          <div className='inputdetgovernmentsignup'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className='error'>{errors.lastName}</span>}
          </div>
          <div className='inputdetgovernmentsignup' id='emailsignupform'>
            <label htmlFor='email'>Email Id</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>
        </div>
        <div className='inlinesectionformgovernmentsignup' id='signupformsubmitsection'>
          <div className='inputdetgovernmentsignup' id='inputsignupnationality'>
            <label htmlFor='nationality' >Nationality</label>
            <input
              type='text'
              id='nationality'
              name='nationality'
              value={formData.nationality}
              onChange={handleChange}
            />
            {errors.nationality && <span className='error'>{errors.nationality}</span>}
          </div>
          <div className='phone-inputgovernmentsignup'>
            <label htmlFor='phone'>Mobile No.</label>
            <PhoneInput
              country={'in'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: 'phone',
                id: 'phone',
                className: 'phone-input-containersignup'
              }}
            />
            {errors.phone && <span className='error'>{errors.phone}</span>}
          </div>
          <div>
            <div className='submitgovernmentsignup' onClick={handleSubmit}>Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupform;
