import React from 'react'
import '../styles/Headerrentalaggrement3.css'
import Faqrental from './Faqrental'
import Faqrental2 from './Faqrental2'
import Faqrental3 from './Faqrental3'
import Faqrental4 from './Faqrental4'
import Faqrental5 from './Faqrental5'
 function Headerrentalaggrement3() {
    return (
        <div className='header3container'>
            <div className='thirdheaderrentalagg'>
                Frequently asked questions
            </div>
            <p className='subheadheader3'>Have questions? We’re here to help.</p>
            <div className='faq-container'>
                <Faqrental />
                <Faqrental2/>
                <Faqrental3/>
                <Faqrental4/>
                <Faqrental5/>
            </div>
        </div>
    )
}

export default Headerrentalaggrement3