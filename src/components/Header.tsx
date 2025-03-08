'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Image from 'next/image';

const backgroundImages = Array.from({ length: 18 }, (_, i) => `/img/${i + 1}.jpg`);

export default function Header() {
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [nextImages, setNextImages] = useState<(string | null)[]>(Array(6).fill(null));
    const [transitioningIndices, setTransitioningIndices] = useState<number[]>([]);
    const [hasChanged, setHasChanged] = useState<boolean[]>(Array(6).fill(false));
    const [lastChangedIndex, setLastChangedIndex] = useState<number | null>(null);
    const maxImages = 6;

    useEffect(() => {
        const initialImages = getRandomImages(maxImages);        setCurrentImages(initialImages);
    }, []);

    const getRandomImages = (count: number): string[] => {
        const shuffled = [...backgroundImages].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    const updateImageAtIndex = (index: number) => {
        if (nextImages[index]) {
            setCurrentImages((prev) => {
                const newImages = [...prev];
                newImages[index] = nextImages[index]!;
                return newImages;
            });
            setHasChanged((prev) => {
                const newChanged = [...prev];
                newChanged[index] = true;
                return newChanged;
            });
        }
    };

    const changeImageAtIndex = (index: number) => {
        const newImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
        if (currentImages.some((img, i) => i !== index && img === newImage)) {
            changeImageAtIndex(index);
            return;
        }
        setNextImages((prev) => {
            const newNext = [...prev];
            newNext[index] = newImage;
            return newNext;
        });
        setTransitioningIndices((prev) => [...prev, index]);
        setLastChangedIndex(index);
    };

    useEffect(() => {
        if (currentImages.length === 0) return;

        const timers: NodeJS.Timeout[] = [];
        currentImages.forEach((_, index) => {
            if (!hasChanged[index]) {
                const randomInterval = Math.random() * 5000 + 3000;
                const timer = setTimeout(() => {
                    let newIndex = index;
                    if (lastChangedIndex === index) {
                        const availableIndices = Array.from({ length: maxImages }, (_, i) => i).filter(
                            (i) => i !== index
                        );
                        newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)] || index;
                    }
                    changeImageAtIndex(newIndex);
                }, randomInterval);
                timers.push(timer);
            }
        });

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, [currentImages, lastChangedIndex, hasChanged]);

    const { scrollYProgress } = useScroll();
    const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section
            className="min-h-screen flex flex-col items-start justify-end text-left px-4 md:px-8 py-16 overflow-hidden relative rounded-xl"
            style={{ backgroundColor: '#0A1F2E' }}
        >
            {/* Fond avec grille d'images et particules */}
            <div className="absolute inset-0 z-0">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-1 w-full h-full">
                    {currentImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`w-full h-full relative ${index >= 2 ? 'hidden md:block' : ''} rounded-lg`}
                            style={{ y: yTranslate }}
                        >
                            <motion.div
                                className="absolute inset-0"
                                initial={{ opacity: 1, scale: 1.05 }}
                                animate={{
                                    opacity: transitioningIndices.includes(index) ? 0 : 1,
                                    scale: transitioningIndices.includes(index) ? 1 : 1.05,
                                }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                onAnimationComplete={() => {
                                    if (transitioningIndices.includes(index) && nextImages[index]) {
                                        updateImageAtIndex(index);
                                    }
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={`Modèle ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '0.5rem', objectPosition: 'center' }}
                                    className="opacity-50 hover:opacity-75 transition-opacity duration-300"
                                    loading="lazy"
                                />
                            </motion.div>
                            {nextImages[index] && (
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1 }}
                                    animate={{
                                        opacity: transitioningIndices.includes(index) ? 1 : 0,
                                        scale: transitioningIndices.includes(index) ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                >
                                    <Image
                                        src={nextImages[index]!}
                                        alt={`Modèle ${index + 1} - Next`}
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: '0.5rem', objectPosition: 'center' }}
                                        className="opacity-50 hover:opacity-75 transition-opacity duration-300"
                                        loading="eager"
                                    />
                                </motion.div>
                            )}
                            <motion.div
                                className="absolute inset-0 rounded-lg"
                                whileHover={{ boxShadow: '0 0 30px rgba(210, 199, 174, 0.5)' }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Overlay corrigé */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-b from-D2C7AE/20 via-D97A54/30 to-0A1F2E/40 z-10 rounded-xl pointer-events-none"
            />

            {/* Contenu texte modifié */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-30 text-left mb-8 ml-4 md:ml-16 rounded-lg"
            >
                <motion.p
                    style={{ color: '#D2C7AE', fontFamily: 'Montserrat, sans-serif' }}
                    className="text-sm md:text-lg tracking-widest uppercase mb-4 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Gestion premium
                </motion.p>
                <motion.h1
                    style={{ fontFamily: 'Cinzel, serif' }}
                    className="text-4xl md:text-7xl font-light text-white leading-tight md:leading-none mb-6 md:mb-8 drop-shadow-2xl rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Votre{' '}
                    <span className="luxury-glow">
                        réussite
                    </span>{' '}
                    OnlyFans
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="relative group rounded-lg"
                >
                    <div className="absolute inset-0 bg-D97A54/20 blur-2xl md:blur-3xl group-hover:blur-4xl transition-all duration-300 rounded-lg pointer-events-none" />
                    <Buttons />
                </motion.div>
            </motion.div>
        </section>
    );
}