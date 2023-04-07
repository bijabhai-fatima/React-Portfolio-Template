import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const links={
    facebook:'',
    instagram:'',
    twitter:'',
}

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>ME</a>

            <ul className='permalink'>
                <li><a href='#'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Experience'>Experience</a></li>
                <li><a href='#Sevices'>Sevices</a></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Testimonials'>Testimonials</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href={links.facebook}><FaFacebookF /></a>
                <a href={links.instagram}><FiInstagram /></a>
                <a href={links.twitter}><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; EGATOR Tutorials. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer