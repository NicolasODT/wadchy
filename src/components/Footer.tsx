'use client';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

// Style CSS commun
const textGold = { color: '#D2C7AE' };
const textPeach = { color: '#D97A54' };

export default function LuxuryFooter() {
    return (
        <footer style={{ borderTop: '1px solid rgba(210, 199, 174, 0.2)' }}>
            <div className="container mx-auto px-4 md:px-8 py-12">
                {/* Titre principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <h2 style={{
                        ...textGold,
                        fontSize: '2.25rem',
                        lineHeight: '2.5rem',
                        fontFamily: 'Cinzel, serif'
                    }}>
                        L&#39;EXCELLENCE COMME STANDARD
                    </h2>
                </motion.div>

                {/* Grille responsive */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center md:text-left mb-8 md:mb-0"
                    >
                        <h3 style={{ ...textGold, fontSize: '1.25rem', marginBottom: '1rem' }}>
                            CONTACT
                        </h3>
                        <ul style={{
                            fontFamily: 'Montserrat, sans-serif',
                            color: 'rgba(210, 199, 174, 0.8)',
                            gap: '0.75rem'
                        }}>

                            <li>
                                <a href="mailto:contact@wadchy.com" style={textGold}>
                                    contact@wadchy.com
                                </a>
                            </li>

                        </ul>
                    </motion.div>

                    {/* Réseaux sociaux */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8 md:mb-0"
                    >
                        <h3 style={{ ...textGold, fontSize: '1.25rem', marginBottom: '1rem' }}>
                            RÉSEAUX
                        </h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            {['https://www.instagram.com/wadchy_/', 'https://x.com/Wadchy_'].map((url) => (
                                <motion.div
                                    key={url}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <SocialIcon
                                        url={url}
                                        fgColor="#D2C7AE"
                                        bgColor="transparent"
                                        style={{ height: 40, width: 40 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center md:text-right"
                    >
                        <h3 style={{ ...textGold, fontSize: '1.25rem', marginBottom: '1rem' }}>
                            NAVIGATION
                        </h3>
                        <nav>
                            <ul style={{
                                fontFamily: 'Montserrat, sans-serif',
                                color: 'rgba(210, 199, 174, 0.8)',
                                gap: '0.75rem'
                            }}>
                                {['Services', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            style={textGold}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                </div>

                {/* Copyright */}
                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(210, 199, 174, 0.2)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.75rem',
                        color: 'rgba(210, 199, 174, 0.5)'
                    }}>
                        © {new Date().getFullYear()} WadChy. Tous droits réservés.
                    </p>
                </div>

                {/* Styles globaux pour les effets hover */}
                <style jsx global>{`
                    a:hover {
                        color: ${textPeach.color} !important;
                        transition: color 0.3s ease;
                    }
                    .social-icon:hover {
                        filter: brightness(1.2);
                    }
                `}</style>
            </div>
        </footer>
    );
}