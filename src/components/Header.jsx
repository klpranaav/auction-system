import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { email } = useParams();
  const home = "/home/" + email;
  const auction = "/auction/" + email;
  const cart = "/cart/" + email;
  const sell = "/sell/" + email;
  const prof = "/profile/" + email;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link style={{ marginLeft: '35px' }} className="navbar-brand" to="/">
          JAPS Auction House
        </Link>
        <div className="nav-link mx-3">
          <a href={home} style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </a>
        </div>
        <div className="nav-link mx-3">
          <a href={auction} style={{ color: 'white', textDecoration: 'none' }}>
            Auction
          </a>
        </div>
        <div className="nav-link mx-3">
          <a href={sell} style={{ color: 'white', textDecoration: 'none' }}>
            Sell
          </a>
        </div>
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
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <FiSearch />
                  </button>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <div style={{ marginRight: '50px', marginLeft: '20px' }} onClick={toggleDropdown}>
                  <FaUser size={24} />
                  {dropdownOpen && (
                    <Dropdown.Menu className="custom-dropdown-menu" show>
                      <Dropdown.Item href={prof}>My Profile</Dropdown.Item>
                      <Dropdown.Item href={cart}>Cart</Dropdown.Item>
                      <Dropdown.Item href="/">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
