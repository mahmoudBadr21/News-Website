import React from 'react'
import './footer.css'
import footerLoge from '../../../../public/images/tech-logo-footer.png'
import hero1 from '../../../../public/images/hero/hero1.jpg'
import hero2 from '../../../../public/images/hero/hero2.jpg'
import hero3 from '../../../../public/images/hero/hero3.jpg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src={footerLoge} alt="" />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <i className="fa fa-envelope"></i>
            <span> hello@beautiful.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span>+91 64421450</span>
          </div>

          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src={hero1} alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src={hero2} alt="" />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>

          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src={hero3} alt="" />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className="item">
              <img src={hero1} alt="" />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>

          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>

              <li>
                <span>Fashion</span> <label>(7)</label>
              </li>

              <li>
                <span>Health</span> <label>(5)</label>
              </li>

              <li>
                <span>Nature</span> <label>(8)</label>
              </li>
            </ul>
          </div>

        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
          <p>&copy; all rights reserved</p>
          <p>made with <i className="fa fa-heart"></i> by mahmoud badr</p>
        </div>
      </div>
    </>
  )
}

export default Footer