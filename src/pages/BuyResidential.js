import styles from '../styles/BuyResidential.module.css'
import Filter from '../components/Filter';
import BuyResCard from '../components/BuyResCard';

function BuyResidential() {
    return (
        <div className={styles.BuyResidential}>
            <Filter className={styles.filter}/>
            <div className={styles.cards}>
                <BuyResCard  //withiut auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Without Auction"
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
                    finalPrice="1,20,00,000"
                    furnish="Semi"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                    hide={styles.hide}
                />
                <BuyResCard  //with auction
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
                    finalPrice="1,20,00,000"
                    furnish="Semi"
                    button="Bid Now"
                    link="/startAuction"
                    card={styles.buyResCard}
                />
                <BuyResCard  //withiut auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Without Auction"
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
                    finalPrice="1,20,00,000"
                    furnish="Semi"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                    hide={styles.hide}
                />
                <BuyResCard  //withiut auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Without Auction"
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
                    finalPrice="1,20,00,000"
                    furnish="Semi"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                    hide={styles.hide}
                />
                <BuyResCard  //with auction
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
                    finalPrice="1,20,00,000"
                    furnish="Semi"
                    button="Bid Now"
                    link="/startAuction"
                    card={styles.buyResCard}
                />
                <BuyResCard  //withiut auction
                    adress="Vellore Institute of Technology , Katpadi, Vellore Tamil Nadu  , India , 632014 "
                    auction="Without Auction"
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
                    finalPrice="1,20,00,000"
                    furnish="Semi"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    link="/getOwnerDetails"
                    hide={styles.hide}
                />
            </div>
        </div>
    );
  }

export default BuyResidential;