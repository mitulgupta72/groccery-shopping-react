import React from 'react'

const footer = () => {
  return (
    <>
    <div className="box-container">
          <div className="box">
            <h3>
              {" "}
              Groco <i className="fa fa-shopping-basket" />
            </h3>
            <p>
              feel free to follow us our social media handlers all the links are
              given below.
            </p>
            <div className="share">
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-instagram" />
              <a href="#" className="fa fa-linkedin" />
            </div>
          </div>
          <div className="box">
            <h3> Contact Info </h3>
            <a href="#" className="links">
              <i className="fa fa-phone" /> +916260078586
            </a>
            <a href="#" className="links">
              <i className="fa fa-phone" /> +917970206055
            </a>
            <a href="#" className="links">
              <i className="fa fa-envelope" /> mitulgupta2001@gmail.com
            </a>
            <a href="#" className="links">
              <i className="fa fa-map-marker" /> jabalpur(m.p) , india{" "}
            </a>
          </div>
          <div className="box">
            <h3> Quick links </h3>
            <a href="#" className="links">
              <i className="fa fa-arrow-right" /> home
            </a>
            <a href="#" className="links">
              <i className="fa fa-arrow-right" /> features
            </a>
            <a href="#" className="links">
              <i className="fa fa-arrow-right" /> products
            </a>
            <a href="#" className="links">
              <i className="fa fa-arrow-right" /> categories
            </a>
            <a href="#" className="links">
              <i className="fa fa-arrow-right" /> review
            </a>
            <a href="#" className="links">
              <i className="fa fa-arrow-right" /> Blogs
            </a>
          </div>
          <div className="box">
            <h3> Newsletter </h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email" />
            <input type="submit" defaultValue="subscribe" className="btn" />
            <img src="image/payment.png" className="payment-img" />
          </div>
        </div>
    </>
  )
}

export default footer

