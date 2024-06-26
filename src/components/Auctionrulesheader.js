import React from 'react'
import style from '../styles/Auctionrulesheader.module.css'
import Auctionrulespointer from './Auctionrulespointer'
function Auctionrulesheader() {
    return (
        <div className={style.contentauction}>
            <p className={style.sectionheadingauction}>
                Auction Rules
            </p>
            <Auctionrulespointer/>
        </div>
    )
}

export default Auctionrulesheader