'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Slide {
    image: string;
    title: string;
    description: string;
}

interface CarouselProps {
    slides?: Slide[];
}

const DEFAULT_SLIDES: Slide[] = [
    { image: '/img/1.png', title: 'Stratégie de Contenu', description: 'Contenu captivant pour capturer votre audience.' },
    { image: '/img/2.png', title: 'Réseaux Sociaux', description: 'Boostez votre présence avec une gestion experte.' },
    { image: '/img/3.png', title: 'Branding', description: 'Une identité unique qui marque les esprits.' },
    { image: '/img/4.png', title: 'Gestion Premium', description: 'Maximisez vos revenus avec élégance.' },
];

const LuxuryCarousel: React.FC<CarouselProps> = ({ slides = DEFAULT_SLIDES }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState([...slides, ...slides]);
    const [slideWidthPercentage, setSlideWidthPercentage] = useState(33.33);

    // Ajuster le pourcentage de largeur en fonction de la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlideWidthPercentage(100); // 1 slide sur mobile
            } else if (window.innerWidth < 1024) {
                setSlideWidthPercentage(50); // 2 slides sur écran moyen
            } else {
                setSlideWidthPercentage(100 / 3); // 3 slides sur grand écran (~33.33%)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Ajouter des slides pour le défilement infini
    useEffect(() => {
        if (currentIndex >= visibleSlides.length - slides.length) {
            setVisibleSlides((prev) => [...prev, ...slides]);
        }
    }, [currentIndex, slides, visibleSlides.length]);

    return (
        <div className="luxury-carousel bg-0A1F2E py-16 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-b from-D2C7AE/20 via-D97A54/30 to-0A1F2E/40 z-0"
            />

            <div className="carousel-wrapper relative w-full h-[500px] flex items-center justify-center z-10 overflow-hidden">
                <motion.div
                    className="carousel-container flex"
                    animate={{ x: `-${currentIndex * slideWidthPercentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    style={{ width: `${visibleSlides.length * slideWidthPercentage}%` }}
                >
                    {visibleSlides.map((slide, index) => (
                        <motion.div
                            key={`${slide.title}-${index}`}
                            className="carousel-slide relative w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative w-full h-[500px]">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="opacity-50 hover:opacity-75 transition-opacity duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={index < 2}
                                    placeholder="blur"
                                    blurDataURL="/"
                                    onError={() => console.error(`Erreur de chargement: ${slide.image}`)}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40">
                                    <h3
                                        style={{ fontFamily: 'Cinzel, serif' }}
                                        className="text-3xl md:text-4xl font-light text-white mb-2 drop-shadow-2xl"
                                    >
                                        <span
                                            style={{
                                                backgroundImage: 'linear-gradient(to right, #D2C7AE, #D2C7AE, #D97A54)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                                textShadow: '0 2px 12px rgba(210, 199, 174, 0.5)',
                                            }}
                                        >
                                            {slide.title}
                                        </span>
                                    </h3>
                                    <p
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        className="text-sm md:text-base text-D2C7AE tracking-widest uppercase"
                                    >
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>



        </div>
    );
};

export default LuxuryCarousel;