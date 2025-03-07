'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    // Mise à jour de l’heure chaque seconde
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer); // Nettoyage au démontage
    }, []);

    // Formatage en français
    const formattedDate = time.toLocaleDateString('fr-FR', {

        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const formattedTime = time.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <motion.div
            className="text-right"
            style={{
                fontFamily: 'Cinzel, serif',
                color: '#FFFFFF'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-s md:text-base">{formattedDate}</p>
            <p className="text-sm md:text-l font-bold">{formattedTime}</p>
        </motion.div>
    );
}