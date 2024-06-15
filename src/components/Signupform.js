import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import '../styles/Signupform.css'
function Signupform() {
    const [phone, setPhone] = useState('')
    return (
        <div className='form-wrappergovernmentsignup'>
            <div className='formcontainergovernmentsignup'>
                <div className='inlinesectionformgovernmentsignup'>
                    <div className='inputdetgovernmentsignup'>
                        <label htmlFor='field1'>First Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernmentsignup'>
                        <label htmlFor='field2'>Last Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernmentsignup'>
                        <label htmlFor='field3'>Email Id</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='inlinesectionformgovernmentsignup' id='signupformsubmitsection'>
                    <div className='inputdetgovernmentsignup' id='inputsignupnationality'>
                        <label htmlFor='field5'>Nationality </label>
                        <input type='text'/>
                    </div>
                    <div className='phone-inputgovernmentsignup'>
                        <label htmlFor='field7'>Mobile No.</label>
                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={phone => setPhone(phone)}
                            inputProps={{
                                name: 'phone',
                                id: 'phone',
                                className: 'phone-input-containersignup'
                            }}
                        />
                    </div>
                    <div>
                        <div className='submitgovernmentsignup'>Continue</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signupform