import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Frederico</h1>
                <p>I am a FullStack Web Developer from Portugal. I have worked at a tax and accounting consulting firm in the past, which has given me professional maturity.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input disabled type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>“Be tolerant with others and strict with yourself.”</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p><a href="https://github.com/FredSampaio97?tab=repositories">GitHub</a></p>
                <p><a href="https://www.linkedin.com/in/frederico-sampaio-593432251/">Connect with me</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer