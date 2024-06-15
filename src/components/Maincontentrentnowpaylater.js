import React from 'react'
import '../styles/Maincontentrentnowpaylat.css'
import backgroundimg from '../assets/rentnowpaylatbackground.png'
import propimg from '../assets/prop1rentnowpaylat.png'
import propimg2 from '../assets/prop2rentnowpaylat.png'
function Maincontentrentnowpaylater() {
    return (
        <div>
            <img src={backgroundimg} alt='' className='backgroundimagerentnowpay'></img>
            <img src={propimg} alt='' className='prop1imagerentnowpaylater'></img>
            <img src={propimg2} alt='' className='prop1imagerentnowpaylater2'></img>
            <div className='leftsectionformcontrentnowpaylater'>
                <p className='Headerrentnowpaycont'>Rent Now<br />Pay Later</p><br /><p className='subsectionrentnowpay'>Pay rent at ZERO cost* and get credit line upto 3 lacs</p>
            </div>
            <div className='rentnowpaylatformcontainer'>
                <div className='inlinesectionformrentnowpaylat'>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field1' className='labelrentnowpaylat'>Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2' className='labelrentnowpaylat'>Phone No.</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2' className='labelrentnowpaylat'>Pan card</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2' className='labelrentnowpaylat'>Date Of Birth</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2' className='labelrentnowpaylat'>Pincode</label>
                        <input type='text' />
                    </div>
                    <div className='finallinerentnowpaylat'></div>
                </div>
                <div>
                    <div className='secondsectionformrentnow'>
                        Employement Type
                    </div>
                    <div className='buttoncontainerrentnowpaylat'>
                        <div className='buttonrentnowpaylat'>Self Employed</div>
                        <div className='buttonrentnowpaylat'>Salaried</div>
                        <div className='buttonrentnowpaylat'>Other Income</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontentrentnowpaylater