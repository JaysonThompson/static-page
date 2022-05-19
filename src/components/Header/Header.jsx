import React from 'react'

import reactLogo from '../../img/logo192.png'

const Header = () => {
  return (
    <>
      <nav className="nav">
        <img className="nav-logo" src={reactLogo} alt="React Logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Header
