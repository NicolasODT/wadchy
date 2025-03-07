'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TaglineRotator from './TaglineRotator';

export default function BurgerNav() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Gestion du scroll pour disparition/réapparition
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const headerVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -20 },
    };

    return (
        <div>
            {/* Header fixe avec effet de disparition */}
            <motion.div
                className="fixed top-0 left-0 w-full z-50 bg-0A1F2E/90 backdrop-blur-sm"
                initial="visible"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={headerVariants}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <motion.h1
                        style={{ fontFamily: 'Cinzel, serif' }}
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        WadChy
                    </motion.h1>
                    {/* Le rotator remplace le menu burger */}
                    <TaglineRotator />
                </div>
            </motion.div>
        </div>
    );
}