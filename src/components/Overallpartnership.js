import React, { useState } from 'react';
import Partnership from './Partnership';
import Infoform from './Infoform';
import Businessform from './Businessform';
import Governmentform from './Governmentform';

function Overallpartnership() {
    const [selectedForm, setSelectedForm] = useState('personal');
    return (
        <div>
            <div>
                <Partnership selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
                {selectedForm === 'personal' && <Infoform />}
                {selectedForm === 'business' && <Businessform />}
                {selectedForm === 'government' && <Governmentform />}
            </div>
        </div>
    )
}

export default Overallpartnership