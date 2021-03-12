import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            React User
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <buttton className="btn btn-outline-light"> Add User</buttton>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
