import styles from '../styles/Header2.module.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import PropertyForAuction from './propertiesForAuction';
import Login from './Login';
import Otp from './Otp';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMG1 from '../assets/hamburger.png';
import IMG2 from '../assets/profile.png';
import IMG3 from '../assets/image.png';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

function Header2(){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loginIsOpen, setLoginIsOpen] = useState(false);
    const [otpIsOpen, setOtpIsOpen] = useState(false);
    const [isDivOpen, setIsDivOpen] = useState(false);

    const openLogin = () => {
        setLoginIsOpen(true);
    }

    const closeLogin = () => {
        setLoginIsOpen(false);
        setOtpIsOpen(true);
    }

    const closeLogin1 = () => {
        setLoginIsOpen(false);
        setOtpIsOpen(false);
    }

    const closeOtp = () => {
        setOtpIsOpen(false);
    }

    const handlePhoneNumberChange = (newPhoneNumber) => {
        setPhoneNumber(newPhoneNumber);
    };

    const handlePropertiesChange = () => {
        setIsDivOpen(!isDivOpen); // Toggle the visibility
    };

    return(
        <div className={styles.Header2}>
            <select name="" id={styles.tender}>
                <option className={styles.tend} value="Tenders for Auction">Tenders for Auction</option>
            </select>
            <div className={styles.line}></div>

            <button className={styles.propertiesButton} onClick={handlePropertiesChange}>
                Properties for auction <img src={IMG3} alt="" />
            </button>
            {isDivOpen && <PropertyForAuction />}

            <button onClick={openLogin} className={styles.login}>Login</button>
            <Link to="/signup"><button className={styles.reg}>Register</button></Link>

            <Modal
                isOpen={otpIsOpen}
                onRequestClose={closeOtp}
                className={styles.otpWindow}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }}
            >
                 <Otp close={closeOtp} value={phoneNumber} /> {/*close={closeOtp} value={number} */}
            </Modal>

            <Modal
                isOpen={loginIsOpen}
                onRequestClose={closeLogin}
                contentLabel="Example Modal"
                className={styles.loginWindow}
                shouldCloseOnOverlayClick={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }}
            >
                <Login onPhoneNumberChange={handlePhoneNumberChange} close1={closeLogin1} close={closeLogin}/> {/*setNumber={setNumber}  close={closeLogin} */}
            </Modal>
            
            <Navbar bg="#3D3D3D" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <img className={styles.profile} src={IMG2} alt="" />
                    <NavDropdown title={<img className={styles.hamburgg} src={IMG1} alt=""/>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.4">Properties for Auction</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Tenders for Auction</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Auction Plans</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Plans for Owners</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Plans for Tenants</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Plans for Buyers</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Plans for sellers</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Rental Agreement</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Services for NRI’s</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <button className={styles.post1}>Post Property</button>
                </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}


export default Header2;