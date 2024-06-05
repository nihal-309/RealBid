import React from 'react'
import Carousel from 'react-multi-carousel';
import './Articlecoursel.css';
import newsimg from '../Assets/newarticle.jpeg';
function Articlecoursel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
            <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
                <div className='card'>
                    <img src={newsimg} alt='there is an image' className='articleimage'></img>
                    <h3 className='newsheadline'>News headline1</h3>
                    <p className='articlereviewcontent' id='lastcard'>
                        Here is the content of news headline1
                        mentioned above and the new headline is
                        related to the real estate activities
                        happening in India or anywhere
                        around the world
                    </p>
                    <a href='#' className='linkclass'>
                        <p>Learn More</p>
                    </a>
                </div>
            </Carousel>
        </div>
    )
}

export default Articlecoursel