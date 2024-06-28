import styles from '../styles/propertiesForAuction.module.css';
import IMG1 from '../assets/arrow1.png';

function propertiesForAuction() {
  return (
    <div className={styles.propertiesForAuction}>
        <div className={`${styles.firstCol} ${styles.common}`}>
            <div className={styles.head}>
                <h3>All Available Properties</h3>
                <img src={IMG1} alt="" />
            </div>
            <h5>Property Type</h5>
            <p>All</p>
            <p>Plot</p>
            <p>Villa</p>
            <p>Apartment</p>
            <p>Penthouse</p>
            <p>Showroom</p>
            <p>Shop</p>
            <p>Industrial bidding</p>
            <p>Godown</p>
        </div>
        <div className={`${styles.secCol} ${styles.common}`}>
        <div className={styles.head}>
                <h3>Auction Ending Today</h3>
                <img src={IMG1} alt="" />
            </div>
            <h5>Location</h5>
            <p>Delhi</p>
            <p>Gurgaon</p>
            <p>Mumbai</p>
            <p>Banglore</p>
            <p>Pune</p>
            <p>Chennai</p>
            <p>Noida</p>
            <p>Industrial bidding</p>
            <p>Godown</p>
        </div>
        <div className={`${styles.thirdCol} ${styles.common}`}>
        <div className={styles.head}>
                <h3>Upcoming Auction</h3>
                <img src={IMG1} alt="" />
            </div>
            <h5>Ownership</h5>
            <p>Freehold</p>
            <p>Leasehold</p>
            <p>Power of Attorney</p>
        </div>
    </div>
  );
}

export default propertiesForAuction;