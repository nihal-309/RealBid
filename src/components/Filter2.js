import styles from '../styles/Filter2.module.css'

function Filter2({ className, first }){
    return(
        <div className={`${styles.filters} ${className}`}>
            <h3 className={styles.head}>Filters</h3>
            <div className={`${styles.propType} ${first}`}>
                <h3>Ownership</h3>
                <div>
                    <input type="checkbox" id="freehold" name="freehold" />
                    <label htmlFor="freehold">Freehold</label>
                </div>
                <div>
                    <input type="checkbox" id="leasehold" name="leasehold" />
                    <label htmlFor="leasehold">Leasehold</label>
                </div>
                <div>
                    <input type="checkbox" id="cooperative" name="cooperative" />
                    <label htmlFor="cooperative">Co - operative Society</label>
                </div>
                <div>
                    <input type="checkbox" id="attorney" name="attorney" />
                    <label htmlFor="attorney">Power of Attorney</label>
                </div>
            </div>
            <div className={`${styles.propType} ${first}`}>
                <h3>Possession Status</h3>
                <div>
                    <input type="checkbox" id="ready" name="ready" />
                    <label htmlFor="ready">Ready to move</label>
                </div>
                <div>
                    <input type="checkbox" id="1year" name="1year" />
                    <label htmlFor="1year">In 1 year</label>
                </div>
                <div>
                    <input type="checkbox" id="3years" name="3years" />
                    <label htmlFor="3years">In 3 years</label>
                </div>
                <div>
                    <input type="checkbox" id="beyond" name="beyond" />
                    <label htmlFor="beyond">Beyond 3 years</label>
                </div>
            </div>
            <div className={`${styles.propType}`}>
                <h3>Amenities</h3>
                <div>
                    <input type="checkbox" id="gated" name="gated" />
                    <label htmlFor="gated">Gated Community</label>
                </div>
                <div>
                    <input type="checkbox" id="pool" name="pool" />
                    <label htmlFor="pool">Swimming Pool</label>
                </div>
                <div>
                    <input type="checkbox" id="playarea" name="playarea" />
                    <label htmlFor="playarea">Children’s Play Area</label>
                </div>
                <div>
                    <input type="checkbox" id="park" name="park" />
                    <label htmlFor="park">Park</label>
                </div>
            </div>
            <div className={`${styles.propType}`}>
                <h3>Sale Type</h3>
                <div>
                    <input type="checkbox" id="new" name="new" />
                    <label htmlFor="new">New Projects</label>
                </div>
                <div>
                    <input type="checkbox" id="resale" name="resale" />
                    <label htmlFor="resale">Resale Properties</label>
                </div>
                <div>
                    <input type="checkbox" id="filter" name="filter" />
                    <label htmlFor="filter">Apply Filter</label>
                </div>
            </div>
            <button className={styles.filter}>Apply filter</button>
        </div>
    )
}
  
  export default Filter2;