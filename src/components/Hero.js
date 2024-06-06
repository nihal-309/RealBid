import IMG1 from '../assets/hero.png';
import '../styles/Hero.css';
function Hero(){
    return(
        <div className="Hero">
            <img className='hero' src={IMG1} alt="" />
        </div>
    )
}

export default Hero;