import React from 'react'
import '../styles/Headerpropmanag2.css'
function Headerpropmanagement2() {
    return (
        <div>
            <div className="Header2">
                <select name="" id="tender">
                    <option className='tend' value="Tenders for Auction">Tenders for Auction</option>
                </select>
                <div className="line"></div>
                <select name="" id="properties">
                    <option value="Properties for auction">Properties for auction</option>
                </select>
                <button className='login'>Login</button>
                <button className='reg'>Register</button>
            </div>
        </div>
    )
}

export default Headerpropmanagement2