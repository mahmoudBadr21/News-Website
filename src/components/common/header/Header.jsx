import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />

      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navbar ? "navbar" : 'flex'} onClick={() => setNavbar(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/culture'>Culture</Link></li>
              <li><Link to='/politics'>Politics</Link></li>
              <li><Link to='/memes'>Memes</Link></li>
              <li><Link to='/sports'>Sports</Link></li>
              <li><Link to='/boxed'>Boxed</Link></li>
              <li><Link to='/reviews'>Reviews</Link></li>
            </ul>
            <button className="barIco" onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header