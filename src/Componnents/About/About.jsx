import React from 'react';
import ProfilePic from '../../assets/Home/patrick2.jpg';
import './About.css';

const About = () => {
  return (
    
    <div id="about" className="about">
        <div className="about-content">
          <div className="picture">
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
          </div>
          <div className="content-text">
            <h3 className="text-apropos">À propos</h3>
            <div className="aproposSection">
              Je suis Razafimandimby Solofoniaina Patrick, développeur web  
              Curieux et passionné par les nouvelles technologies modèrnes dès le plus
              jeune âge, Inspiré par l'intelligence collective et engagé dans
              l'action et le résultat.
            </div>
            <div className="aproposProfile">
              <ul>
                <li>Développeur FullStack</li>
                <li>Passionné par Reactjs</li>
                <li>Framework PHP et Python</li>
                <li>Designer</li>
                <li>Infographiste</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
