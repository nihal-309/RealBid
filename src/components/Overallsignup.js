import Options from './Optionssignup';
import Signupform from './Signupform';
import Signupformcomplany from './Signupformcomplany';

import React, { useState } from 'react';

function Overallsignup() {
    const [selectedOption, setSelectedOption] = useState('individual');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
            <Options selectedOption={selectedOption} onOptionChange={handleOptionChange} />
            {selectedOption === 'individual' && <Signupform />}
            {selectedOption === 'company' && <Signupformcomplany />}
        </div>
    )
}

export default Overallsignup