import React from 'react'
import logoform from '../assets/locationlogorentalagg.png'
import '../styles/RentalAggrementmain.css'
function Rentalaggrementmai() {
  return (
    <div className='holderrentalaggrement'>
      <div className='contentholdrentalagg'>
        <div className='leftsectionrental'>
          <p className='leftsectionheading'>
            Online Rental Agreement
          </p>
          <p className='rentalaggrementcont'>Get your Rental Agreement online in 5 min.</p>
          <p className='rentalaggrementcont'>Get your own agreement on 100 rupees stamp paper.</p>
          <p className='rentalaggrementcont'>Get your printed agreement on your door step with live tracking. </p>
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
                    <label htmlFor='field5' className='labelpropmanag'>State</label>
                        <input type='text' />
                    </div>
                    <div className='inputdetgovernmentrentalaggrement'>
                    <label htmlFor='field6' className='labelpropmanag'>City</label>
                        <input type='text'/>
                    </div>
                </div>
                <div>
                    <div className='submitgovernmentrentalaggrement'>Check Price of Rental Agreement</div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Rentalaggrementmai