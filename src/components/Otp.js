import '../styles/Otp.css'
import { useState } from 'react';
import OtpInput from "react-otp-input";
import React, {useEffect } from 'react';

function Otp(props){
    const [otp, setOtp] = useState("");
    const num = (props.value).toString();
    const num1 = num.slice(2,14);
    const num2 = num.slice(0,2);
    const formatNumber = (number) => number < 10 ? `0${number}` : number;

    const [count, setCount] = useState(30);
    useEffect(() => {
      const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
      return () => clearInterval(timer);
    }, [count]);

    return(
        <div className="Otp">
            <h1>Enter OTP to sign up</h1>
            <div className="sent">
                <p>OTP has been sent to +{num2} {num1}  </p>
                <a href="#/">Edit</a>
            </div>     
            <OtpInput
            className="otp"
            value={otp}
            containerStyle={{margin:"none",
              marginLeft: "-0.8rem",
            }}
            inputStyle={{
              width: "2rem",
              height: "3rem",
              margin: "0 0.8rem",
              backgroundColor: "#3D3D3D",
              border: "none",
              borderBottom: "2px solid white",
            //   outline: "none",
            //   ':focus': {
            //     outline: 'none',
            //     borderBottom: "2px solid white",
            //   },
            }}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
          /> 
          <p style={{marginTop: "2rem",}}>00:{formatNumber(count)}</p>
          <a style={{ pointerEvents: count > 0 ? 'none' : 'auto' ,
                      color: count > 0 ? 'grey' : '#FF6800',
          }} 
          href="#/">Resend</a >
          <button onClick={props.close} className='submit'>Submit</button>
          <div className="realBid">RealBid.Com</div> 
        </div>
    )
}

export default Otp;