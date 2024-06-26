import React from 'react'
import styles from '../styles/Auctionrulespointer.module.css'
function Auctionrulespointer() {
  return (
    <div>
      <div className={styles.pointscointainer}>
        <p className={styles.contentauctionrules}>1.The property will be opened for bidding at the mentioned time. </p>
        <p className={styles.contentauctionrules}>2.The biddding will be stopped when the auction duration is over or only one participant is left in the room. </p>
        <p className={styles.contentauctionrules}>3.The bidder has to pay the auction fees before bidding and the fees will be refunded if  you didn’t won.</p>
        <p className={styles.contentauctionrules}>4.The participant who won the auction has to pay the token amount of the property which he won. </p>
        <p className={styles.contentauctionrules}>5.The participant can place any number of bids.</p>
        <p className={styles.contentauctionrules}>6.Extra 2 minutes will be added to the timer if bids are placed in the last 1 minute.</p>
        <p className={styles.contentauctionrules}>7.The details of the owner of the property will be given to the participant if they win the auction.</p>
      </div>
      <div className={styles.auctionbutton}>
        Start Auction
      </div>
    </div>
  )
}

export default Auctionrulespointer