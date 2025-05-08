import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skills = {
        PYTHON: [
            { name: 'Tkinter', level: 85 },
            { name: 'Django', level: 80 },
            { name: 'Flask', level: 20 },
            { name: 'POO', level: 10 },
            { name: 'pycharm', level: 70 },
        ],
        PHP: [
            { name: 'POO', level: 85 },
            { name: 'Design Patterns', level: 80 },
            { name: 'Composer', level: 90 },
            { name: 'File Handling', level: 75 },
        ],
        Laravel: [
            { name: 'Routing', level: 90 },
            { name: 'Blade Templating', level: 80 },
            { name: 'Eloquent ORM', level: 85 },
            { name: 'Migrations', level: 75 },
            { name: 'API Development', level: 70 },
        ],
        
        Symfony: [
            { name: 'Routing', level: 75 },
            { name: 'Twig', level: 80 },
            { name: 'Doctrine ORM', level: 70 },
            { name: 'Services', level: 75 },
            { name: 'Security', level: 80 },
        ],
        HTML: [
            { name: 'Semantic HTML', level: 90 },
            { name: 'Forms', level: 85 },
            { name: 'Canvas', level: 80 },
            { name: 'SVG', level: 70 },
            { name: 'Web Storage', level: 75 },
        ],
        CSS: [
            { name: 'Flexbox', level: 85 },
            { name: 'Grid', level: 80 },
            { name: 'Animations', level: 75 },
            { name: 'Responsive Design', level: 90 },
            { name: 'SASS', level: 70 },
        ],
        React: [
            { name: 'JSX', level: 90 },
            { name: 'Components', level: 85 },
            { name: 'Hooks', level: 80 },
            { name: 'State Management', level: 75 },
            { name: 'Routing', level: 80 },
        ],
    };

    const [activeCategory, setActiveCategory] = useState('PYTHON');

    return (
        <div className="skills-container">
            <h3>Mes Compétences</h3>
            <div className="navbar-skills">
                {Object.keys(skills).map((category) => (
                    <button
                        key={category}
                        className={`nav-item ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                className="skills-list"
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
            >
                <h4>Compétences en {activeCategory} :</h4>
                <ul>
                    {skills[activeCategory].map((skill, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {skill.name}
                            <div className="progress-bar">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 0.10 }}
                                />
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Skills;
