import '../styles/Main.css'
import IMG1 from '../Assets/search.png'
import IMG2 from '../Assets/1.png'
import IMG3 from '../Assets/2.png'
import IMG4 from '../Assets/3.png'
import IMG5 from '../Assets/4.png'
import IMG6 from '../Assets/5.png'
import IMG7 from '../Assets/6.png'
import IMG8 from '../Assets/7.png'
import IMG9 from '../Assets/8.png'

function Main() {
    return(
        <div className="Main">
            <div className="row1">
                <a className='res' href="#/">Residential</a>
                <div className="line"></div>
                <a className='com' href="#/">Commercial</a>
            </div>
            <div className="row2">
                <button className='type1'>Buy</button>
                <button className='type1'>Rent</button>
                <button className='type1'>Plot</button>
                <button className='type2'>Post Property for Free</button>
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