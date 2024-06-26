import styles from '../styles/StartAuction.module.css'
import Countdown from 'react-countdown';
import React, { useState ,useEffect} from 'react';
import IMG1 from '../assets/resImg.png';
import IMG2 from '../assets/bathroom.png';
import IMG3 from '../assets/kitchen.png';
import IMG4 from '../assets/bhk.png';
import IMG5 from '../assets/facing.png';
import IMG6 from '../assets/area.png';
import IMG7 from '../assets/price.png';
import IMG8 from '../assets/furnish.png';
import IMG9 from '../assets/property.png';
import IMG10 from '../assets/car.png';
import IMG11 from '../assets/bedroom.png';
import IMG12 from '../assets/high.png';
import IMG13 from '../assets/low.png';
import IMG14 from '../assets/minus.png';
import IMG15 from '../assets/school.png';
import IMG16 from '../assets/hospital.png';
import IMG17 from '../assets/bus.png';
import IMG18 from '../assets/store.png';
import IMG19 from '../assets/map1.png';
import IMG20 from '../assets/map2.png';
import IMG21 from '../assets/legal.png';
import IMG22 from '../assets/loan.png';
import IMG23 from '../assets/create.png';
import IMG24 from '../assets/plus.png';
import IMG25 from '../assets/minus1.png';

function StartAuction(props){
    const [targetDate, setTargetDate] = useState(null);
    const [numBid, setNumBid] = useState(0);
    const[value, setValue] = useState(0);
    const [currentBid, setCurrentBid] = useState(1200000);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Check if a target date is already stored
        let storedDate = localStorage.getItem('targetDate');
        if (!storedDate) {
            // If not, calculate the target date 3 days from now and store it
            const newTargetDate = Date.now() + (3 * 24 * 60 * 60 * 1000);
            localStorage.setItem('targetDate', newTargetDate);
            storedDate = newTargetDate;
        }
        setTargetDate(storedDate);
    }, []);

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <div>Auction ended</div>;
        } else {
            // Render a countdown
            return (
                <div className={styles.timer}>
                    <span>Days <br /> {days} </span>
                    <span>Hours <br /> {hours} </span>
                    <span>Minutes <br /> {minutes} </span>
                    <span>Seconds <br /> {seconds}</span>
                </div>
            );
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    function add(){
        console.log(typeof value)
        setValue(value + 1);
    }

    function sub(){
        setValue(value - 1);
    }

    function handleBid() {
        if (value > 100000) { // Step 2: Check if bid is greater than 100,000
            setCurrentBid(value);
            setNumBid(numBid + 1);
            setErrorMessage(''); // Clear error message if bid is valid
        } else {
            setErrorMessage('Bid must be greater than 1,00,000'); // Set error message
        }
    }


    return(
        <div className={styles.ownerDetails}>
            <button className={`${styles.auction}`}>Auction</button>
            <div className={styles.firstCont}>
                <div className={styles.imgAddress}>
                    <div className={styles.address}>
                        <h3>Vellore Institute of Technology , Katpadi </h3>
                        <h5>Vellore Tamil Nadu  , India , 632014 </h5>
                    </div>
                    <img className={styles.heroImg} src={IMG1} alt="" />
                    <div className={styles.content}>
                        <h2>This is a Sealed Bid Auction</h2>
                        <p>
                        This auction is sealed.
                        In this type of auction all bidders simultaneously submit sealed bids so that no
                        bidder knows the bid of any other participant. The highest bidder pays the price they submitted. If two bids with same value are placed for auction the one which was placed first wins the auction

                        </p>
                    </div>
                </div>
                <div className={styles.content1}>
                    {targetDate && (
                        <Countdown
                            date={parseInt(targetDate, 10)}
                            intervalDelay={1000}
                            precision={3}
                            renderer={renderer}
                        />
                    )}
                    <div className={styles.paras}>
                        <p>Auction Ends - <span className={styles.bold}>25th March 2024</span></p>
                        <p>Timezone - (GMT + 5:30)</p>
                    </div>
                    <h3>Current Bid</h3>
                    <div className={styles.flexCont}>
                        <div className={`${styles.content} ${styles.money}`}>$ {currentBid.toLocaleString()}</div>
                        <span>
                            Minimum Bid for this auction - <span className={styles.bold}>1,00,000</span><br />
                            Number of Bids - <span className={styles.bold}>{numBid}</span>
                        </span>
                    </div>
                    <div className={styles.linee}></div>
                    <div className={styles.buttons1}>
                        <button onClick={() => setValue(parseInt(currentBid, 10) + 50000)}>$ {(parseInt(parseInt(currentBid, 10), 10) + 50000).toLocaleString()}</button>
                        <button onClick={() => setValue(parseInt(currentBid, 10) + 100000)}>$ {(parseInt(parseInt(currentBid, 10), 10) + 100000).toLocaleString()}</button>
                        <button onClick={() => setValue(currentBid + 150000)}>$ {(parseInt(currentBid, 10) + 150000).toLocaleString()}</button>
                    </div>
                    <div className={styles.content3}>
                        <input value={value} onChange={handleChange} className={styles.input1} type="number" />
                        <button className={styles.cont3Img1} onClick={add}><img src={IMG24} alt="" /></button>
                        <button className={styles.cont3Img2} onClick={sub}><img src={IMG25} alt="" /></button>
                        <button onClick={handleBid} className={styles.bid}>Bid</button>
                        {errorMessage && <div className={styles.error}>{errorMessage}</div>} {/* Step 4: Display error message */}
                    </div>
                </div>
            </div>
            <div className={styles.secondCont}>
                <div>
                    <h1 className={styles.heading}>Property Information</h1>
                    <div className={styles.flexCont}>
                        <div className={styles.infoThird}>
                            <div className={styles.row}>
                                <img src={IMG3} alt="" />
                                <p>Kitchen : 1 {props.school} km</p>
                            </div>
                            <div className={`${styles.row}`}> 
                                    <img src={IMG8} alt="" />
                                    <p>Furnishing : Semi {props.hospital} km</p>
                            </div>
                            <div className={`${styles.row}`}>
                                <img src={IMG4} alt="" />
                                <p>BHK : 3 {props.airport} km</p>
                            </div>
                            <div className={styles.row}>
                                <img src={IMG2} alt="" />
                                <p>Bathroom : 2 {props.builtArea}</p>
                            </div>
                            <div className={`${styles.row}`}>
                                <img src={IMG10} alt="" />
                                <p>Parking : Car {props.railway} km</p>
                            </div>
                        </div>
                        <div className={styles.infoSec}>
                            <div className={`${styles.row}`}>
                                <img src={IMG9} alt="" />
                                <p>Property Status : Occupied {props.railway}</p>
                            </div>
                            <div className={`${styles.row}`}>
                                <img src={IMG6} alt="" />
                                <p>Builtup Area : 4500 sq.ft{ props.avgPrice}</p>
                            </div>
                            <div className={`${styles.row}`}>
                                <img src={IMG7} alt="" />
                                <p>Average Price : 16.67k/sq.ft {props.furnish}</p>
                            </div>
                            <div className={`${styles.row}`}>
                                <img src={IMG11} alt="" />
                                <p>Bedroom : 3 {props.parking}</p>
                            </div>
                            <div className={`${styles.row}`}>
                                <img src={IMG5} alt="" />
                                <p>Facing : North {props.parking}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.linee1}></div>
                <div>
                    <h1 className={styles.heading}>Rental Agreement</h1>
                    <div className={`${styles.row}`}>
                        <img src={IMG12} alt="" />
                        <p><span className={styles.rowHead}>High Price</span> <br /> <span>60,000 INR</span> {props.parking}</p>
                    </div>
                    <div className={`${styles.row} ${styles.row1}`}>
                        <img src={IMG14} alt="" />
                        <p><span className={styles.rowHead}>Median Price</span><br /> <span>45,000 INR</span> {props.parking}</p>
                    </div>
                    <div className={`${styles.row} ${styles.row1}`}>
                        <img src={IMG13} alt="" />
                        <p><span className={styles.rowHead}>Low Price</span><br /> <span>38,000 INR</span> {props.parking}</p>
                    </div>
                </div>
            </div>
            <div className={styles.thirdCont}>
                <h1 className={styles.heading}>Nearby Facilities</h1>
                <div className={styles.flexCont}>
                    <div className={styles.box}>
                        <img src={IMG15} alt="" />
                        <p><span className={styles.rowHead}>ABC Public School</span> <span>2km</span> {props.parking}</p>
                        <p><span className={styles.rowHead}>XYZ Public School</span> <span>3km</span> {props.parking}</p>
                    </div>
                    <div className={styles.box}>
                        <img src={IMG16} alt="" />
                        <p><span className={styles.rowHead}>ABC Hospital</span> <span>2km</span> {props.parking}</p>
                        <p><span className={styles.rowHead}>XYZ Hospital</span> <span>3km</span> {props.parking}</p>
                    </div>
                    <div className={styles.box}>
                        <img src={IMG17} alt="" />
                        <p><span className={styles.rowHead}>Bus Stand</span> <span>2km</span> {props.parking}</p>
                        <p><span className={styles.rowHead}>Railway Station</span> <span>3km</span> {props.parking}</p>
                        <p><span className={styles.rowHead}>Airport</span> <span>10km</span> {props.parking}</p>
                    </div>
                    <div className={styles.box}>
                        <img src={IMG18} alt="" />
                        <p><span className={styles.rowHead}>ABC Store</span> <span>2km</span> {props.parking}</p>
                        <p><span className={styles.rowHead}>XYZ Chemist</span> <span>3km</span> {props.parking}</p>
                    </div>
                </div>
            </div>
            <div className={styles.fourthCont}>
                <h1 className={styles.heading}>Map</h1>
                <div className={styles.flexCont}>
                    <img src={IMG19} alt="" />
                    <div className={styles.linee1}></div>
                    <img src={IMG20} alt="" />
                </div>
            </div>
            <div className={styles.fifthCont}>
                <h1 className={styles.heading}>Services</h1>
                <div className={styles.flexCont}>
                    <div className={styles.box1}>
                        <img src={IMG21} alt="" />
                        <p>Legal Services</p>
                    </div>
                    <div className={styles.box1}>
                        <img src={IMG22} alt="" />
                        <p>Check Loan Eligibility</p>
                    </div>
                    <div className={styles.box1}>
                        <img src={IMG23} alt="" />
                        <p>Create Agreement</p>
                    </div>
                </div>
            </div>
            <div className={styles.sixthCont}>
            <h1 className={styles.heading}>Property Description</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, erat ut cursus porta, lacus orci blandit ex, eleifend gravida dui ex quis diam. In hac habitasse platea dictumst. Nunc et lobortis diam. Nunc a ante bibendum, sagittis augue quis, pellentesque lectus. Donec convallis turpis eu est tincidunt varius. Curabitur semper nulla vitae magna porta tincidunt. Suspendisse malesuada sagittis dui, ut rutrum nibh rhoncus eu. Proin dolor ante, auctor non aliquet et, ornare in ex. Morbi vitae venenatis augue. Donec lacinia justo gravida elit blandit pretium. Quisque ut leo urna.
            </p>
            </div>
        </div>
    )
}

export default StartAuction;