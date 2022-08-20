import React from 'react'
import data from "../aspect/wtf.png"
import  "./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={data} className="img-wtf"/>
    </a>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Fitness</a>
          <a className="nav-link1 active" aria-current="page" href="#">Nutrition</a>
          <a className="nav-link1 active" aria-current="page" href="#">Gyms</a>
          <a className="nav-link1 active" aria-current="page" href="#">Become WTF Partner</a>
          <a className="nav-link1 active" aria-current="page" href="#">About Us</a>
        </li>
          
      </ul>
      
        <button className="btn btn-outline-success" type="submit">Login</button>
 
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
