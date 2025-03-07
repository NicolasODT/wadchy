"use client";

import { motion } from "framer-motion";

// Interface pour les props du composant Buttons
interface ButtonsProps {
    customLabels?: string[]; // Tableau de chaînes, optionnel
    mobileLayout?: "single" | "column"; // Type restreint pour mobileLayout
}

function Buttons({ customLabels = [], mobileLayout = "column" }: ButtonsProps) {
    // Tableau de labels par défaut
    const defaultLabels = [
        "Contactez-nous",
        "Découvrez nos services",
    ];

    // Fusion des labels par défaut avec les labels personnalisés
    const buttonsConfig = defaultLabels.map((defaultLabel, index) => ({
        label: customLabels[index] || defaultLabel, // Si customLabels[index] existe, on l'utilise, sinon on prend le défaut
        onClick: () => handleScrollTo(index === 0 ? "#contact" : "#services"),
    })).slice(0, customLabels.length || 2); // Limite à la longueur de customLabels ou 2 si non spécifié

    const handleScrollTo = (selector: string) => {
        // Utilisation de scrollIntoView directement pour les ancres
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Section ${selector} non trouvée dans le DOM.`);
        }
    };

    return (
        <div
            className={`flex ${
                mobileLayout === "single" ? "flex-col" : "flex-col md:flex-row"
            } gap-4 w-full md:w-auto`}
        >
            {buttonsConfig.map((button, index) => (
                <motion.button
                    key={index}
                    onClick={button.onClick}
                    style={{
                        backgroundColor: "#171717",
                        color: "#FFFFFF",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "0px",
                        fontWeight: "500",
                        fontFamily: "Montserrat, sans-serif",
                        border: "2px solid",
                        borderImageSource: "linear-gradient(45deg, #D2C7AE, #D97A54, #808080)",
                        borderImageSlice: 1,
                        borderImageWidth: "1px",
                        borderImageRepeat: "round",
                        animation: "rotateBorder 6s linear infinite",
                        boxShadow: "0 0 8px rgba(210, 199, 174, 0.3)",
                        cursor: "pointer",
                        width: mobileLayout === "single" ? "100%" : "auto",
                        minWidth: "240px",
                    }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 15px rgba(210, 199, 174, 0.6)",
                        backgroundColor: "#0A1F2E95",
                        borderImageWidth: "3px",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-center hover:bg-0A1F2E/95 transition-all duration-300 text-sm md:text-base"
                >
                    {button.label}
                </motion.button>
            ))}
        </div>
    );
}

export default Buttons;