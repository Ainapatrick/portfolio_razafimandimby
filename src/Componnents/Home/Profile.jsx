import React, { useEffect, useState } from 'react';
import Header from '../../Componnents/Header/Header';
import { FaFacebook, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';
import HeroSection from '../../Componnents/HeroSection';
import './Profile.css';

export default function Profile() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="profile-container" id='home'>
      <Header scrolled={scrolled} />
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
             <h2>Bonjour, Je suis <span className="text-nom">RAZAFIMANDIMBY Solofoniaina Patrick</span></h2>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <HeroSection />
              </h1>
              <span className="profile-role-tagline">
                Je suis un développeur web avec une passion pour les technologies modernes
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire me {" "}
            </button>
            <a href="moncv.pdf" download='Razafimandimby moncv.pdf'>
              <button className="btn download-btn">Dowload mon cv</button>
            </a>
          </div>
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa"><FaFacebook /></i>
              </a>
              <a href="#">
                <i className="fa"><FaGoogle /></i>
              </a>
              <a href="#">
                <i className="fa"><FaInstagram /></i>
              </a>
              <a href="#">
                <i className="fa"><FaYoutube /></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
