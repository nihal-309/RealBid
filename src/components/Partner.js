import '../styles/Partner.css'
import { Link } from 'react-router-dom';

function Partner() {
    return(
        <div className="Partner">
            <div className="contt">
                <h1 className='headd'>Partnership With RealBid</h1>
                <p>
                    Are you part of a government body or a private sector company aiming to optimize returns from asset auctions or liquidations? Explore a strategic partnership with RealBid.
                </p>
                <p>
                    If you handle real estate and various tenders, partnering with RealBid can leverage technology and our services to provide you with outstanding results.
                </p>
                <p>
                    At RealBid, we don't just facilitate business transactions; we also generate opportunities for our partners.
                </p>
                <Link to="/partnership "><button>Lets Talk</button></Link>
            </div>
            <h1 className='sitee'>RealBid.Com</h1>
        </div>
    )
}

export default Partner; 