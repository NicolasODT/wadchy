'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Nicolas T.",
            role: "Fondateur & Directeur Technique",
            bio: `Diplômé d'un Master en Management en Ingénierie Informatique,  
Nicolas T. pilote la stratégie technique dédiée à la gestion de contenus sur OnlyFans.  
Expert en développement d’outils digitaux et en automatisation des processus de monétisation,  
il conçoit des solutions innovantes pour optimiser l'engagement et la rentabilité des créateurs de contenu sur la plateforme.`
        },
        {
            name: "Aurélien D.",
            role: "Co-Fondateur & Responsable des Opérations",
            bio: `Titulaire d'un Bachelor en Management Logistique,  
Aurélien D. supervise l'optimisation des workflows et la coordination des opérations liées à la gestion des contenus OnlyFans.  
Sa maîtrise de la gestion de projets digitaux et de l'analyse des tendances du marché lui permet d'adapter en continu nos produits aux besoins spécifiques des créateurs,  
garantissant ainsi une performance optimale de la plateforme.`
        }
    ];



    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-0A1F2E py-24 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-cinzel text-D2C7AE mb-4">
                        L&apos;Équipe{" "}
                        <span
                            style={{
                                backgroundImage: 'linear-gradient(to right, #D2C7AE, #D97A54)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                textShadow: '0 2px 8px rgba(210, 199, 174, 0.3)'
                            }}
                        >
                            d&apos;Exception
                        </span>
                    </h2>
                    <p className="font-montserrat text-gray-300 max-w-2xl mx-auto text-lg">
                        Des professionnels aguerris au service de votre réussite
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center space-x-4 px-6 py-4 text-left focus:outline-none"
                            >
                                <FaChevronRight
                                    className={`transition-transform duration-300 text-D2C7AE ${openIndex === index ? 'rotate-90' : ''}`}
                                    size={20}
                                />
                                <h3
                                    className="font-cinzel text-3xl"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #D2C7AE, #D97A54)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        textShadow: '0 2px 8px rgba(210, 199, 174, 0.3)'
                                    }}
                                >
                                    {member.name}
                                </h3>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="overflow-hidden px-6"
                                    >
                                        <div className="py-8 bg-0A1F2E/90 backdrop-blur-sm">
                                            <p
                                                className="font-montserrat text-xl uppercase tracking-wider mb-3"
                                                style={{
                                                    backgroundImage: 'linear-gradient(to right, #D97A54, #D2C7AE)',
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    color: 'transparent'
                                                }}
                                            >
                                                {member.role}
                                            </p>
                                            <p className="font-montserrat text-gray-300 text-lg leading-relaxed">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center border-t border-D2C7AE/20 pt-10"
                >
                    <div className="flex items-center justify-center space-x-4">

                        <p
                            className="font-montserrat text-lg"
                            style={{
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'white'
                            }}
                        >
                            Toutes nos collaborations sont régies par des contrats validés par un professionnel du droit, conformément au Code civil (article 1108) et à la législation française. Tout litige éventuel sera soumis aux tribunaux compétents.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
