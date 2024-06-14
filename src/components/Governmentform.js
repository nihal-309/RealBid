import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import '../styles/Governmentform.css'
function Governmentform() {
    const [phone, setPhone] = useState('')
    return (
        <div className='form-wrappergovernment'>
            <div className='formcontainergovernment'>
                <div className='inlinesectionformgovernment' id='firstsection'>
                    <div className='inputdetgovernment'>
                        <label htmlFor='field1'>First Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernment'>
                        <label htmlFor='field2'>Nationality</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernment'>
                        <label htmlFor='field3'>Company Name</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='inlinesectionformgovernment'>
                    <div className='inputdetgovernment'>
                        <label htmlFor='field3'>Last Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernment'>
                    <label htmlFor='field4'>Company Address</label>
                        <input type='text' id='regaddgovernment'/>
                    </div>
                </div>
                <div className='inlinesectionformgovernment'>
                    <div className='inputdetgovernment'>
                    <label htmlFor='field5'>Email ID </label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernment'>
                    <label htmlFor='field6'>Your Quiery</label>
                        <input type='text' id='querycolgovernment'/>
                    </div>
                </div>
                <div className='phone-inputgovernment'>
                    <label htmlFor='field7'>Mobile No.</label>
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                        inputProps={{
                            name: 'phone',
                            id: 'phone',
                            className: 'phone-input-container'
                        }}
                    />
                </div>
                <div>
                    <div className='submitgovernment'>Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Governmentform