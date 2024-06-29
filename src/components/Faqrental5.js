import React,{useState} from 'react'
import styles from '../styles/Faqrental5.module.css'
function Faqrental5() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.faqcontainerrental}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={styles.faqcontrental}>
      When will the online rental agreement expire?
        <span>{isHovered ? '▲' : '▼'}</span>
      </p>
      {isHovered && (
        <p>
          <p className={styles.secondlinefaq}>Online rental agreement expires in 11 months</p>
          <p className={styles.finishrent}></p>
        </p>
      )}
    </div>
  )
}

export default Faqrental5