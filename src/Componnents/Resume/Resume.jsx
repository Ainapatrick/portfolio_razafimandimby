import React, { useState } from 'react';
import Education from './Education';
import Stage from './Stage';
import Projet from './Projet';
import Skills from './Skills';
import Interet from './Interet';
import './Resume.css';
import { FaGraduationCap, FaLanguage, FaPassport } from 'react-icons/fa';
import { FaBoxesStacked, FaSchoolCircleExclamation } from 'react-icons/fa6';

const Resume = () => {
    const [activeSection, setActiveSection] = useState('education');

    return (
        <div id="resume" className="resume">
            <h3 className="text-resume">Mes Formations et Projets</h3>
                <div className="content_resume">
                    <div className="menu-resume">
                        <ul className="liste_menu">
                            <li className={activeSection === 'education' ? 'active' : ''} onClick={() => setActiveSection('education')}>
                                <FaGraduationCap /><span>Education</span>
                            </li>
                            <li className={activeSection === 'stage' ? 'active' : ''} onClick={() => setActiveSection('stage')}>
                                <FaSchoolCircleExclamation /><span>Stage</span>
                            </li>
                            <li className={activeSection === 'projet' ? 'active' : ''} onClick={() => setActiveSection('projet')}>
                                <FaGraduationCap /><span>Projects</span>
                            </li>
                            <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>
                                <FaBoxesStacked /><span>Skills</span>
                            </li>
                            <li className={activeSection === 'interet' ? 'active' : ''} onClick={() => setActiveSection('interet')}>
                                <FaPassport /><span>Intêrets</span>
                            </li>
                        </ul>
                    </div>
                    <div className="content-text-resume">
                        {activeSection === 'education' && <Education />}
                        {activeSection === 'stage' && <Stage />}
                        {activeSection === 'projet' && <Projet />}
                        {activeSection === 'skills' && <Skills />}
                        {activeSection === 'interet' && <Interet />}
                    </div>
                </div>
            </div>
    );
};

export default Resume;
