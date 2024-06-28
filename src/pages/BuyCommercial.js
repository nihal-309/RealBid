import styles from '../styles/BuyCommercial.module.css'
import Filter from '../components/Filter3';
import BuyResCard from '../components/BuyResCard3';

function BuyResidential() {
    return (
        <div className={styles.BuyResidential}>
            <Filter className={styles.filter}/>
            <div className={styles.cards}>
                <BuyResCard //auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Bid Now"
                    link="/auctionRules"
                />
                <BuyResCard //without auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                />
                <BuyResCard //auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Bid Now"
                    link="/auctionRules"
                />
                <BuyResCard //without auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                />
                <BuyResCard //auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Bid Now"
                    link="/auctionRules"
                />
                <BuyResCard //without auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                />
                <BuyResCard //without auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Auction"
                    bathroom="3"
                    facing="North"
                    bedroom="3"
                    kitchen="1"
                    bhk="3"
                    builtArea="4500 sq.ft"
                    avgPrice="16.67k/sq.ft"
                    parking="Car"
                    school="3"
                    hospital="1"
                    airport="10"
                    railway="4"
                    availablity="Immediately"
                    furnish="Semi"
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                />
            </div>
        </div>
    )
}

export default BuyResidential;