import React from 'react';
import {motion} from 'motion/react'
import './styles/footer/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-social">
          <div className="logo ifx">Infinix</div>
          <div className="footer-social-icons">
            <a href="#" aria-label="X (formerly Twitter)">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4 className='ifx'>ABOUT US</h4>
            <ul>
              <li><a href="https://ng.infinixmobility.com/about/story">Our Story</a></li>
              <li><a href="https://ng.infinixmobility.com/about/contact">Contact Us</a></li>
              <li><a href="https://ng.infinixmobility.com/about/in-studio">IN Studio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='ifx'>PRODUCTS</h4>
            <ul>
              <li><a href="https://ng.infinixmobility.com/Smartphones">Smartphones</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='ifx'>CARE</h4>
            <ul>
              <li><a href="https://ng.infinixmobility.com/care/imei-authentication">IMEI Authentication</a></li>
              <li><a href="https://ng.infinixmobility.com/care/support">Product Support</a></li>
              <li><a href="https://ng.infinixmobility.com/care/repair">Repair Center</a></li>
              <li><a href="https://ng.infinixmobility.com/care/limited-warranty">Limited Warranty</a></li>
              <li><a href="https://ng.infinixmobility.com/care/faq">FAQS</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className='ifx'>SERVICE</h4>
            <ul>
              <li><a href="https://ng.infinixmobility.com/find-a-store">Find a Store</a></li>
              <li><a href="https://infinix.club/">XClub</a></li>
              <li><a href="https://xpark.com/">XPark</a></li>
              <li><a href="https://ng.infinixmobility.com/xos">XOS</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <p><a href="tel:+07044770106">+07044770106</a> <span>Mon - Fri 9:30am to 5:30pm</span></p>
      </div>
      <motion.div
                    initial={{width: '50%'}}
                    transition= {{duration: 0.9, ease: 'backOut'}}
                    whileInView={{width: '97%'}}
                    viewport={{once: false, amount: 1}}
                    className="hr"/>
      <div className="footer-bottom">
        <p>Infinix © 2025 All rights reserved</p>
        <div className="links">
          <a href="https://ng.infinixmobility.com/privacypolicy">Privacy Policy</a>
          <a href="https://ng.infinixmobility.com/termsuse">Terms of use</a>
          <p>Location: Nigeria(EN)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
