import React from 'react';
import './Projet.css';
import { FaLaravel, FaReact, FaCss3Alt, FaPhp, FaWordpress } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaBootstrap, FaDatabase } from 'react-icons/fa6';
import { DiMysql } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const Projet = () => {
    const projets = [
        {
            titre: 'Système de gestion des réservations d\'avions',
            description: 'Une application de gestion des réservations de sièges d\'avion avec Laravel et React.',
            technologies: ['Laravel', 'React', 'Bootstrap'],
            lien: 'https://github.com/votre-repo/reservation-system'
        },
        {
            titre: 'Portfolio personnel',
            description: 'Mon portfolio en ligne pour présenter mes compétences et mes projets.',
            technologies: ['React', 'CSS', 'Framer Motion'],
            lien: 'https://votre-portfolio.com'
        },
        {
            titre: 'Application de gestion d\'étudiants',
            description: 'Une application web pour gérer les informations des étudiants et des cours.',
            technologies: ['Laravel', 'React', 'MySQL'],
            lien: 'https://github.com/votre-repo/student-management'
        },
        {
            titre: 'Blog personnel',
            description: 'Un blog simple pour partager des articles techniques et personnels.',
            technologies: ['PHP', 'MySQL', 'CSS'],
            lien: 'https://votre-blog.com'
        }
    ];

    const techIcons = {
        Laravel: <FaLaravel size={60} color="#FF2D20" />,
        React: <FaReact size={60} color="#61DAFB" />,
        Bootstrap: <FaBootstrap size={60} color="#21759B" />,
        CSS: <FaCss3Alt size={50} color="#1572B6" />,
        PHP: <FaPhp size={60} color="#4F5B93" />,
        WordPress: <FaWordpress size={60} color="#21759B" />,
        MySQL:<SiMysql size={70} color="#21759B" />
    };

    return (
        <div className="projet-container">
            <h3 className="projet-titre">Mes Projets</h3>
            <div className="projets-liste">
                {projets.map((projet, index) => (
                    <motion.div 
                        key={index} 
                        className="projet-card"
                        initial={{ opacity: 0, y: 20 }} // État initial
                        animate={{ opacity: 1, y: 0 }} // État final
                        transition={{ duration: 0.5 }} // Durée de l'animation
                    >
                        <h4>{projet.titre}</h4>
                        <p>{projet.description}</p>
                        <p> 
                            {projet.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-icon">
                                    {techIcons[tech]}
                                </span>
                            ))}
                        </p>
                        <a href={projet.lien} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projet;
