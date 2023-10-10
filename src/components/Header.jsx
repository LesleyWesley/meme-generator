import React from "react"

function Header() {
  return (
    <header>
      <div className="header--logo-container">
          <img src="../src/assets/troll-face.png" alt="logo" className="header--logo"/>
          <h1>MemeGenerator</h1>
      </div>
      <h2 className="header--course-title">React Course - Project 3</h2>
    </header>
  )
}

export default Header
