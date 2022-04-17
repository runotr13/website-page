import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div>
      <h2 className='h2title'>Services</h2>
      <div className="design">
        <div className="containerleft">
            <div className="webDesign">
              <h3>Website Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos velit iste dolorem.</p>
              <p>Pricing $1,000 - $3,000</p>
            </div>
            <div className="webDesign">
              <h3>Website Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos velit iste dolorem.</p>
              <p>Pricing $250 per month</p>
            </div>
            <div className="webDesign">
              <h3>Website Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos velit iste dolorem.</p>
              <p>Pricing $25 per month</p>
            </div>
        </div>
        <div className="containerright">
          <div className="containerHeaderss">
          <h3>GetA Quote</h3>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' placeholder='Name'/>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='Email Adress'/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" className='message' cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services