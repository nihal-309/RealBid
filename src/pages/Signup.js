// import './App.css';
import Headersignup from '../components/Headersignup';
import Overallsignup from '../components/Overallsignup';
import Signupmsg from '../components/Signupmsg';
import React from 'react';
function App() {
    return (
        <div className="App">
            <Headersignup/>
            <Signupmsg/>
            <Overallsignup/>
        </div>
    );
}
export default App;