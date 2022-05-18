import React from 'react'

const Header = () => {
  return (
    <>
      <nav>
        <img
          src={process.env.PUBLIC_URL + '/logo192.png'}
          alt="React Logo"
          width="100px"
        />
      </nav>
      <h1>Jayson's React Page</h1>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ol>
    </>
  )
}

export default Header
