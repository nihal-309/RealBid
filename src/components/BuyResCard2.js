import styles from '../styles/BuyResCard.module.css'
import IMG1 from '../assets/resImg.png';
import IMG2 from '../assets/bathroom.png';
import IMG4 from '../assets/kitchen.png';
import IMG5 from '../assets/bhk.png';
import IMG6 from '../assets/facing.png';
import IMG7 from '../assets/area.png';
import IMG8 from '../assets/price.png';
import IMG9 from '../assets/car.png';
import IMG10 from '../assets/tick.png';
import IMG11 from '../assets/furnish.png';
import IMG12 from '../assets/bids.png'

function buyResCard(props){
    const { auctions } = props;
    const { add } = props;
    const { card } = props;
    const { bids } = props;
    return(
        <div className={`${styles.buyResCard} ${card}`}>
            <img className={styles.heroImg} src={IMG1} alt="" />
            <div className={styles.content}>
                <div className={styles.first}>
                    <h5 className={`${styles.adress} ${add}`}>
                        {props.adress}
                    </h5>
                    <>
                    <button className={`${styles.auction} ${auctions}`}>{props.auction}</button>
                    <button className={styles.verified}>Verified</button>
                    </>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoFirst}>
                        <div className={styles.row}>
                            <img src={IMG2} alt="" />
                            <p>Bathroom: {props.bathroom}</p>
                        </div>
                        {/* <div className={styles.row}>
                            <img src={IMG3} alt="" />
                            <p>Bedroom : {props.bedroom}</p>
                        </div> */}
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG4} alt="" />
                            <p>Kitchen : {props.kitchen}</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG5} alt="" />
                            <p>BHK : {props.bhk}</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG6} alt="" />
                            <p>Facing : {props.facing}</p>
                        </div>
                    </div>
                    <div className={styles.infoSec}>
                        <div className={styles.row}>
                            <img src={IMG7} alt="" />
                            <p>Builtup Area : {props.builtArea}</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG8} alt="" />
                            <p>Average Price : {props.avgPrice}</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG11} alt="" />
                            <p>Furnishing : {props.furnish}</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG9} alt="" />
                            <p>Parking : {props.parking}</p>
                        </div>
                    </div>
                    <div className={styles.infoThird}>
                        <div className={styles.row}>
                            <img src={IMG10} alt="" />
                            <p>School : {props.school} km</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}> 
                                <img src={IMG10} alt="" />
                                <p>Hospital : {props.hospital} km</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG10} alt="" />
                            <p>Airport : {props.airport} km</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img src={IMG10} alt="" />
                            <p>Railway Station : {props.railway} km</p>
                        </div>
                        <div className={`${styles.row} ${styles.row1} ${bids}`}>
                            <img src={IMG10} alt="" />
                            <p>Railway Station : {props.railway} km</p>
                        </div>
                    </div>
                    {/* <div className={`${styles.row} ${styles.price} ${styles.row1} ${bids}`}>
                        <img src={IMG12} alt="" />
                        <p>Bids : 7</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default buyResCard;