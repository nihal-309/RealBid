import styles from '../styles/Nriformcontainer.module.css'
import nriimage from '../assets/nriimage.png'
import React from 'react'

function Nriformcontainer() {
  return (
    <div>
        <div className={styles.contentcontainernri}>
            <img src={nriimage} alt='#' className={styles.imagenri}></img>
            <div className={styles.formheadernri}>NRI Services</div>
            <div className={styles.formcontainernri}>
                <label htmlFor='namenri' className={styles.labelnri}>Name</label>
                <input type='text' className={styles.formsectionri1}></input>
                <label htmlFor='Emailnri' className={styles.labelemailnri}>Email</label>
                <input type='text' className={styles.formsectionri2}></input>
                <label htmlFor='Emailnri' className={styles.labelnationalitynri}>Naitionality</label>
                <input type='text' className={styles.formsectionri3}></input>
                <div className={styles.formbuttonnri}>
                    <div className={styles.indvinributton}>Owner</div>
                    <div className={styles.indvinributton}>Buyer</div>
                    <div className={styles.indvinributton}>Tenant</div>
                </div>
                <div className={styles.submitnri}>Submit</div>
            </div>
        </div>
    </div>
  )
}

export default Nriformcontainer