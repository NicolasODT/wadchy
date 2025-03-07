'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Taglines en français, courtes et en rapport avec WadChy
const taglines = [
    'Brillez comme jamais',
    'Succès sans limites',
    'Glamour & Fortune',
    'Votre empire OnlyFans',
    'Luxe et séduction',
    'Révèle ta star',
    'Revenus maximisés',
    'Éclat et élégance',
    'Devenez iconique',
    'Le pouvoir du charme',
];

export default function TaglineRotator() {
    const [currentTagline, setCurrentTagline] = useState(0);

    // Rotation des taglines toutes les 5 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length);
        }, 5000); // Change toutes les 5 secondes
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="text-right"
            style={{
                fontFamily: 'Cinzel, serif',
                color: '#FFFFFF',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.p
                key={currentTagline} // Key change déclenche l’animation à chaque nouvelle tagline
                className="text-xs md:text-xs" // Texte petit, pas bold
                style={{ textShadow: '0 0 5px rgba(255, 105, 180, 0.5)' }} // Glow rose
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }} // Transition lente pour un fondu doux
            >
                {taglines[currentTagline]}
            </motion.p>
        </motion.div>
    );
}