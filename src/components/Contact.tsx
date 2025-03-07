'use client';
import { motion } from 'framer-motion';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactSection() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('contact@wadchy.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textArea = document.createElement('textarea');
            textArea.value = 'contact@wadchy.com';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Style CSS brut pour les dégradés
    const gradientStyle = {
        backgroundImage: 'linear-gradient(90deg, #D2C7AE 0%, #D97A54 50%, #D2C7AE 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        animation: 'shine 3s linear infinite'
    };

    return (
        <section className="min-h-screen flex items-center bg-0A1F2E px-4 md:px-8 py-20" id="contact">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-12 text-left"
                >
                    {/* Titre principal */}
                    <div className="relative">
                        <h1 className="font-cinzel text-4xl md:text-6xl leading-tight">
                            <span className="block text-D2C7AE">Prêt à </span>
                            <span style={gradientStyle}>
                RÉVOLUTIONNER
              </span>
                            <span className="block text-D2C7AE mt-4">VOTRE PRÉSENCE ?</span>
                        </h1>
                        <div style={{
                            height: '2px',
                            width: '6rem',
                            background: 'linear-gradient(90deg, #D2C7AE 0%, #D97A54 100%)',
                            marginTop: '1.5rem'
                        }} />
                    </div>

                    {/* Email avec style brut */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block group"
                    >
                        <div className="flex items-center gap-4">
                            <a
                                href="mailto:contact@wadchy.com"
                                style={gradientStyle}
                                className="font-cinzel text-2xl md:text-3xl"
                            >
                                contact@wadchy.com
                            </a>

                            <motion.button
                                onClick={handleCopyEmail}
                                whileHover={{ scale: 1.1 }}
                                className="text-D97A54 hover:text-D2C7AE transition-colors"
                                aria-label="Copier l'email"
                            >
                                {copied ? (
                                    <FaCheck className="text-2xl text-green-400" />
                                ) : (
                                    <FaRegCopy className="text-2xl" />
                                )}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Description avec bordure dégradée */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6 max-w-2xl"
                    >
                        <p className="font-montserrat text-D2C7AE/80 text-lg pl-6 py-2"
                           style={{
                               borderLeft: '4px solid',
                               borderImage: 'linear-gradient(to bottom, #D2C7AE, #D97A54) 1'
                           }}>
                            Notre équipe conçoit des stratégies digitales exclusives pour les mordels d&#39;exception.
                        </p>

                        {/* Séparateur dégradé */}
                        <div style={{
                            height: '1px',
                            width: '100%',
                            background: 'linear-gradient(90deg, #D2C7AE 0%, #D97A54 50%, #D2C7AE 100%)'
                        }} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Définition CSS globale */}
            <style jsx global>{`
                @keyframes shine {
                    0% {
                        background-position: 0% center;
                    }
                    100% {
                        background-position: -200% center;
                    }
                }
            `}</style>
        </section>
    );
}