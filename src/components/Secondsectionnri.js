import React from 'react'
import styles from'../styles/Secondsectionnri.module.css'
import image1 from '../assets/logo1nri.png'
import image2 from '../assets/logo2nri.png'
import image3 from '../assets/logo3nri.png'
import image4 from '../assets/logo4nri.png'
function Secondsectionnri() {
    return (
        <div>
            <div className={styles.secondsectionheader}>Services</div>
            <div className={styles.finalcontpropmanag}>
                <div className={styles.subcontpropmanage}>
                    <img src={image1} alt='' className={styles.logoimgpropmanagement}></img>
                    <p className={styles.propertymanagementsectionhead}>Property Buy/Sell/Rent</p>
                </div>
                <div className={styles.subcontpropmanage2}>
                    <img src={image2} alt='' className={styles.logoimgpropmanagement}></img>
                    <p className={styles.propertymanagementsectionhead} id={styles.header2prop}>Agreements Online</p>
                </div>
            </div>
            <div className={styles.finalcontpropmanag}>
                <div className={styles.subcontpropmanage3}>
                    <img src={image3} alt='' className={styles.logoimgpropmanagement}></img>
                    <p className={styles.propertymanagementsectionhead} id={styles.header3prop}>Property Management</p>
                </div>
                <div className={styles.subcontpropmanage4}>
                    <img src={image4} alt='' className={styles.logoimgpropmanagement}></img>
                    <p className={styles.propertymanagementsectionhead} id={styles.header4prop}>Easy Online Paperwork</p>
                </div>
            </div>
        </div>
    )
}

export default Secondsectionnri