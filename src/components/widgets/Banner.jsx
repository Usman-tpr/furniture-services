import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing shopping cart icon from React Icons
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Banner = () => {
    const { t } = useTranslation()
    return (
        <section className="relative bg-gradient-to-r from-gray-800 to-black py-32">
            <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side Text */}
                <div className="text-white w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 transform transition-transform duration-500 hover:scale-105">
                        {t('hero_title')}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6  transition-opacity duration-700 ease-in-out">
                       { t('hero_para')}
                    </p>

                    {/* Responsive Button */}

                    <Link
                        className="flex items-center justify-center bg-gradient-to-r from-gold-500 to-yellow-600 text-white py-4 px-8 rounded-full text-sm sm:text-base md:text-lg w-auto sm:w-auto md:w-72 hover:shadow-2xl hover:scale-110 transform transition-all duration-500 ease-in-out max-w-xs mx-auto sm:mx-0 lg:max-w-sm"
                    >
                        <FaShoppingCart className="mr-2 text-xl sm:text-2xl" />
                        <span>{t('hero_button')}</span>
                    </Link>

                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="/assets/images/luxury-house-setup.jpg" // Replace with your desired image
                        alt="Fancy Sofa Cover"
                        className="rounded-lg shadow-xl transform hover:scale-110 transition duration-500 ease-in-out w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
