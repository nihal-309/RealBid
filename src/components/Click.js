import '../styles/Click.css'
import IMG1 from '../Assets/phone.png'

function Click() {
    return(
        <div className="Click">
            <div className="content">
                <h1>Click And Earn</h1>
                <p>Earn up to ₹50 for every property listing published by either
                   clicking a picture or referring the owner details.</p>
            </div>
            <img src={IMG1} alt="" />
            <button>Upload Now</button>
        </div>
    )
}

export default Click;   