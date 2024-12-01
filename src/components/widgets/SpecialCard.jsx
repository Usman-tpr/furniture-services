import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SpecialCard = () => {
    const { t }  = useTranslation()
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section className="py-24">
            <div className=" mx-auto px-6">
                <h2 className="text-sm font-extrabold text-center mb-24 relative group sm:text-4xl">
                    {t("section2_heading")}
                </h2>

                {/* Card Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div
                        className={`group relative overflow-hidden rounded-lg shadow-xl transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== 0 ? "opacity-50" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src="/assets/images/luxury-house-setup.jpg"
                            alt="Luxury Sofa"
                            className="w-full h-60 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <Link
                                to='/our-work'
                                className="mt-4 inline-block py-2 px-4 bg-gradient-to-r from-black to-blue-950 rounded-lg text-white text-sm font-semibold hover:scale-105 transform transition-all duration-300"
                            >
                                {t("section2_button")}
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className={`group relative overflow-hidden rounded-lg shadow-xl transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== 1 ? "opacity-50" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src="/assets/images/chair.png"
                            alt="Modern Chair"
                            className="w-full h-60 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <Link
                                to='/our-work'
                                className="mt-4 inline-block py-2 px-4 bg-gradient-to-r from-black to-blue-950 rounded-lg text-white text-sm font-semibold hover:scale-105 transform transition-all duration-300"
                            >
                                {t("section2_button")}
                                </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className={`group relative overflow-hidden rounded-lg shadow-xl transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== 2 ? "opacity-50" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src="/assets/images/sofa.png"
                            alt="Luxury Bed"
                            className="w-full h-60 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <Link
                                to='/our-work'
                                className="mt-4 inline-block py-2 px-4 bg-gradient-to-r from-black to-blue-950 rounded-lg text-white text-sm font-semibold hover:scale-105 transform transition-all duration-300"
                            >
                                {t("section2_button")}
                                </Link>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div
                        className={`group relative overflow-hidden rounded-lg shadow-xl transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== 3 ? "opacity-50" : ""
                            }`}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src="/assets/images/bed.png"
                            alt="Living Room"
                            className="w-full h-60 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <Link
                                to='/our-work'
                                className="mt-4 inline-block py-2 px-4 bg-gradient-to-r from-black to-blue-950 rounded-lg text-white text-sm font-semibold hover:scale-105 transform transition-all duration-300"
                            >
                                {t("section2_button")}
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SpecialCard;
