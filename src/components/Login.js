import { useState } from 'react';
import '../styles/Login.css';
import 'react-phone-input-2/lib/style.css'
import IMG2 from '../assets/google.png';
import IMG3 from '../assets/chrome.png';
import IMG4 from '../assets/facebook.png';
import PhoneInput from "react-phone-input-2";
import { getCountryCallingCode } from 'libphonenumber-js'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'

function Login(props) {
    const [phoneNumber, setPhoneNumber] = useState("");

    const countryLabels = {
        'US': `+${getCountryCallingCode('US')}`,
        'GB': `+${getCountryCallingCode('GB')}`,
        'IN': `+${getCountryCallingCode('IN')}`,
        // Add more countries as needed
      };

      const handlePhoneNumberChange = (value) => {
        if (value) {
            const phoneNumberObject = parsePhoneNumberFromString(value, 'IN');
            if (phoneNumberObject) {
                const digitsOnly = phoneNumberObject.nationalNumber;
                if (digitsOnly.length === 10) {
                    setPhoneNumber(value);
                    props.onPhoneNumberChange(value); // Pass the new phone number to the parent component
                }
            }
        }
    };

    return (
    <div className="Login">
        <div className="loginContent">
            <h1 className='logg'>Login</h1>
            <p className='phone'>Enter your Phone Number to continue</p>
            <PhoneInput
            defaultCountry="US"
            placeholder="Enter phone number"
            value={"+91" || phoneNumber}
            onChange={handlePhoneNumberChange}
            onKeyPress={(event) => {
                const value = event.target.value;
                const phoneNumber = parsePhoneNumberFromString(value, 'IN');
                if (phoneNumber) {
                    const digitsOnly = phoneNumber.nationalNumber; // Get the phone number without the country code
                    if (digitsOnly.length >= 10) {
                        event.preventDefault();
                    }
                }
            }}
            labels={countryLabels}
        />
            <button className='continue' onClick={() => { props.close()}}>Continue</button>
            <div className="sites">
                <img src={IMG2} alt="" />
                <img src={IMG3} alt="" />
                <img src={IMG4} alt="" />
            </div>
            <div className="realBid">RealBid.Com</div>  
        </div>
    </div>
    );
    
}


    
export default Login;