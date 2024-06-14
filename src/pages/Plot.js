import Filter from '../components/Filter2';
import styles from '../styles/Plot.module.css'
import BuyResCard from '../components/BuyResCard2';

function Plot(){
    return(
        <div className={styles.BuyResidential}>
            <Filter className={styles.filter}/>
            <div className={styles.cards}>
                <BuyResCard 
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
                    card={styles.buyResCard}
                    button="Get Owner Details"
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
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Get Owner Details"
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
                    finalPrice="1,20,00,000"
                    card={styles.buyResCard}
                    button="Get Owner Details"
                    furnish="Semi"
                />
            </div>
        </div>
    )
}

export default Plot;