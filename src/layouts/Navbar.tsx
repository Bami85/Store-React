import { useState } from 'react'

function Navbar() {

    return (
        <ul className="nav navbar-nav ml-auto">
             <li className="nav-item">
                <a className="nav-link" href="aboutus.html" >
                    Home
                    <i className="bi bi-question-circle"></i>
                </a> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href="aboutus.html" >
                    Checkout
                    <i className="bi bi-question-circle"></i>
                </a> 
            </li>
        </ul>
    )
}

export default Navbar
