import React from 'react';
import '../styles/Optionssignup.css';

function Options({ selectedOption, onOptionChange }) {

  return (
    <div className='optionsignup'>
      <p
        className={`indiviselectsignup ${selectedOption === 'individual' ? 'selected' : ''}`}
        onClick={() => onOptionChange('individual')}
      >
        Individual
      </p>
      <p className='dividersignup'></p>
      <p
        className={`companyselectsignup ${selectedOption === 'company' ? 'selected' : ''}`}
        onClick={() => onOptionChange('company')}
      >
        Company
      </p>
    </div>
  );
}

export default Options;
