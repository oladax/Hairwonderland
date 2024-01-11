import React from 'react'
import './footer.css'

function Lastpage() {
  return (
    <div className="footer">
      <div className="subscribe-con">
        <div className="container">
          <em>Subscribe</em>
          <div>
            <h2>SIGN UP TO OUR NEWSLETTER</h2>
            <p>
              Sign up for our newsletter and get the best offers in your inbox
            </p>
          </div>
        </div>
      </div>
      <div className="email-subscribe">
        
          <input className='email-input' type="email" name="" id="" placeholder="Enter your email" />
          <input className='button-input' type="button" value="Subscribe" />
        
      </div>
    </div>
  );
}

export default Lastpage
