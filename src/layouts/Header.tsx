import { useState } from 'react'
//import '../assets/css/Header.css'
import Navbar from './Navbar'
function Header() {

  return (
    <header>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" >REACT</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Navbar />
          </div>
        </nav>
      </div>
    </header >
  )
}

export default Header
