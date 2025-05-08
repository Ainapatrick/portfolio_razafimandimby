import React from 'react';
import logo from '../../assets/Home/logo1.png';
import './Header.css';

function Header({ scrolled }) {
  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="navbar">
        <div className="titre-logo">
          <img src={logo} alt="Profile" className="logo" /><h1>TRICK'S</h1>
        </div>
        <div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#resume">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
