import React from 'react'

const App = () => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + '/logo192.png'}
        alt="React Logo"
        width="40px"
      />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created bby Jorday Walke</li>
        <li>Has well over 100k stars in GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  )
}

export default App
