'use client';
import { motion } from 'framer-motion';
import Buttons from "@/components/Buttons";

const services = [
    {
        title: 'Stratégie de Contenu',
        subtitle: 'Scénarisation sur-mesure',
        description: `
      Ligne éditoriale exclusive transformant vos publications en une histoire cohérente.\n
      Analyse de tendances et production visuelle pour booster identité et engagement.
    `
    },
    {
        title: 'Gestion des Réseaux',
        subtitle: 'Optimisation technique et relationnelle',
        description: `
      Gestion experte synchronisant publications et interactions qualitatives.\n
      Outils pro pour maximiser l’engagement tout en restant authentique.
    `
    },
    {
        title: 'Monétisation',
        subtitle: 'Stratégie de valorisation',
        description: `
      Approche personnalisée optimisant vos revenus via analyse d’audience.\n
      Abonnements premium, offres exclusives et suivi pour une rentabilité durable.
    `
    }
];

export default function ServicesTimeline() {
    return (
        <section className="bg-0A1F2E py-16 px-4 md:py-24 md:px-8 lg:px-36 relative overflow-hidden" id="services">
            {/* Fond texturé */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full pattern-dots pattern-D2C7AE pattern-opacity-20 pattern-size-4" />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative max-w-6xl mx-auto"
            >
                {/* Ligne verticale animée - visible uniquement sur desktop */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, 0.97] }}
                    className="hidden md:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-D2C7AE/30 via-D97A54/60 to-D2C7AE/30 transform -translate-x-1/2"
                />

                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: index * 0.3,
                            type: 'spring',
                            stiffness: 60,
                            damping: 12
                        }}
                        className={`relative mb-20 md:mb-32 w-full ${index % 2 === 0 ? 'md:pr-[45%] md:pl-8' : 'md:pl-[45%] md:pr-8'} flex flex-col items-center md:items-start`}
                    >
                        <div className="relative z-10 space-y-5 w-full max-w-md">
                            {/* Numérotation stylisée */}
                            <div className={`absolute ${index % 2 === 0 ? 'left-2 md:-left-20' : 'right-2 md:-right-20'} -top-4 md:top-0`}>
                <span className="font-cinzel text-4xl md:text-7xl opacity-25 text-D97A54">
                  {String(index + 1).padStart(2, '0')}
                </span>
                            </div>

                            {/* Point de timeline animé */}
                            <motion.div
                                className={`absolute ${index % 2 === 0 ? 'right-2 md:-right-16' : 'left-2 md:-left-16'} top-6 md:top-10`}
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-D97A54/90 flex items-center justify-center p-1">
                                    <div className="w-full h-full border-2 border-D2C7AE/40 rounded-full animate-pulse" />
                                </div>
                            </motion.div>

                            {/* Titre principal */}
                            <h3
                                className="font-cinzel text-2xl md:text-4xl mb-1 tracking-wider text-center md:text-left relative z-20"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #D2C7AE, #D97A54)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    textShadow: '0 4px 12px rgba(210, 199, 174, 0.2)'
                                }}
                            >
                                {service.title}
                            </h3>

                            {/* Sous-titre */}
                            <p className="font-montserrat text-sm md:text-lg italic text-D97A54/85 text-center md:text-left pl-0 md:pl-4">
                                {service.subtitle}
                            </p>

                            {/* Description détaillée */}
                            <div className="font-montserrat text-white space-y-2 text-sm md:text-base">
                                {service.description.split('\n').map((line, i) => (
                                    <p
                                        key={i}
                                        className="relative pl-3 md:pl-6 text-center md:text-left before:absolute before:left-0 before:top-2 md:before:top-3 before:w-1.5 before:h-px before:bg-D97A54/60"
                                    >
                                        {line.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Final */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 60, damping: 12 }}
                className="relative text-center mt-12 md:mt-24 py-12 px-4 overflow-hidden"
            >
                {/* Fond dégradé animé */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-gradient-to-br from-0A1F2E via-D2C7AE/10 to-D97A54/5 rounded-xl"
                    />
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                    <h3 className="font-cinzel text-xl md:text-3xl mb-6">
                        <span className="text-D2C7AE">Prêt à </span>
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #D2C7AE 0%, #D97A54 50%, #D2C7AE 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                backgroundSize: '200% auto',
                                animation: 'textShine 4s linear infinite'
                            }}
                        >
              Révolutionner
            </span>
                        <span className="text-D2C7AE"> Votre Présence ?</span>
                    </h3>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-montserrat text-gray-300 max-w-md md:max-w-xl mx-auto mb-8 text-xs md:text-base leading-relaxed"
                    >
                        Notre équipe d’élite vous offre une consultation exclusive pour sculpter une stratégie sur-mesure à la hauteur de vos ambitions.
                    </motion.p>

                    {/* Bouton avec effet de profondeur */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block perspective-1000"
                    >
                        <div className="relative transform transition-transform duration-500 hover:rotate-x-12">
                            <Buttons
                                customLabels={["Accéder à l'Excellence"]}
                                mobileLayout="single"
                            />
                        </div>
                    </motion.div>

                    {/* Signature Luxe animée */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.4, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 md:mt-16 opacity-40 hover:opacity-70 transition-opacity"
                    >
                        <svg
                            className="mx-auto h-6 w-6 md:h-8 md:w-8 text-D97A54"
                            viewBox="0 0 32 32"
                            style={{ filter: 'drop-shadow(0 0 4px rgba(217,122,84,0.3))' }}
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M16 28.5L16 12M22 18L16 12L10 18"
                                style={{ animation: 'arrowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                            />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}