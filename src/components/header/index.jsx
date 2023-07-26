import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

export default function Header() {
  // fixed Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 100);
  });

  // Toggle Menu
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navLink">
            <ul
              className={mobile ? 'nav-links-mobile' : 'link f_flex uppercase'}
              onClick={() => setMobile(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/clients">clients</Link>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <button className="home-btn">BUY NOW</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
