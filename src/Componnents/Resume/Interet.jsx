import React from 'react';
import { FaFutbol, FaGamepad, FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Interet.css'

const Interet = () => {
    const interets = [
        { nom: 'Jeux vidéo', icon: <FaGamepad /> },
        { nom: 'Foot-ball', icon: <FaFutbol /> },
        { nom: 'Chanter', icon: <FaMusic /> },
    ];

    return (
        <div className="interet-container">
            <h3>Mes Intérêts</h3>
            <div className="interet-liste">
            {interets.map((interet, index) => (
                <motion.div
                    key={index}
                    className="interet-item"
                    initial={{ opacity: 0, scale: 0.8 }} // État initial
                    animate={{ opacity: 1, scale: 1 }} // État final
                    transition={{ duration: 0.3, delay: index * 0.1 }} // Délai d'animation
                >
                    <span className="interet-icon">{interet.icon}</span>
                    <p>{interet.nom}</p>
                </motion.div>
            ))}
            </div>
        </div>
    );
};

export default Interet;
