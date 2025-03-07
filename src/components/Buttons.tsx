'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

function Buttons({ customLabels = [], mobileLayout = 'column' }) {
    const router = useRouter();

    const buttonsConfig = [
        {
            label: customLabels[0] || 'Contactez-nous',
            onClick: () => handleScrollTo('#contact')
        },
        {
            label: customLabels[1] || 'Découvrez nos services',
            onClick: () => handleScrollTo('#services')
        }
    ].slice(0, customLabels.length || 2);

    const handleScrollTo = (selector: string) => {
        router.push(selector);
        const section = document.querySelector(selector);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`flex ${mobileLayout === 'single' ? 'flex-col' : 'flex-col md:flex-row'} gap-4 w-full md:w-auto`}>
            {buttonsConfig.map((button, index) => (
                <motion.button
                    key={index}
                    onClick={button.onClick}
                    style={{
                        backgroundColor: '#171717',
                        color: '#FFFFFF',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0px',
                        fontWeight: '500',
                        fontFamily: 'Montserrat, sans-serif',
                        border: '2px solid',
                        borderImageSource: 'linear-gradient(45deg, #D2C7AE, #D97A54, #808080)',
                        borderImageSlice: 1,
                        borderImageWidth: '1px',
                        borderImageRepeat: 'round',
                        animation: 'rotateBorder 6s linear infinite',
                        boxShadow: '0 0 8px rgba(210, 199, 174, 0.3)',
                        cursor: 'pointer',
                        width: mobileLayout === 'single' ? '100%' : 'auto',
                        minWidth: '240px'
                    }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 0 15px rgba(210, 199, 174, 0.6)',
                        backgroundColor: '#0A1F2E/95',
                        borderImageWidth: '3px',
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