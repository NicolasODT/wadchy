'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

// Liste de stats avec icônes
const stats = [
    { icon: <FaStar />, label: 'Modèles gérés', value: 120 },
    { icon: <FaMoneyBillWave />, label: 'Revenus générés', value: 500000 },
    { icon: <FaUsers />, label: 'Abonnés gagnés', value: 10000 },
];

export default function StatsRotator() {
    const [currentStat, setCurrentStat] = useState(0);

    // Rotation des stats toutes les 5 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const { icon, label, value } = stats[currentStat];

    return (
        <motion.div
            className="text-right flex items-center gap-2"
            style={{
                fontFamily: 'Cinzel, serif',
                color: '#FFFFFF',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.span
                key={currentStat}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
                className="text-2xl text-FF69B4"
            >
                {icon}
            </motion.span>
            <motion.p
                key={currentStat}
                className="text-sm md:text-base font-bold"
                style={{ textShadow: '0 0 5px rgba(255, 105, 180, 0.5)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
            >
                {label}: {value.toLocaleString()}
            </motion.p>
        </motion.div>
    );
}