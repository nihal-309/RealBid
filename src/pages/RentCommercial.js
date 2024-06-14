import styles from '../styles/RentCommercial.module.css'
import Filter from '../components/Filter3';
import BuyResCard from '../components/BuyResCard';

function RentResidential() {
  return (
    <div className={styles.BuyResidential}>
    <Filter className={styles.filter} first={styles.first}/>
        <div className={styles.cards}>
        <BuyResCard 
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
                finalPrice="20,000"
                auctions={styles.auction}
                add={styles.adress}
                furnish="Semi"
            />
            <BuyResCard 
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
                finalPrice="20,000"
                auctions={styles.auction}
                add={styles.adress}
                furnish="Semi"
            />
        </div>
    </div>
    );
}

export default RentResidential;