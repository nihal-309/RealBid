import styles from '../styles/Filter3.module.css'

function Filter({ className, first }) {
    return (
        <div className={`${styles.filters} ${className}`}>
            <h3 className={styles.head}>Filters</h3>
            <div className={`${styles.propType} ${first}`}>
                <h3>Property Type</h3>
                <div> 
                    <input type="checkbox" id="auction" name="auction" />
                    <label htmlFor="auction">Auction Property</label>
                </div>
                <div>
                    <input type="checkbox" id="withoutAuction" name="withoutAuction" />
                    <label htmlFor="withoutAuction">Without Auction Property</label>
                </div>
            </div>
            <div className={`${styles.propType}`}>
                <h3>Commercial</h3>
                <div>
                    <input type="checkbox" id="showroom" name="showroom" />
                    <label htmlFor="showroom">Showroom</label>
                </div>
                <div>
                    <input type="checkbox" id="officeSpace" name="officeSpace" />
                    <label htmlFor="officeSpace">Office Space</label>
                </div>
                <div>
                    <input type="checkbox" id="coWorking" name="coWorking" />
                    <label htmlFor="coWorking">Co - Working Space</label>
                </div>
                <div>
                    <input type="checkbox" id="shop" name="shop" />
                    <label htmlFor="shop">Shop</label>
                </div>
                <div>
                    <input type="checkbox" id="industrialBuilding" name="industrialBuilding" />
                    <label htmlFor="industrialBuilding">Industrial Building</label>
                </div>
                <div>
                    <input type="checkbox" id="gowdown" name="gowdown" />
                    <label htmlFor="gowdown">Gowdown</label>
                </div>
                <div>
                    <input type="checkbox" id="restaurantCafeSpace" name="restaurantCafeSpace" />
                    <label htmlFor="restaurantCafeSpace">Restaurant/Cafe Space</label>
                </div>
            </div>
            <div className={styles.propType}>
                <h3>Furnishing</h3>
                <div>
                    <input type="checkbox" id="fullFurnished" name="fullFurnished" />
                    <label htmlFor="fullFurnished">Full Furnished</label>
                </div>
                <div>
                    <input type="checkbox" id="semiFurnished" name="semiFurnished" />
                    <label htmlFor="semiFurnished">Semi Furnished</label>
                </div>
                <div>
                    <input type="checkbox" id="none" name="none" />
                    <label htmlFor="none">None</label>
                </div>
                <h3>Parking</h3>
                <div>
                    <input type="checkbox" id="public" name="public" />
                    <label htmlFor="public">Public</label>
                </div>
                <div>
                    <input type="checkbox" id="personal" name="personal" />
                    <label htmlFor="personal">Personal</label>
                </div>
                <h3>Property Status</h3>
                <div>
                    <input type="checkbox" id="underConstruction" name="underConstruction" />
                    <label htmlFor="underConstruction">Under Construction</label>
                </div>
                <div>
                    <input type="checkbox" id="constructed" name="constructed" />
                    <label htmlFor="constructed">Constructed</label>
                </div>
                <h3>Building Type</h3>
                <div>
                    <input type="checkbox" id="independent" name="independent" />
                    <label htmlFor="independent">Independent</label>
                </div>
                <div>
                    <input type="checkbox" id="businessPark" name="businessPark" />
                    <label htmlFor="businessPark">Business Park</label>
                </div>
            </div>
            <div className={styles.propType}>
                <h3>Availability Status</h3>
                <div>
                    <input type="checkbox" id="readyToMove" name="readyToMove" />
                    <label htmlFor="readyToMove">Ready to move</label>
                </div>
                <div>
                    <input type="checkbox" id="within15Days" name="within15Days" />
                    <label htmlFor="within15Days">Within 15 Days</label>
                </div>
                <div>
                    <input type="checkbox" id="within30Days" name="within30Days" />
                    <label htmlFor="within30Days">Within 30 Days</label>
                </div>
                <div>
                    <input type="checkbox" id="after30Days" name="after30Days" />
                    <label htmlFor="after30Days">After 30 Days</label>
                </div>
            </div>
            <button className={styles.filter}>Apply filter</button>
        </div>
    );
};

export default Filter;