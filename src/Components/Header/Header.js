import { faClock, faMoneyBill, faPhone, faSearch, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.svg';

import React from 'react';

const Header = () => {
    return (
        <div >
            {/* Header Feature */}
            <div className="container w-75 mx-auto p-2">
                <div className="row text-secondary">
                    <div className="col-lg-3 col-sm-6">
                    <div className="d-flex align-items-center me-5">
                    <span className='fs-4'> <FontAwesomeIcon icon={faClock} /></span>
                    <p className='fs-5 ps-2 mt-2'>WORKING TIME</p>
                </div>
                    <small>Mon- Sun: 8.00 - 18.00</small>
                    </div>
                    <div className="col-lg-3  col-sm-6">
                    <div className="d-flex align-items-center me-5">
                    <span className='fs-4'> <FontAwesomeIcon icon={faTruck} /></span>
                    <p className='fs-5 ps-2 mt-2'>FREE SHIPPING</p>
                </div>
                    <small>On order over $199</small>
                    </div>
                    <div className="col-lg-3  col-sm-6">
                    <div className="d-flex align-items-center me-5">
                    <span className='fs-4'>  <FontAwesomeIcon icon={faMoneyBill} /></span>
                     <p className='fs-5 ps-2 mt-2'>MONEY BACK 100%</p>
                </div>
                    <small>Within 30 Days after delivery</small>
                    </div>
                    <div className="col-lg-3  col-sm-6">
                    <div className="d-flex align-items-center me-5">
                    <span className='fs-4'> <FontAwesomeIcon icon={faPhone} /></span>
                    <p className='fs-5 ps-2 mt-2'>PHONE: 0123456789</p>
                </div>
                    <small>Order Online Now !</small>
                    </div>
                </div>
            </div>
            <div className='w-75 mx-auto text-secondary'>
            
            {/* Search Section */}
            <section className='d-flex mb-4 '>
                <div className='bg-secondary rounded-start me-4'>
                    <img src={logo} alt="" />
                </div>
            <div className="input-group ">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#mobile">Mobile</a></li>
                    <li><a className="dropdown-item" href="#Laptop">Laptop</a></li>
                    <li><a className="dropdown-item" href="#television">Television</a></li>
                </ul>
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
        </div>
            </section>
        </div>
        {/* Main Menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-2 fs-5">
  <div className="container-fluid w-75 mx-auto">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORIES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#laptop">Laptop</a></li>
            <li><a className="dropdown-item" href="#mobile">Mobile</a></li>
            <li><a className="dropdown-item" href="#television">Television</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-us">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#bestseller">Best Seller Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#new-product">New Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-us">Contact Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

      
        </div>  
    );
};

export default Header;