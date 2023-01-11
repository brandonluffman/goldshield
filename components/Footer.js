import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';

const Footer = () => {
  return (
    <div>
    <div className="footer-container">
      <div className='footer-brand-div'>
      <img src='/goldshield-logo.webp' className='footer-img' alt='Brand Logo'></img>
      <div className='footer-socials'>
      <FaInstagram className='footer-social instagram-icon'/>
      <BsFacebook className='footer-social facebook-icon'/>
      <BsLinkedin className='footer-social linkedin-icon' />
      <BsTwitter className='footer-social twitter-icon'/>
      </div>
      </div>
      <div className='footer-links-container'>
      <div className='footer-links'>
        <div className='footer-links-header'><p className='footer-link-header'>Gold Shield</p></div>
        <div className='footer-link'><Link href='/'>Home</Link></div>
        <div className='footer-link'><Link href='/about'>About</Link></div>
        <div className='footer-link'><Link href='/services'>Services</Link></div>
        <div className='footer-link'><Link href='/locations'>Locations</Link></div>
        <div className='footer-link'><Link href='/booking'>Contact Us</Link></div>
      </div>
      <div className='footer-links'>
        <div className='footer-links-header'><p className='footer-link-header'>Support</p></div>
        <div className='footer-link'><Link href='/'>Privacy Policy</Link></div>
        <div className='footer-link'><Link href='/'>Terms of Use</Link></div>
        {/* <div className='footer-link'><Link href='/'>FAQs</Link></div> */}
      </div>
      <div className='footer-links'>
        <p className='footer-contact-content-header'>Contact</p>
        <p className='footer-contact'><GoMail className='footer-contact-icon' /> chris@goldshield.co</p>
        <p className='footer-contact'><IoIosPhonePortrait className='footer-contact-icon' /> (917) 733-8909</p>
      </div>
    </div>
    </div>
    <div className='footer-copyright'>
      <p className='footer-copyright-content'>Copyright © {new Date().getFullYear()} Gold Shield Home Inspection Services - All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer;