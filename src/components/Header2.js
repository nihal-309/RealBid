import '../styles/Header2.css';
import { useState } from 'react';
import Login from '../components/Login';

function Header2(){

    const [showLogin, setShowLogin] = useState(false);
    const handleClick = () =>{
        setShowLogin(true);
    }

    return(
        <div className="Header2">
            <select name="" id="tender">
                <option className='tend' value="Tenders for Auction">Tenders for Auction</option>
            </select>
            <div className="line"></div>
            <select name="" id="properties">
                <option value="Properties for auction">Properties for auction</option>
            </select>
            <button onClick={handleClick} className='login'>Login</button>
            <button className='reg'>Register</button>
            {showLogin && <div className="loginWindow"><Login /></div>}
        </div>
    )
}

export default Header2;