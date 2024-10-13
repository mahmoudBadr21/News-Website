import React from 'react'
import logo from "/public/images/logo.png"
import ad from "/public/images/headerb.png"

const Head = () => {
  return (
    <section className='head'>
      <div className="container flexSB paddingTB">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="ad">
          <img src={ad} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Head