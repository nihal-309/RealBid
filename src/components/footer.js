import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa6";
import companyimg from '../assets/Picture1.png';
import '../styles/footer.css';
function Footer() {
    return (
        <div className='footer'>
            <img src={companyimg} alt='' className='logoimg'></img>
            <ul className='listcontent'>
                <li className='listitem'><a href="#/">About Us</a></li>
                <li className='listitem'><a href="#/">Career</a></li>
                <li className='listitem'><a href="#/">Testimonials</a></li>
                <li className='listitem'><a href="#/">Terms & Conditions</a></li>
                <li className='listitem'><a href="#/">Privacy</a></li>
                <li className='listitem'><a href="#/">Contact Us</a></li>
                <li className='listitem'><a href="#/">FAQ's</a></li>
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