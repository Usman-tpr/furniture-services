import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const BeforeAfterSection = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="before-after-section bg-gray-950 py-10 mt-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm md:text-3xl font-bold text-white tracking-wider">
         {t("section3_title")}
        </h2>
        <p className="text-sm md:text-lg text-white mt-4">
          {t("section3_para")}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-8">
        {/* Before */}
        <div
          className={`relative group w-full lg:w-1/2 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <img
            src="/assets/images/home-images/bedroom-before-and-after.jpg"
            alt="Before Setup"
            className="w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center rounded-xl"></div>
        </div>

        {/* After */}
        <div
          className={`relative group w-full lg:w-1/2 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          <img
            src="/assets/images/home-images/beforeandafter.jpg"
            alt="After Setup"
            className="w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center rounded-xl"></div>
        </div>
      </div>

      <div className="text-center mt-12 flex items-center justify-center">
        <button
          className="flex mt-4 py-2 px-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md text-white text-md font-semibold hover:scale-105 transform transition-all duration-300"
        >
        { t("section3_button")}
        </button>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
