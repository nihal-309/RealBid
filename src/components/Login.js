import { useState, useEffect } from 'react';
import '../styles/Login.css';
import 'react-phone-input-2/lib/style.css'
import IMG2 from '../assets/google.png';
import IMG3 from '../assets/chrome.png';
import IMG4 from '../assets/facebook.png';
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'

function Login(props) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [len, setLen] = useState(false);
    const [display,setDisplay] = useState('none')

      const handlePhoneNumberChange = (value) => {

        const digitsOnly1 = value.slice(2,)
        if(digitsOnly1.length === 10){
            setLen(true)
        }
        else{
            setLen(false)
        }
        if (value) {
            const phoneNumberObject = parsePhoneNumberFromString(value, 'IN');
            if (phoneNumberObject.nationalNumber.length <= 10) {
                const digitsOnly = phoneNumberObject.nationalNumber;
                if (digitsOnly.length >= 10) {
                    setPhoneNumber(value);
                    props.onPhoneNumberChange(value);
                    // setLen(true) // Pass the new phone number to the parent component
                }
            }
        }
    };

    function handleClick(){ 
        if(len===true){
            props.close()
        }
        else{
            setDisplay('block');
            setPhoneNumber(prevPhoneNumber => '+91');
            // console.log('error', len)
        }
    }

    return (
    <div className="Login">
        <div className="loginContent">
            <h1 className='logg'>Login</h1>
            <p className='phone'>Enter your Phone Number to continue</p>
            <PhoneInput
            country={'in'}
            placeholder="Enter phone number"
            value={ phoneNumber}
            onChange={handlePhoneNumberChange}
            onKeyPress={(event) => {
                const value = event.target.value;
                const phoneNumber = parsePhoneNumberFromString(value, 'IN');
                if (phoneNumber) {
                    const digitsOnly = phoneNumber.nationalNumber; // Get the phone number without the country code
                    if (digitsOnly.length >= 10) {
                        event.preventDefault();
                    }
                    if (digitsOnly.length === 10) {
                        event.preventDefault();
                    }
                }
            }}
        />
            <button className='continue' onClick={handleClick}>Continue</button>
            <p style={{
                display: display,
                color: 'red',
                textAlign: 'center',
                }}
                >Error, enter correct phone number</p>
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