import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-brand'>
          <div className='footer-logo'>NO</div>
          <p className='footer-title'>Nammul Oruvan</p>
          <p className='footer-tagline'>Trusted local services, right at your doorstep.</p>
        </div>

        <div className='footer-section'>
          <h4>Services</h4>
          <ul>
            <li>Electricians</li>
            <li>Plumbers</li>
            <li>Carpenters</li>
            <li>Appliance Repair</li>
            <li>Mechanics</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>My Bookings</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Contact</h4>
          <ul>
            <li>+91 90000 12345</li>
            <li>support@nammuloruvan.com</li>
            <li>Coimbatore, Tamil Nadu</li>
            <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2026 Nammul Oruvan. All rights reserved.</p>
        <div className='footer-socials'>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
