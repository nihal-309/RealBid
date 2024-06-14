import React, { useState } from 'react'
import '../styles/Infoform.css'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
function Infoform() {
    const [phone, setPhone] = useState('')
    return (
        <div className='form-wrapper'>
            <div className='formcontainer'>
                <div className='inlinesectionform'>
                    <div className='inputdet'>
                        <label htmlFor='field1'>First Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdet'>
                        <label htmlFor='field2'>Nationality</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='inlinesectionform'>
                    <div className='inputdet'>
                        <label htmlFor='field3'>Last Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdet'>
                    <label htmlFor='field4'>Registered Address</label>
                        <input type='text' id='regadd'/>
                    </div>
                </div>
                <div className='inlinesectionform'>
                    <div className='inputdet'>
                    <label htmlFor='field5'>Email ID </label>
                        <input type='text' />
                    </div>
                    <div className='inputdet'>
                    <label htmlFor='field6'>Your Quiery</label>
                        <input type='text' id='querycol'/>
                    </div>
                </div>
                <div className='phone-input'>
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
                    <div className='submit'>Continue</div>
                </div>
            </div>
        </div>
    )
}
export default Infoform