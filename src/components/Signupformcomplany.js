import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../styles/Signupformcompany.css';

function Signupformcomplany() {
  const [formData, setFormData] = useState({
    firstName: '',
    nationality: '',
    lastName: '',
    registeredAddress: '',
    email: '',
    state: '',
    companyName: '',
    city: '',
    phone: ''
  });

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
    <div className='form-wrappersignupcompany'>
      <div className='formcontainersignupcompany'>
        <div className='inlinesectionformsignupcompany'>
          <div className='inputdetsignupcompany'>
            <label htmlFor='firstName' id='firstnamesignupcomp'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className='error'>{errors.firstName}</span>}
          </div>
          <div className='inputdetsignupcompany' id='nationalitysignupcomp'>
            <label htmlFor='nationality'>Nationality</label>
            <input
              type='text'
              id='nationality'
              name='nationality'
              value={formData.nationality}
              onChange={handleChange}
            />
            {errors.nationality && <span className='error'>{errors.nationality}</span>}
          </div>
        </div>
        <div className='inlinesectionformsignupcompany'>
          <div className='inputdetsignupcompany'>
            <label htmlFor='lastName'id='firstnamesignupcomp'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className='error'>{errors.lastName}</span>}
          </div>
          <div className='inputdetsignupcompany'>
            <label htmlFor='registeredAddress' id='addresssignupcomp'>Registered Address</label>
            <input
              type='text'
              id='registeredAddress'
              name='registeredAddress'
              value={formData.registeredAddress}
              onChange={handleChange}
            />
            {errors.registeredAddress && <span className='error'>{errors.registeredAddress}</span>}
          </div>
        </div>
        <div className='inlinesectionformsignupcompany'>
          <div className='inputdetsignupcompany'>
            <label htmlFor='email'>Email ID</label>
            <input
              type='text'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>
          <div className='inputdetsignupcompany'>
            <label htmlFor='state' id='statesignupcomp'>State</label>
            <input
              type='text'
              id='state'
              name='state'
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <span className='error'>{errors.state}</span>}
          </div>
        </div>
        <div className='inlinesectionformsignupcompany'>
          <div className='inputdetsignupcompany'>
            <label htmlFor='companyName' id='compnamecomp'>Company Name</label>
            <input
              type='text'
              id='companyName'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && <span className='error'>{errors.companyName}</span>}
          </div>
          <div className='inputdetsignupcompany'>
            <label htmlFor='city'  id='citycomp'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className='error'>{errors.city}</span>}
          </div>
        </div>
        <div className='phone-inputsignupcompany'>
          <label htmlFor='phone' id='mobnoocomp'>Mobile No.</label>
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phone',
              id: 'phone',
              className: 'phone-input-containersignupcomp'
            }}
          />
          {errors.phone && <span className='error'>{errors.phone}</span>}
        </div>
        <div>
          <div className='submitsignupcompany' onClick={handleSubmit}>Continue</div>
        </div>
      </div>
    </div>
  );
}

export default Signupformcomplany;
