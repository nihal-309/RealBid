import React, { useState } from 'react';
import logoform from '../assets/locationlogorentalagg.png';
import '../styles/RentalAggrementmain.css';

function Rentalaggrementmai() {
  // State for form fields
  const [formData, setFormData] = useState({
    state: '',
    city: ''
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
    <div className='holderrentalaggrement'>
      <div className='contentholdrentalagg'>
        <div className='leftsectionrental'>
          <p className='leftsectionheading'>
            Online Rental Agreement
          </p>
          <p className='rentalaggrementcont'>Get your Rental Agreement online in 5 min.</p>
          <p className='rentalaggrementcont'>Get your own agreement on 100 rupees stamp paper.</p>
          <p className='rentalaggrementcont'>Get your printed agreement on your door step with live tracking.</p>
          <p className='rentalaggrementcont'>Get e-signature without any extra cost.</p>
          <p className='rentalaggrementcont'>Guaranteed lowest prices, all from the comfort of your home!</p>
          <p className='rentalaggrementcont'>Admissible in a court of law with legal validity.</p>
        </div>
        <div className='rightsectionrental'>
          <img src={logoform} alt='' className='imagerental'></img>
          <div className='form-wrappergovernmentrentalaggrement'>
            <div className='formcontainergovernmentrentalaggrement'>
              <div className='inlinesectionformgovernmentrentalaggrement'>
                <div className='inputdetgovernmentrentalaggrement'>
                  <label htmlFor='state' className='labelpropmanag'>State</label>
                  <input
                    type='text'
                    id='state'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && <span className='error'>{errors.state}</span>}
                </div>
                <div className='inputdetgovernmentrentalaggrement'>
                  <label htmlFor='city' className='labelpropmanag'>City</label>
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
              <div>
                <div className='submitgovernmentrentalaggrement' onClick={handleSubmit}>
                  Check Price of Rental Agreement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rentalaggrementmai;
