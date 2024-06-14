import styles from '../styles/Filter.module.css'

function Filter({ className, first }) {
    return (
    <div className={`${styles.filters} ${className}`}>
        <h3 className={styles.head}>Filters</h3>
        <div className={`${styles.propType} ${first}`}>
            <h3>Property Type</h3>
            <div>
                <input type="checkbox" id="house" name="house" />
                <label htmlFor="house">Auction Property</label>
            </div>
            <div>
                <input type="checkbox" id="apartment" name="apartment" />
                <label htmlFor="apartment">Without Auction Property</label>
            </div>
        </div>
        <div className={`${styles.propType} ${styles.residential}`}>
            <h3>Residential</h3>
            <input type="checkbox" id="villa" name="villa" />
            <label htmlFor="villa">Apartment</label>
            <br />
            <input type="checkbox" id="villa" name="villa" />
            <label htmlFor="villa">Villa</label>
            <br />
            <input type="checkbox" id="studioApartment" name="studioApartment" />
            <label htmlFor="studioApartment">Studio Apartment</label>
            <br />
            <input type="checkbox" id="independentFloor" name="independentFloor" />
            <label htmlFor="independentFloor">Independent Floor</label>
            <br />
            <input type="checkbox" id="pg" name="pg" />
            <label htmlFor="pg">PG</label>
            <br />
            <input type="checkbox" id="duplex" name="duplex" />
            <label htmlFor="duplex">Duplex</label>
            <br />
            <input type="checkbox" id="plot" name="plot" />
            <label htmlFor="plot">Plot</label>
            <br />
            <input type="checkbox" id="penthouse" name="penthouse" />
            <label htmlFor="penthouse">Penthouse</label>
        </div>
        <div className={`${styles.propType} ${styles.residential}`}>
            <h3>BHK Type</h3>
            <button className={styles.bhk}>1 BHK</button>
            <button className={styles.bhk}>2 BHK</button>
            <button className={styles.bhk}>3 BHK</button>
            <br />
            <button className={styles.bhk}>4 BHK</button>
            <button className={styles.bhk}>5 BHK</button>
        </div>

        <div className={`${styles.propType} ${styles.last}`}>
            <h3>Furnishing</h3>
            <input type="checkbox" id="fullFurnished" name="fullFurnished" />
            <label htmlFor="fullFurnished">Full Furnished</label>
            <br />
            <input type="checkbox" id="semiFurnished" name="semiFurnished" />
            <label htmlFor="semiFurnished">Semi Furnished</label>
            <br />
            <input type="checkbox" id="none" name="none" />
            <label htmlFor="none">None</label>
            <br />

            <h3>Parking</h3>
            <input type="checkbox" id="twoWheeler" name="twoWheeler" />
            <label htmlFor="twoWheeler">2 Wheeler</label>
            <br />
            <input type="checkbox" id="fourWheeler" name="fourWheeler" />
            <label htmlFor="fourWheeler">4 Wheeler</label>
            <br />

            <h3>Property Status</h3>
            <input type="checkbox" id="underConstruction" name="underConstruction" />
            <label htmlFor="underConstruction">Under Construction</label>
            <br />
            <input type="checkbox" id="constructed" name="constructed" />
            <label htmlFor="constructed">Constructed</label>
            <br />

            <h3>Amenities</h3>
            <input type="checkbox" id="swimmingPool" name="swimmingPool" />
            <label htmlFor="swimmingPool">Swimming Pool</label>
            <br />
            <input type="checkbox" id="park" name="park" />
            <label htmlFor="park">Park</label>
            <br />
            <input type="checkbox" id="gym" name="gym" />
            <label htmlFor="gym">Gym</label>
            <br />
            <input type="checkbox" id="gatedCommunity" name="gatedCommunity" />
            <label htmlFor="gatedCommunity">Gated Community</label>
        </div>
        <button className={styles.filter}>Apply filter</button>
    </div>
    );
  }

export default Filter;