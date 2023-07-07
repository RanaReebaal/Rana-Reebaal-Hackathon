import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Online Shop</h4>
                    <ul>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Bag</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Dress</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><BsLinkedin /></a>
                        <a href="#"><BsFacebook /></a>
                        <a href="#"><BsTwitter /></a>
                        <a href="#"><BsInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; Copyright 2022 &ensp; Rana Reebaal Hackathon All Rights Reserverd</p>
            </div>
        </div>
    )
}

export default Footer