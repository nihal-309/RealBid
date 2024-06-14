import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import '../styles/Signupformcompany.css'
function Signupformcomplany() {
    const [phone, setPhone] = useState('')
    return (
        <div className='form-wrappersignupcompany'>
            <div className='formcontainersignupcompany'>
                <div className='inlinesectionformsignupcompany'>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field1'>First Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field2'>Nationality</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='inlinesectionformsignupcompany'>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field3'>Last Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field4'>Registered Address</label>
                        <input type='text' id='regaddsignupcompany' />
                    </div>
                </div>
                <div className='inlinesectionformsignupcompany'>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field5'>Email ID </label>
                        <input type='text' />
                    </div>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field6'>State</label>
                        <input type='text' id='querycolsignupcompany' />
                    </div>
                </div>
                <div className='inlinesectionformsignupcompany'>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field5'>Company Name </label>
                        <input type='text' />
                    </div>
                    <div className='inputdetsignupcompany'>
                        <label htmlFor='field6'>City</label>
                        <input type='text' id='querycolsignupcompany' />
                    </div>
                </div>
                <div className='phone-inputsignupcompany'>
                    <label htmlFor='field7'>Mobile No.</label>
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                        inputProps={{
                            name: 'phone',
                            id: 'phone',
                            className: 'phone-input-containersignupcomp'
                        }}
                    />
                </div>
                <div>
                    <div className='submitsignupcompany'>Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Signupformcomplany