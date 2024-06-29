import React,{useState} from 'react'
import styles from '../styles/Faqrental3.module.css'
function Faqrental3() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.faqcontainerrental}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={styles.faqcontrental}>
      Is Aadhar e-sign valid?
        <span>{isHovered ? '▲' : '▼'}</span>
      </p>
      {isHovered && (
        <p>
          <p className={styles.secondlinefaq}>Signed agreement will be sent to the registered mail id and it can also be delivered as a hard copy at your door step.</p>
          <p className={styles.finishrent}></p>
        </p>
      )}
    </div>
  )
}

export default Faqrental3