import React from 'react'
import image1 from '../assets/Picture1propmanage..png'
import styles from '../styles/Mainsectionpropmanag.module.css';
function Mainsectionpropmanag() {
    return (
        <div className={styles.mainsectioncont}>
            <div className={styles.Formcontainerpropmang}>
                <div className={styles.inlinesectionformpropmang}>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field1' className={styles.labelpropmanag}>Full Name</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field2' className={styles.labelpropmanag}>Phone No.</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field2' className={styles.labelpropmanag}>Email Id</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field2' className={styles.labelpropmanag}>City</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field2' className={styles.labelpropmanag}>House Configuration</label>
                        <div className={styles.buttoncontainerpropmanag}>
                            <div className={styles.buttonspropmanag}>1 BHK</div>
                            <div className={styles.buttonspropmanag}>2 BHK</div>
                            <div className={styles.buttonspropmanag}>3 BHK</div>
                            <div className={styles.buttonspropmanag}>4 BHK</div>
                            <div className={styles.buttonspropmanag}>Other</div>
                        </div>
                    </div>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field2' className={styles.labelpropmanag}>Expected Rent</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputdetrentnowpropmang}>
                        <label htmlFor='field2' className={styles.labelpropmanag}>Any Special Request</label>
                        <input type='text' />
                    </div>
                    <div>
                        <div className={styles.submitpropmanag}>Submit</div>
                    </div>
                </div>
            </div>
            <div className={styles.maincontpropmanag}>
                <div className={styles.propmanagcontheader}>
                    Property <br />
                    Management by<br /> RealBid.com
                </div>
                <div className={styles.propmanagcontent}>
                    1.Submit your details.<br />
                    2.Select the services you require.<br />
                    3.Select the appropriate package.<br />
                    4.The Property management team will call you.<br />
                    5.Dedicated property manager manages your property.
                </div>
            </div>
            <div>
                <img src={image1} alt='' className={styles.imagepropmanag}></img>
            </div>
        </div>
    )
}

export default Mainsectionpropmanag