import React from 'react'
import '../styles/Headersignup.css'
import { Link } from 'react-router-dom'
function Headersignup() {
    return (
        <div>
            <div className='headersignup'>
                <p className='leftalignsignup'>Sign Up</p>
                <p className='rightalignsignup'>RealBid.com </p>
            </div>
            <Link to="/#" className='goHome'>Go Home</Link>
        </div>
    )
}

export default Headersignup