import React, { useState } from 'react'
import  styles from '../styles/Faqrental.module.css'
function Faqrental() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.faqcontainerrental}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={styles.faqcontrental}>
        Is it necessary for me to go to any government office?
        <span>{isHovered ? '▲' : '▼'}</span>
      </p>
      {isHovered && (
        <p>
          <p className={styles.secondlinefaq}>No, every process will be done online.</p>
          <p className={styles.finishrent}></p>
        </p>
      )}
    </div>
  )
}

export default Faqrental