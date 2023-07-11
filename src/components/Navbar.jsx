import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="description-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link style={{ marginLeft: '35px'}} className="navbar-brand" to="/">
            JAPS Auction House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mr-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{ color: "white" }} className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "white", marginRight: "25px" }} className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default Navbar