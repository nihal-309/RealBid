import '../styles/Main.css'
import IMG1 from '../assets/search.png'
import IMG2 from '../assets/1.png'
import IMG3 from '../assets/2.png'
import IMG4 from '../assets/3.png'
import IMG5 from '../assets/4.png'
import IMG6 from '../assets/5.png'
import IMG7 from '../assets/6.png'
import IMG8 from '../assets/7.png'
import IMG9 from '../assets/8.png'
import { Link } from "react-router-dom";
import { useState } from 'react'

function Main() {
    const [display, setDisplay]= useState('block');
    const [display1, setDisplay1]= useState('none');

    const [color, setColor]= useState('#FF6800');
    const [color1, setColor1]= useState('white');
    const handleClick =() =>{
        if(display==='none'){
            setDisplay('block');
            setDisplay1('none');
            setColor('#FF6800');
            setColor1('white');
        }
    }
    const handleClick1 =() =>{
        if(display1==='none'){
            setDisplay('none');
            setDisplay1('block');
            setColor1('#FF6800');
            setColor('white');
        }
    }
    return(
        <div className="Main">
            <div className="row1">
                <button onClick={handleClick} className='res'><a style={{
                    color:color
                }} href="#/">Residential</a></button>
                <div className="line"></div>
                <button onClick={handleClick1} className='com'><a style={{
                    color:color1
                
                }} href="#/">Commercial</a></button>
            </div>
            <div className="row2"
                style={{
                    display:display
                }}>
                <Link to="/buyResidential" className='type3'>BuyRes</Link>
                <Link to="/rentResidential" className='type3'>Rent</Link>
                <Link to="/plot" className='type3'>Plot</Link>
                <Link to="/plot" className='type3 extra'>Post Property for Free</Link>
            </div>
            <div className="row2"
                 style={{
                    display:display1
                }}>
                <Link to="/buyCommercial" className='type3'>Buy</Link>
                <Link to="/rentCommercial" className='type3'>Rent</Link>
                <Link to="/plot" className='type3'>Plot</Link>
                <Link to="/plot" className='type3 extra'>Post Property for Free</Link>
            </div>
            <div className="row3">
                <img className='search' src={IMG1} alt="" />
                <input placeholder='Search Locality' className='inp' type="text" />
                <button className='searchbtn'>Search</button>
            </div>
            <div className="row4">
            <select className='dropdown' id="">
                <option className='' value="City">City</option>
            </select>
            <select className='dropdown' id="">
                <option className='' value="BHK Type">BHK Type</option>
            </select>
            <select className='dropdown' id="">
                <option className='' value="Availablity">Availablity</option>
            </select>
            <select className='dropdown' id="">
                <option className='' value="Type">Type</option>
            </select>
            </div>
            <div className="line1"></div>
            <div className="row5">
                <div className="first">
                    <div className="box">
                        <img src={IMG2} alt="" />
                        <p>Rental Agreement</p>
                    </div>
                    <div className="box">
                        <img src={IMG3} alt="" />
                        <p>For NRI</p>
                    </div>
                    <div className="box">
                        <img src={IMG4} alt="" />
                        <p>Rent Now Pay Later</p>
                    </div>
                    <div className="box">
                        <img src={IMG5} alt="" />
                        <p>Personal Assistance</p>
                    </div>
                    <select name="" id="tender1">
                        <option className='tend' value="Tenders for Auction">Tenders for Auction</option>
                    </select>
                </div>
                <div className="first sec">
                    <div className="box">
                        <img src={IMG6} alt="" />
                        <p>Home Loan</p>
                    </div>
                    <div className="box">
                        <img src={IMG7} alt="" />
                        <p>Auction Timing</p>
                    </div>
                    <div className="box">
                        <img src={IMG8} alt="" />
                        <p>Personal Loan</p>
                    </div>
                    <div className="box odd">
                        <img src={IMG9} alt="" />
                        <p>Booking Token</p>
                    </div>
                    <select name="" id="properties1">
                        <option value="Properties for auction">Properties for auction</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Main;