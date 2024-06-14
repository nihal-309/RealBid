import React from 'react'
import image1 from '../assets/Picture1propmanage..png'
import '../styles/Mainsectionpropmanag.css'
function Mainsectionpropmanag() {
    return (
        <div className='mainsectioncont'>
            <div className='Formcontainerpropmang'>
                <div className='inlinesectionformrentnowpaylat'>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field1'>Full Name</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2'>Phone No.</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2'>Email Id</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2'>City</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2'>House Configuration</label>
                        <div className='buttoncontainerpropmanag'>
                            <div className='buttonspropmanag'>1 BHK</div>
                            <div className='buttonspropmanag'>2 BHK</div>
                            <div className='buttonspropmanag'>3 BHK</div>
                            <div className='buttonspropmanag'>4 BHK</div>
                            <div className='buttonspropmanag'>Other</div>
                        </div>
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2'>Expected Rent</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetrentnow'>
                        <label htmlFor='field2'>Any Special Request</label>
                        <input type='text' />
                    </div>
                    <div>
                        <div className='submit'>Submit</div>
                    </div>
                </div>
            </div>
            <div className='maincontpropmanag'>
                <div className='propmanagcontheader'>
                    Property <br />
                    Management by<br /> RealBid.com
                </div>
                <div className='propmanagcontent'>
                    1.Submit your details.<br />
                    2.Select the services you require.<br />
                    3.Select the appropriate package.<br />
                    4.The Property management team will call you.<br />
                    5.Dedicated property manager manages your property.
                </div>
            </div>
            <div>
                <img src={image1} alt='' className='imagepropmanag'></img>
            </div>
        </div>
    )
}

export default Mainsectionpropmanag