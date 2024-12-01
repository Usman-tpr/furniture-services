import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Use the hook to get translations
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change language when a button is clicked
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navitems = ["Home", "Our Work", "About", "Services", "Contact" , "Upload"];
  if(localStorage.getItem("Aryan")){
   navitems.push("Ary")

  }

  return (
    <nav className="flex sm:flex-row flx-col items-center justify-between px-8 py-4">
      {/* Left section - Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-bold text-gray-900 tracking-wide">
          Ayan Curtain
        </Link>
      </div>

      {/* Center section - Navigation Links */}
      <div className="flex items-center space-x-10 text-lg font-medium">
        {navitems.map((item, index) => (
          <li key={index} className="list-none">
            <Link
              to={`${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative text-gray-800 hover:text-gray-900 transition duration-300 group"
            >
              {t(item)} {/* Use `t()` to get the translated text */}
              <span
                className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
        ))}
      </div>

      {/* Right section - Language Dropdown */}
      <div className="relative">
        <button 
          onClick={toggleDropdown} // Toggle dropdown visibility
          className="text-gray-800 hover:text-gray-900 transition duration-300 focus:outline-none"
        >
          {t('Language')} {/* Translate the word "Language" */}
        </button>
        
        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 right-0 mt-2 w-24   bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="text-gray-800 text-sm">
              <li>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  English
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange('ms')}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Malay
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
