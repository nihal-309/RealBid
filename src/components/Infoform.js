import React, { useState } from 'react';
import '../styles/Infoform.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

function Infoform() {
    const [formData, setFormData] = useState({
        firstName: '',
        nationality: '',
        lastName: '',
        registeredAddress: '',
        email: '',
        query: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validateForm = () => {
        let newErrors = {};
        let isValid = true;
        for (let key in formData) {
            if (!formData[key]) {
                isValid = false;
                newErrors[key] = 'This field is required';
            }
        }

        setErrors(newErrors);
        return isValid;
    };
    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Form has errors:', errors);
        }
    };
    return (
        <div className='form-wrapper'>
            <div className='formcontainer'>
                <div className='inlinesectionform'>
                    <div className='inputdet'>
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
                    <div className='inputdet'>
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
                <div className='inlinesectionform'>
                    <div className='inputdet'>
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
                    <div className='inputdet'>
                        <label htmlFor='registeredAddress'>Registered Address</label>
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
                <div className='inlinesectionform'>
                    <div className='inputdet'>
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
                    <div className='inputdet'>
                        <label htmlFor='query'>Your Query</label>
                        <input
                            type='text'
                            id='query'
                            name='query'
                            value={formData.query}
                            onChange={handleChange}
                        />
                        {errors.query && <span className='error'>{errors.query}</span>}
                    </div>
                </div>
                <div className='phone-input'>
                    <label htmlFor='phone'>Mobile No.</label>
                    <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={phone => setFormData({ ...formData, phone })}
                        inputProps={{
                            name: 'phone',
                            id: 'phone',
                            className: 'phone-input-container'
                        }}
                    />
                    {errors.phone && <span className='error'>{errors.phone}</span>}
                </div>
                <div>
                    <div className='submitpersonal' onClick={handleSubmit}>Continue</div>
                </div>
            </div>
        </div>
    );
}

export default Infoform;
