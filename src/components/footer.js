import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa6";
import companyimg from '../Assets/Picture1.png';
import './footer.css';
function Footer() {
    return (
        <div className='footer'>
            <img src={companyimg} alt='there is an image' className='logoimg'></img>
            <ul className='listcontent'>
                <li className='listitem'><a>About Us</a></li>
                <li className='listitem'><a>Career</a></li>
                <li className='listitem'><a>Testimonials</a></li>
                <li className='listitem'><a>Terms & Conditions</a></li>
                <li className='listitem'><a>Privacy</a></li>
                <li className='listitem'><a>Contact Us</a></li>
                <li className='listitem'><a>FAQ's</a></li>
            </ul>
            <ul className='listcontent'>
                <li className='logolist'><FaInstagram /></li>
                <li className='logolist'><FaFacebook /></li>
                <li className='logolist'><FaYoutube /></li>
                <li className='logolist'><FaTwitter /></li>
                <li className='logolist'><FaLinkedin /></li>
            </ul>
            <hr className="big-underline-hr" />
            <p className='footertext'>©2023-2024 RealBid Pvt. LTD.</p>
        </div>
    )
}

export default Footer