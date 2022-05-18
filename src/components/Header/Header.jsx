import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="nav">
        <img
          className="nav-logo"
          src={process.env.PUBLIC_URL + '/logo192.png'}
          alt="React Logo"
        />
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
