"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiOnlyfans } from "react-icons/si";
import Head from "next/head";

// Typage des props pour SocialButton
interface SocialButtonProps {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    isPremium?: boolean;
    glowColor?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, label, icon: Icon, isPremium = false, glowColor }) => {
    const buttonVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            boxShadow: `0 0 2px ${isPremium ? "rgba(217, 122, 84, 0.8)" : glowColor || "rgba(128, 128, 128, 0.8)"}`,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        tap: { scale: 0.95 },
    };

    const glowVariants = {
        initial: { opacity: 0.3 },
        hover: { opacity: 0.8, scale: 1.1, transition: { duration: 0.3 } },
    };

    return (
        <motion.a
            href={href}
            className={clsx(
                "group relative rounded-full p-px overflow-hidden",
                isPremium ? "bg-secondary/80" : "bg-tertiary/50",
                "min-w-[160px] h-[34px]" // Taille uniforme pour tous, comme OnlyFans
            )}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
        >
            {/* Effet Glow Externe */}
            <motion.span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="inset-0 absolute pointer-events-none select-none">
          <motion.span
              className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
              style={{
                  background: `linear-gradient(135deg, ${isPremium ? "#D97A54" : glowColor || "#808080"}, ${
                      isPremium ? "#D2C7AE" : "#D2C7AE"
                  }, ${isPremium ? "#808080" : glowColor || "#D97A54"})`,
              }}
              variants={glowVariants}
          />
        </span>
            </motion.span>

            {/* Effet Néon Interne */}
            <motion.span
                className="absolute inset-0 pointer-events-none select-none"
                style={{ animation: "border-glow-translate 10s ease-in-out infinite alternate" }}
            >
                <motion.span
                    className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                    style={{
                        animation: "border-glow-scale 10s ease-in-out infinite alternate",
                        background: `linear-gradient(135deg, ${isPremium ? "#D97A54" : glowColor || "#808080"}, ${
                            isPremium ? "#D2C7AE" : "#D2C7AE"
                        }, ${isPremium ? "#808080" : glowColor || "#D97A54"})`,
                    }}
                    variants={glowVariants}
                />
            </motion.span>

            {/* Effet de Pulsation Dégradée pour OnlyFans */}
            {isPremium && (
                <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `linear-gradient(45deg, #D97A54, #D2C7AE, #808080)`,
                        opacity: 0.5,
                        boxShadow: "0 0 10px rgba(217, 122, 84, 0.5)",
                    }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            )}

            {/* Lueur Subtile pour les Réseaux Sociaux */}
            {!isPremium && (
                <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 5px ${glowColor}`, opacity: 0.4 }}
                    animate={{ opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            )}

            {/* Diamant Flottant pour OnlyFans */}
            {isPremium && (
                <motion.span
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-[2]"
                    animate={{ y: [-5, 0, -5], opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 4L18 10H6L12 4ZM6 10L2 16H22L18 10H6ZM2 16L12 22L22 16H2Z"
                            fill="url(#diamondGradient)"
                            stroke="rgba(255, 255, 255, 0.8)"
                            strokeWidth="1.5"
                        />
                        <defs>
                            <linearGradient id="diamondGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FFFFFF" />
                                <stop offset="50%" stopColor="#F0F8FF" />
                                <stop offset="100%" stopColor="#D3D3D3" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <motion.span
                        className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"
                        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                    />
                </motion.span>
            )}

            {/* Contenu du Bouton */}
            <span
                className={clsx(
                    "flex items-center justify-center gap-2 relative z-[1] rounded-full py-2 px-3 w-full", // Augmenté py-2 pour plus d'espace vertical
                    isPremium ? "bg-background/90" : "bg-background/70"
                )}
            >
  <motion.span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
    <Icon className="w-4 h-4 text-white" />
    <motion.span
        className="rounded-full size-8 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md"
        style={{
            background: `linear-gradient(135deg, ${isPremium ? "#D97A54" : glowColor || "#808080"}, ${
                isPremium ? "#D2C7AE" : "#D2C7AE"
            }, ${isPremium ? "#808080" : glowColor || "#D97A54"})`,
            animation: "star-shine 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate",
        }}
    />
  </motion.span>
  <span
      className={clsx(
          "ml-1 text-[10px] font-medium transition-transform group-hover:scale-105 relative flex items-center gap-1",
          isPremium ? "text-secondary" : "text-white"
      )}
  >
    {label}
  </span>
</span>
        </motion.a>
    );
};


export default function Home() {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 400], [0, -50]);

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <div className="min-h-screen  text-white font-montserrat overflow-hidden relative flex items-center justify-center p-4">
                {/* Conteneur Flex pour Carte + Explication */}
                <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    {/* Carte à Gauche */}
                    <motion.div
                        className="w-full md:w-1/2 max-w-md bg-gradient-to-b from-background/90 to-background/70 rounded-lg shadow-lg border border-[#D2C7AE] relative overflow-hidden"

                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Bannière */}
                        <motion.div ref={ref} style={{ y }} className="relative w-full h-64 overflow-hidden rounded-t-lg">
                            <Image src="/img/16.jpg" alt="Bannière stylée" fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
                            <motion.h1
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8 text-2xl md:text-3xl font-cinzel text-center text-transparent bg-clip-text animate-[gradientFlow_6s_infinite_linear]"
                                style={{ backgroundImage: "linear-gradient(90deg, #D2C7AE, #D97A54, #808080, #D2C7AE)", backgroundSize: "200% 200%", textShadow: "0 0 10px rgba(210, 199, 174, 0.5)" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Model
                            </motion.h1>
                        </motion.div>

                        {/* Boutons */}
                        <div className="p-2 flex flex-col items-center space-y-5 h-68">
                            <SocialButton href="https://onlyfans.com/wadchy_" label="OnlyFans" icon={SiOnlyfans} isPremium />
                            <SocialButton href="https://instagram.com/wadchy_" label="Instagram" icon={FaInstagram} glowColor="#E1306C" />
                            <SocialButton href="https://x.com/wadchy_" label="X (Twitter)" icon={FaXTwitter} glowColor="#1DA1F2" />
                            <SocialButton href="https://tiktok.com/wadchy_" label="TikTok" icon={FaTiktok} glowColor="#69C9D0" />
                        </div>

                        {/* Particules dans la Carte */}
                        <motion.div className="absolute inset-0 pointer-events-none z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                            {Array.from({ length: 50 }).map((_, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: `radial-gradient(circle, ${Math.random() > 0.5 ? "#D97A54" : "#D2C7AE"} 0%, transparent 70%)` }}
                                    animate={{ y: [0, -10, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 1, ease: "easeInOut" }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Explication à Droite */}
                    <div className="w-full md:w-1/2 text-white font-montserrat">
                        <motion.h2
                            className="text-2xl md:text-3xl font-cinzel text-transparent bg-clip-text animate-[gradientFlow_6s_infinite_linear]"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #D2C7AE, #D97A54, #808080, #D2C7AE)",
                                backgroundSize: "200% 200%",
                                textShadow: "0 1px 4px rgba(210, 199, 174, 0.4)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Votre Multi-Link de Luxe
                        </motion.h2>
                        <motion.p
                            className="text-sm md:text-base leading-relaxed mt-4 text-white/90"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Un Multi-Link élégante conçue pour nos modèles premium. Elle met en avant :
                        </motion.p>
                        <ul className="list-disc list-inside mt-2 text-sm md:text-base text-white/90">
                            <li><strong>Une bannière</strong> qui sublime votre nom ou image.</li>
                            <li><strong>Des boutons</strong> pour vos réseaux, avec des effets premium.</li>
                        </ul>
                        <motion.p
                            className="text-sm md:text-base leading-relaxed mt-4 text-white/90"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        >
                            Une vitrine chic pour centraliser vos liens avec un design raffiné.
                        </motion.p>
                        <motion.p
                            className="text-sm md:text-base leading-relaxed mt-4 text-white/90"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        >
                            Chaque modèle possède une vitrine unique accessible via son propre site personnalisé, comme{" "}
                            <span className="font-medium text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #D2C7AE, #D97A54)" }}>
    nommodel.wadchy.com
  </span>.
                            <div className="mt-2"></div> {/* Remplace les <br/> par un espacement naturel */}
                            Voici un exemple type :{" "}
                            <motion.a
                                href="https://models.wadchy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-block font-medium"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #D2C7AE, #D97A54, #808080, #D2C7AE)",
                                    backgroundSize: "200% 200%",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                models.wadchy.com
                                <motion.span
                                    className="block mt-1 h-[2px] bg-gradient-to-r from-[#D2C7AE] to-[#D97A54]"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </motion.a>
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* CSS Personnalisé */}
            <style jsx global>{`
                @keyframes border-glow-translate {
                    0% { transform: translateX(-50%) translateY(-33%); }
                    100% { transform: translateX(-50%) translateY(33%); }
                }
                @keyframes border-glow-scale {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                @keyframes star-shine {
                    0% { opacity: 0; transform: scale(0); }
                    50% { opacity: 0.3; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0); }
                }
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .font-cinzel { font-family: "Cinzel", serif; }
                .font-montserrat { font-family: "Montserrat", sans-serif; }
                h1, h2 { background-size: 200% 200%; }
            `}</style>
        </>
    );
}