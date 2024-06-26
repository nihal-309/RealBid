import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import '../styles/Businessform.css'
function Businessform() {
    const [phone, setPhone] = useState('')
    return (
        <div className='form-wrapperbusiness'>
            <div className='formcontainerbusiness'>
                <div className='inlinesectionformbusiness' id='firstsection'>
                    <div className='inputdetbusiness'>
                        <label htmlFor='field1' className='Buisnessfirst'>First Name</label>
                        <input type='text' /> 
                    </div>
                    <div className='inputdetbusiness'>
                        <label htmlFor='field2' className='Buisnessfirst'>Nationality</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetbusiness'>
                        <label htmlFor='field3' id='comapanybusiness'>Company Name</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='inlinesectionformbusiness'>
                    <div className='inputdetbusiness'>
                        <label htmlFor='field3' className='Buisnessfirst'>Last Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetbusiness'>
                    <label htmlFor='field4' id='companyaddbusiness'>Company Address</label>
                        <input type='text' id='regaddbusiness'/>
                    </div>
                </div>
                <div className='inlinesectionformbusiness'>
                    <div className='inputdetbusiness'>
                    <label htmlFor='field5' id='emailidbusiness'>Email ID </label>
                        <input type='text' />
                    </div>
                    <div className='inputdetbusiness'>
                    <label htmlFor='field6' className='Buisnessfirst'>Your Quiery</label>
                        <input type='text' id='querycolbusiness'/>
                    </div>
                </div>
                <div className='phone-inputbusiness'>
                    <label htmlFor='field7' id='mobnobusiness'>Mobile No.</label>
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
                    <div className='submitbusiness'>Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Businessform