import React from 'react';
import '../styles/partnership.css';

function Partnership({ selectedForm, setSelectedForm }) {
    const handleRadioChange = (event) => {
        setSelectedForm(event.target.value);
    };
    return (
        <div className='formoption'>
            <div className='formselection'>
                <input type='radio' id='personal' name='partnership' className='inputform' value="personal" checked={selectedForm === 'personal'}
                    onChange={handleRadioChange} />
                <p htmlFor='personal' className='formlabelpartnership'>Personal</p>
            </div>
            <div className='formselection'>
                <input type='radio' id='business' name='partnership' className='inputform' value="business"
                    checked={selectedForm === 'business'}
                    onChange={handleRadioChange}/>
                <p htmlFor='business' className='formlabelpartnership'>Business</p>
            </div>
            <div className='formselection'>
                <input type='radio' id='government' name='partnership' className='inputform' value="government"
                    checked={selectedForm === 'government'}
                    onChange={handleRadioChange}/>
                <p htmlFor='government'  className='formlabelpartnership'>Government</p>
            </div>
        </div>
    );
}
export default Partnership;
