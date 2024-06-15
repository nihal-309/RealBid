import React from 'react'
import '../styles/Subheader2propmanag.css'
import logoimage1 from '../assets/logo1propmanage.png'
import logoimage2 from '../assets/logo2propmanage..png'
import logoimage3 from '../assets/logo3propmanage..png'
import logoimage4 from '../assets/logo4propmanage..png'
function Subheader2propmanag() {
    return (
        <div>
            <div className='finishlinepropmanag'></div>
            <div className='subheadpropmanag'>PROPERTY MANAGEMENT SERVICES</div>
            <div className='finalcontpropmanag'>
                <div className='subcontpropmanage'>
                    <img src={logoimage1} alt='' className='logoimgpropmanagement'></img>
                    <p className='propertymanagementsectionhead'>Finding tenants for your property</p>
                    <p className='contentdetpropmanagement'>Listing properties, verifying tenants, coordinating with brokers,negotiating deals, and managing agreements.</p>
                </div>
                <div className='subcontpropmanage2'>
                    <img src={logoimage2} alt='' className='logoimgpropmanagement'></img>
                    <p className='propertymanagementsectionhead' id='header2prop'>Personal Property Manager</p>
                    <p className='contentdetpropmanagement'>Acquire a dedicated property manager to handle your property, from listing it on Housing to ensuring timely rent payments.</p>
                </div>
            </div>
            <div className='finalcontpropmanag'>
                <div className='subcontpropmanage3'>
                    <img src={logoimage3} alt='' className='logoimgpropmanagement'></img>
                    <p className='propertymanagementsectionhead' id='header3prop'>Rent collection and deposit</p>
                    <p className='contentdetpropmanagement'>Gathering advances, handling deposits, ensuring timely rent payments, settling exits, and managing maintenance fees.</p>
                </div>
                <div className='subcontpropmanage4'>
                    <img src={logoimage4} alt='' className='logoimgpropmanagement'></img>
                    <p className='propertymanagementsectionhead' id='header4prop'>Rental agreement</p>
                    <p className='contentdetpropmanagement'>Preparing rental agreement and all the necessary paper work .</p>
                </div>
            </div>
        </div >
    )
}

export default Subheader2propmanag