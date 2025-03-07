'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const faqData = [
    { question: "C’est quoi OFM premium ?", answer: "Un service exclusif pour booster tes revenus avec classe." },
    { question: "Comment améliorez-vous mon contenu ?", answer: "Stratégies sur mesure et visuels captivants adaptés à toi." },
    { question: "Quand verrai-je des résultats ?", answer: "Dès 30 jours, avec une optimisation continue." },
    { question: "Ça coûte combien ?", answer: "Prix personnalisé selon tes objectifs—contacte-nous !" },
    { question: "Je peux gérer mes réseaux moi-même ?", answer: "Oui, mais on te propulse vers l’excellence." },
];

export default function LuxuryFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black py-20 px-6 md:px-16 lg:px-32">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#D4AF37]"
            >
                Questions Fréquentes
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-6">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="border-b border-[#2C2C2C] pb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="font-serif text-xl md:text-2xl text-white">
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaAngleDown className="text-[#D4AF37] text-2xl" />
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="font-sans text-gray-300 text-base md:text-lg mt-4">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}