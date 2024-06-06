import React from 'react'
import Carousel from 'react-multi-carousel';
import '../styles/coursel.css';
import 'react-multi-carousel/lib/styles.css';
import customerimg from '../assets/newarticle.jpeg'
function Coursel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='cardset'>
            <h1 className='headercarousal'>News and Articles</h1>
            <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
                <div className='card'>
                    <img src={customerimg} alt='' className='customerreview'></img>
                    <p className='reviewcontent' id='lastcard'>
                        "This is a cutomer quote the customer
                        is going to share there opinion about
                        our product or services hopefully
                        its going to be positive one.the
                        social proof section is important when you want to increase trustworthiness
                        of your company with your website visiters."
                    </p>
                    <h4>
                        Name LastName
                    </h4>
                </div>
            </Carousel>
        </div>
    )
}
export default Coursel