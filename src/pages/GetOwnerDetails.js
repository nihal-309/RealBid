import styles from '../styles/GetOwnerDetails.module.css'
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

function GetOwnerDetails(props){
    return(
        <div className={styles.ownerDetails}>
            <button className={`${styles.auction}`}>Without Auction</button>
            <div className={styles.firstCont}>
                <div className={styles.imgAddress}>
                    <div className={styles.address}>
                        <h3>Vellore Institute of Technology , Katpadi </h3>
                        <h5>Vellore Tamil Nadu  , India , 632014 </h5>
                    </div>
                    <img className={styles.heroImg} src={IMG1} alt="" />
                </div>
                <div className={styles.askingPrice}>
                    <h2 className={styles.heading}>Asking Price</h2>
                    <h4><span>1,20,00,000 </span>INR (Negotiable)</h4>
                    <div className={styles.line}>
                        <p>Est. Resale Value</p>
                        <p>1,50,00,000</p>
                    </div>
                    <div className={styles.linee}></div>
                    <div className={styles.line}>
                        <p>Est. Rental Yeild</p>
                        <p>50,000</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>Message Owner</button>
                        <button>Get Owner Details</button>
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
            <h1 className={styles.heading}>Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, erat ut cursus porta, lacus orci blandit ex, eleifend gravida dui ex quis diam. In hac habitasse platea dictumst. Nunc et lobortis diam. Nunc a ante bibendum, sagittis augue quis, pellentesque lectus. Donec convallis turpis eu est tincidunt varius. Curabitur semper nulla vitae magna porta tincidunt. Suspendisse malesuada sagittis dui, ut rutrum nibh rhoncus eu. Proin dolor ante, auctor non aliquet et, ornare in ex. Morbi vitae venenatis augue. Donec lacinia justo gravida elit blandit pretium. Quisque ut leo urna.
            </p>
            </div>
        </div>
    )
}

export default GetOwnerDetails;